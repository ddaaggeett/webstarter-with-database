import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as doctypes from '../db/doctypes'
import * as actions from '../actions'
import io from 'socket.io-client';
const socket = io.connect('http://localhost:1234')

class Main extends Component {

    handleClickUp() {
        const newAppState = {
            ...this.props.appState,
            doctype: doctypes.appState,
            count: this.props.appState.count + 1
        }
        socket.emit(actions.UPDATE_APP_STATE, newAppState)
    }

    handleClickDown() {
        const newAppState = {
            ...this.props.appState,
            doctype: doctypes.appState,
            count: this.props.appState.count - 1
        }
        socket.emit(actions.UPDATE_APP_STATE, newAppState)
    }

    render() {

        return (
            <div className='body'>
                <h2 className="vertical_content">modern web developement starter point</h2>

                <div className="vertical_content">
                    <div className="interactives">
                        <div className="button" onClick={() => this.handleClickUp()}>count up</div>
                        <div className="button" onClick={() => this.handleClickDown()}>count down</div>
                    </div>

                    <div className="interactives">
                        <p className="interactives_right" id="count">{this.props.appState.count}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main
