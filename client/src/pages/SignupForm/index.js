import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import Auth from '../../utils/auth';
import {ADD_USER} from '../../utils/mutations';



const SignUp = () => {

    const [formState, setFormState] = useState({ username: '', email: '', password: '' })
    //user mutation goes here
    const [addUser, { error }] = useMutation(ADD_USER);

    const handleChange = e => {
        const { name, value } = e.target;

        setFormState({
            ...formState,
            [name]: value
        })
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
    
        try {
          const { data } = await addUser({
            variables: { ...formState }
          });
          console.log(data);
          Auth.login(data.addUser.token);
    
        } catch (err) {
          console.error(err);
        }
    
        setFormState({
          username: '',
          email: '',
          password: '',
        });
      };
    


    return (
        <div>
            <Link to="/login">Login instead</Link>

            <h2>Sign Up Below</h2>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <input
                        className="form-input"
                        placeholder="Your username"
                        name="username"
                        type="username"
                        id="username"
                        onChange={handleChange}
                    />
                    <input
                        className="form-input"
                        placeholder="Your email"
                        name="email"
                        type="email"
                        id="email"
                        onChange={handleChange}
                    />
                    <input
                        className="form-input"
                        placeholder="******"
                        name="password"
                        type="password"
                        id="password"
                        onChange={handleChange}
                    />

                    <button type="submit">Finish Signup</button>
                </div>
            </form>
            {error && <div>Something Went Wrong</div>}
        </div>
    )

    // return (
    //     <section className="signup-container">
    //         <form>
    //             <input name="email-input" className="form-input" placeholder="Enter your email here"></input>

    //             <input name="user-input" className="form-input" placeholder="Create a unique username"></input> 

    //             <input name="pass-input" className="form-input" placeholder="Create a unique password"></input> 
                
    //             <button type="submit">Get Learning!</button>

    //         </form>
    //     </section>  
    //   )
};

export default SignUp;