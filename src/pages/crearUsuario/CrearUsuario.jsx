import React, { useState } from "react";
import './crearUsuario.css';

export const CrearUsuario = () => {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[name, setName] = useState('');
    const[nivelAcceso, setNivelAcceso] = useState('2');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log
            (`
                Name: ${name}
                Email: ${email} 
                Password: ${password}       
                nivelAcceso: ${nivelAcceso}      
            `);
    }

 return (
    <div className="auth-form-container">
        <form onSubmit={handleSubmit} className="crearUsuario-form">
            <label htmlFor="nombre">Nombre Completo: </label>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nombre Completo" id="nombre" name="nombre"></input>
            <label htmlFor="email">Email: </label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder="Email" id="email" name="email"/>
            <label htmlFor="password">Password: </label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder="Ingrese su contraseña" id="password" name="password"/>
            <label>Nivel de Acceso </label>
            <select onChange={(e) => setNivelAcceso(e.target.value)} id="acceso">
                <option value="0">Administrador</option>
                <option value="1">Operador</option>
                <option selected value="2">Vendedor</option>
            </select>
        <button type="submit">Registrar</button>
        </form>
    </div>
 )
}

export default CrearUsuario;