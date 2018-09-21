import React, { Component } from 'react'

export default class KeyPad extends Component {
	onKeyUp = () => console.log('Entering password...');
	
	render = () => <input type="password" onKeyUp={this.onKeyUp} />
}
