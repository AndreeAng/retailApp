import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import firebase from "firebase/compat/app";
import './Login.css';

export const Login = () => {
    const navigate = useNavigate();
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential);
            navigate('/home');
        })
        .catch((error) => {
            console.log(error);
            alert("Password o Email Incorrectos!")
        })
    }

    function goHome(){
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
              // User is signed in.
              navigate("/home");
            } else {
              // No user is signed in.
            }
          });
    }



    return (
        <div class="auth-form-container" onLoad={goHome}>
            <form className="login-form" onSubmit={signIn}>
                <label htmlFor="email">Email:</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder="Email" id="email" name="email"/>

                <label htmlFor="password">Password:</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder="Ingrese su contraseña" id="password" name="password"/>

                <button type="submit">Log in</button>
            </form>
        </div>
    )
}

export default Login;