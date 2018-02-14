import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Main from '../components/Main'

import * as MainActions from '../actions/main'

function mapStateToProps(state) {
	return {
		main: state.main
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(Object.assign({}, MainActions), dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
