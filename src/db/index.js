/*
RethinkDB setup

NOTE: Redux is handled slightly differently with using database
socket.io makes changes to database, and changefeeds then triggers actions in redux
RethinkDB interaction FIRST -> Redux store maintenance SECOND
*/
import * as actions from '../actions'
import changefeeds from './changefeeds'
var r = require('rethinkdb')

export default function(app) {

    r.connect({ db: 'webstarter' }).then(function(connection) {

        var ioServer = app.listen(process.env.PORT || 1234, listen);
        var io = require('socket.io')(ioServer);

        function listen() {
            var host = ioServer.address().address;
            var port = ioServer.address().port;
            console.log('socket.io listening at http://' + host + ':' + port);
        }

    	io.sockets.on('connection', function (socket) {

            /*
            emitted from React.jsx components. triggered by user action.
            RethinkDB API inserts/updates data
            */
            socket.on(actions.UPDATE_APP_STATE, function(newAppState) {
                try {
                    r.table('appState').get(newAppState.id).update(newAppState).run(connection);
                }
                catch(err) {
                    r.table('appState').insert(newAppState).run(connection);
                }
            })

            /*
            RethinkDB changefeed: triggers Redux app state maintenance
            see next: ~/src/db/changefeeds.js
            */
            r.table('appState').changes({ includeInitial: true, squash: true }).run(connection).then(changefeeds(socket));
    	});
    })
    .error(function(error) {
    	console.log('Error connecting to RethinkDB!\n',error);
    });
}
