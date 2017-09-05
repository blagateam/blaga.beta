// Import framework specific functions
import {Component, h} from 'preact';
import './register.style.scss';

export class RegisterPage extends Component {



    constructor(...args) {
        super(...args);

        this.state = {
            loading: false,
            error: null
        };
        this.refs = {};

        this._handleRegister = this._handleRegister.bind(this);
        this.selectClass = this.selectClass.bind(this);
    }

    selectClass(){
        var dropdown = this.refs.dropdown.value;
        let index;

        index = document.getElementById("dropdown");
        dropdown = index.options[index.selectedIndex].text;

        if(dropdown == "Elev"){
            document.querySelector(".clasa").style.display = "block";
        }
        else{
            document.querySelector(".clasa").style.display = "none";
        }
    }

    _handleRegister() {
        let name = this.refs.name.value;
        let email = this.refs.email.value;
        let pass = this.refs.pass.value;
        let index;
        var dropdown = this.refs.dropdown.value;
        var database = firebase.database();
        var user;
        var userID;
        var clasa = this.refs.clasa.value;
        
        index = document.getElementById("dropdown");
        dropdown = index.options[index.selectedIndex].text;

        this.setState({
            loading: true,
            error: null
        });

        firebase.auth().createUserWithEmailAndPassword(email, pass)
            .then(()=>{

                user  = firebase.auth().currentUser;
                userID = user.uid;

                firebase.database().ref('users/' + userID).set({
                    email: email,
                    password: pass,
                    name: name,
                    role: dropdown
                })

                if(dropdown == "Elev"){
                    firebase.database().ref('users/' + userID).set({
                        clasa: clasa
                    })
                }

            }) 

            .catch(e => {
                this.setState({
                    loading: false,
                    error: e
                });
            });     
    }

    render() {
        let isLoading = this.state.loading;
        let classNames = [
            'register-form',
            isLoading ? 'loading' : ''
        ];

        return (
            <div className="register-page">
                <div className={classNames.join(' ')}>
                    <h1>Betabook</h1>

                    {this.state.error && (
                        <div className="errors">
                            {this.state.error.message}
                        </div>
                    )}

                    <input ref={(e) => this.refs.name = e} type="text" placeholder="Enter name" name="name" required/>
                    <input ref={(e) => this.refs.email = e} type="text" placeholder="Enter email" name="email" required/>
                    <input ref={(e) => this.refs.pass = e} type="password" placeholder="Enter password" name="password" required/>

                    <select id="dropdown" onChange={this.selectClass} ref={(e) => this.refs.dropdown = e} required>
                        <option value="null">Not chosen</option>
                        <option value="elev">Elev</option>
                        <option value="parinte">Parinte</option>
                        <option value="profesor">Profesor</option>
                    </select>
                    <select id="clasa" className="clasa" ref={(e) => this.refs.clasa = e} required>
                        <option value="9">IX</option>
                        <option value="10">X</option>
                        <option value="11">XI</option>
                        <option value="12">XII</option>
                    </select>

                    <button disabled={isLoading} onclick={this._handleRegister}>Register</button>
                    <p>Already have an account?<a href="/login"> Login.</a></p>
                </div>
            </div>
        )
    }
}
