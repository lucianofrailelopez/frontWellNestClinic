import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
    return (
        <div>
            <h1>Bienvenido a WellNest Clinic</h1>
            <p>Ingresa tu cédula de identidad para verificar si eres usuario registrado:</p>

            <input
                type="text"
                value={cedula}
                onChange={(e) => setCedula(e.target.value)}
                placeholder="Ingresa tu cédula"
            />
            <button onClick={verificarUsuario}>Verificar</button>

            <p>{mensaje}</p>
        </div>
    );
};

export default LandingPage;