import React from 'react';

class Login extends React.Component {
    render() {
        return (<div className="container col-10">

            <div className="display-4 text-center">Log In</div>
            <form >
                <div className="form-group">
                    <label >Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label >Password</label>
                    <input type="password" className="form-control" placeholder="Password" />
                    <small className="form-text text-right"><a href="/">Forgot Password</a></small>

                </div>

                <button type="submit" className="btn btn-primary">Log In</button>
            </form>
        </div>
        )
    }
}
export default Login