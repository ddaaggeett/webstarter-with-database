import * as actions from '../actions'

const initialState = {
	count: 0,
}

export default function appState(state = initialState, action) {
	switch(action.type) {

		case actions.UPDATE_APP_STATE:
			return action.newAppState

		default:
			return state

	}
}
