import * as actions from '.'

export function updateAppState(newAppState) {

    console.log('\nnewAppState\n',newAppState)
    return {
        type: actions.UPDATE_APP_STATE,
        newAppState
    }
}
