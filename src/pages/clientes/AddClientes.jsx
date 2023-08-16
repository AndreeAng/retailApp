import React from "react";
import "./AddClientes.css";

function AddClientes(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={() => props.setTrigger(false)}>x</button>
                { props.children }
            </div>
        </div>
     ) : "";
}

export default AddClientes;