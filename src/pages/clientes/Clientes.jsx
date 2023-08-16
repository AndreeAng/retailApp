import React from "react";
import AddClientes from "./AddClientes";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";
import "./Clientes.css";
import ClientesList from "./ClientesList";

const Clientes = () => {
    const[buttonPopup, setButtonPopup] =useState(false); 
    const[codigo, setCodigo] = useState('');
    const[nit, setNit] = useState('');
    const[name, setName] = useState('');
    const[direccion, setDireccion] = useState('');
    const[telefono, setTelefono] = useState('');
    const[singleDoc, setSingleDoc] = useState({});
    let numero = 1000;

    const handleSubmit = (e) => {
        e.preventDefault();
        if(nit && name && direccion && telefono) {
            addDoc(collection(db, "clientes"), {
                codigo: numero,
                name: name,
                nit: nit,
                direccion: direccion,
                telefono: telefono,
                status: true,
                saldo: 0
            })
            numero += 1;
        }
    }

    return(
        <>
        <div className="add">
            <button onClick={() => setButtonPopup(true)}>Agregar</button>
        </div>
        <AddClientes trigger={buttonPopup} setTrigger={setButtonPopup}>
            <div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="nombre">Nombre Completo: </label>
                    <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nombre Completo" id="nombre" name="nombre"></input>
                    <label htmlFor="nombre">Nit: </label>
                    <input value={nit} onChange={(e) => setNit(e.target.value)} placeholder="NIT" id="nit" name="nit"></input>
                    <label htmlFor="nombre">Telefono </label>
                    <input type="tel" value={telefono} onChange={(e) => setTelefono(e.target.value)} placeholder="Telefono" id="telefono" name="telefono"></input>
                    <div class="pac-card" id="pac-card">
                        <div id="pac-container">
                            <input value={direccion} onChange={(e) => setDireccion(e.target.value)} id="pac-input" type="text" placeholder="Direccion" />
                        </div>
                    </div>
                    <div id="map"></div>
                        <div id="infowindow-content">
                        <span id="place-name" class="title"></span><br />
                        <span id="place-address"></span>
                    </div>
                    <script
                        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&callback=initMap&libraries=places&v=weekly"
                        defer
                    ></script>
                    <button type="submit" id="sighUp" name="cliente_submit" value="Sign Up" onClick={handleSubmit}>Agregar Cliente</button>
                </form>
            </div>
        </AddClientes>
        <ClientesList />
        </>
    )
}

export default Clientes;