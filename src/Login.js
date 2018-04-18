import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
    	<form class="head-form">
			<div class="head-right-grid-container">
			  <div><label for="login">login</label></div>
			  <div class="griditem2col"><label for="passwd">password</label></div>
			  <div><input type="text" name="login"></input></div>
			  <div><input type="password" name="password"/></div>
			  <div><input type="submit" name="enter" value="Login" /></div>
			</div>				
		</form>
	);
  }
}

export default Login;