import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';

const CheckUser = () => {
    const navigate = useNavigate(); 

    const [cedula, setCedula] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleCedulaChange = (event) => {
        setCedula(event.target.value);
        setErrorMessage('');
    };

    const handleCheckUser = () => {
        const isUserValid = checkUserInSystem(cedula);

        if (isUserValid) {
            navigate('/signup'); 
        } else {
            setErrorMessage('El usuario no se encuentra registrado en la obra social.');
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Ingrese su cédula"
                value={cedula}
                onChange={handleCedulaChange}
            />
            <button onClick={handleCheckUser}>Validar Usuario</button>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </div>
    );
};

export default CheckUser;


const checkUserInSystem = (cedula) => {
    return cedula.length > 0;
};
