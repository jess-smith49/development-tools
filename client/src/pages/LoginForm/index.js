import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {useMutation} from '@apollo/react-hooks';
import Auth from '../../utils/auth';
import { LOGIN_USER } from '../../utils/mutations';


const Login = props => {
    const [formState, setFormState] = useState({email: '', password: ''});
    const [Login, {error}] = useMutation(LOGIN_USER);

    const handleChange = e => {
        const {name, value } = e.target;

        //seting form state to value specified in form
        setFormState({
            ...formState,
            [name]: value
        });
    };

    const handleFormSubmit = async e => {
        e.preventDefault();

        try{
            const{data} = await Login({
                variables: {...formState}
            });

            Auth.login(data.login.token);
        }
        catch(e){
            console.log(e)
        }

        setFormState({
            email: '',
            password: ''
        })
    }


    return(
    <div>
        <Link to="/signup">Sign-up instead</Link>
        
        <h2>Login Below</h2>
        <form onSubmit={handleFormSubmit}>
              <input
                className="form-input"
                placeholder="Your email"
                name="email"
                type="email"
                id="email"
                value={formState.email}
                onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="******"
                name="password"
                type="password"
                id="password"
                value={formState.password}
                onChange={handleChange}
              />
              <button className="btn d-block w-100" type="submit">
                Submit
              </button>
            </form>
            {error && <div>Something Went Wrong</div>}
        </div>
    )
};

export default Login;