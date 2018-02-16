/*
RethinkDB changefeed: handle redux action dispathes
see prev: ~/src/db/changefeed-listeners.js
*/
import * as doctypes from '../db/doctypes'
import * as actions from '../actions'
import * as actionCreators from '../actions/main'
import io from 'socket.io-client';
const socket = io.connect('http://localhost:1234')

function dispatchRedux(store, newAppState) {
    if(newAppState.doctype == doctypes.appState) {
        /*
        now treat redux store how you would normally.
        the only difference is how the recux action creators are triggered slightly different

        TYPICAL REDUX FLOW:
        user action -> action creator dispatch -> reducer update store -> UI updated

        NEW FLOW:
        user action -> RethinkDB manipulation -> changefeed -> action creator dispatch -> reducer update store -> UI updated
        */
        store.dispatch(actionCreators.updateAppState(newAppState))
    }
}

/*
redux store arg is passed in from ~/src/client.js
line: changefeedListeners(store)
*/
export default function(store) {

    socket.on('changefeed_' + actions.INSERT_OBJECT, (object) => {
        console.log('\nRedux will dispatch:\n',object)
        dispatchRedux(store, object)
    })

	socket.on('changefeed_' + actions.EDIT_OBJECT, function (object) {
        console.log('\nRedux will dispatch:\n',object)
        dispatchRedux(store, object)
	});

	socket.on('changefeed_' + actions.DELETE_OBJECT, function (data) {
        console.log('\nRedux will dispatch:\n',object)
        dispatchRedux(store, object)
	});
}
