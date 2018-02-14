/*
RethinkDB changefeed changefeedListeners
handles redux action dispathes
*/
import * as doctypes from '../db/doctypes'
import * as actions from '../actions'
import * as actionCreators from '../actions/main'
import io from 'socket.io-client';
const socket = io.connect('http://localhost:1234')

function dispatchRedux(store, newAppState) {
    if(newAppState.doctype == doctypes.appState) {
        store.dispatch(actionCreators.updateAppState(newAppState))
    }
}

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
