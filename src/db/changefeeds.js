/*
RethinkDB changefeed objects: https://rethinkdb.com/docs/changefeeds/javascript/
see prev: ~/src/db/index.js
line: r.table('appState').changes({ includeInitial: true, squash: true }).run(connection).then(changefeeds(socket));
see next: ~/src/db/changefeed-listeners.js
*/
import * as actions from '../actions'

export default function(socket) {

	return function(rows) {
		rows.each(function(err, row) {
			if (err) {
				return console.log(err)
			}
			else if (row.new_val && !row.old_val) {	//	insert
				socket.emit('changefeed_' + actions.INSERT_OBJECT, row.new_val);
			}
			else if (row.new_val && row.old_val) {	//	edit
				socket.emit('changefeed_' + actions.EDIT_OBJECT, row.new_val);
			}
			else if (row.old_val && !row.new_val) {	//	delete
				// socket.emit('changefeed_' + actions.DELETE_OBJECT, { id: row.old_val.id });
			}
		});
	};
};
