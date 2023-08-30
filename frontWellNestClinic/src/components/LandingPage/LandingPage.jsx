import React from "react";


const LandingPage = () => {
    return (
        <div>
            <h1>Bienvenido a WellNest Clinic</h1>
            <p>Ingresa tu cédula de identidad para verificar si eres usuario registrado:</p>

            <input
                type="text"
                placeholder="Ingresa tu cédula"
            />
            <button>Verificar</button>

        </div>
    );
};

export default LandingPage;