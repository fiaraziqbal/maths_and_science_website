import React from 'react';

class LoginPage extends React.Component {
  render() {
    return (
      <div>
        <h2>Login</h2>
        <form>
          <label>
            Username:
            <input type="text" name="username" />
          </label>
          <br />
          <label>
            Password:
            <input type="password" name="password" />
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default LoginPage;