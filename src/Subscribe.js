import React, { Component } from 'react';

class Subscribe extends Component {
  render() {
  	return (
		<form class="subscribe-form">		
			<div class="subscribe-form-grid-container">
				<div class="subscribe-form-grid-container-label"><label for="login">login</label></div>
				<div class="subscribe-form-grid-container-input"><input type="text" name="login"></input></div>
				<div class="subscribe-form-grid-container-label"><label for="passwd">password</label></div>
				<div class="subscribe-form-grid-container-input"><input type="password" name="password"/></div>
				<div class="subscribe-form-grid-container-label"><label for="email">e-mail</label></div>
				<div class="subscribe-form-grid-container-input"><input type="text" name="email"/></div>
				<div class="subscribegriditem2col"><input type="submit" name="enter" value="Subscribe"/></div>
			</div>				
		</form>
	);
  }
}
	 

export default Subscribe;


	    