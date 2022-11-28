import React from "react";
import Api from "../../Api/Api";

class Login extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            login:"",
            password:"",
        };
    }

    render() {
        return (
            <div className="form">
                <form>
                    <div className="input-container">
                        <label>Username </label>
                        <input name="login" type="text" value={this.state.login}
                               onChange={
                                    (e) => this.setState({login:e.target.value})
                                }
                               required/>
                    </div>
                    <div className="input-container">
                        <label>Password </label>
                        <input name="password" type="text" value={this.state.password}
                               onChange={
                                    (e) => this.setState({password:e.target.value})
                                }
                               required/>
                    </div>
                    <div className="button-container">
                        <input type="submit" onSubmit={
                            Api.login(
                                document.getElementsByName("login").value,
                                document.getElementsByName("password").value)
                        } />
                    </div>
                </form>
            </div>
        )
    }
}

export default Login