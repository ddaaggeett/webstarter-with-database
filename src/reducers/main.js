const initialState = {
	count: 0,
}

export default function main(state = initialState, action) {
	switch(action.type) {

		case 'COUNT_UP':

			return {
				...state,
				count: state.count + 1
			}

		case 'COUNT_DOWN':

			return {
				...state,
				count: state.count - 1
			}

		default:
			return state

	}
}
