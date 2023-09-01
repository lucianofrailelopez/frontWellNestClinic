import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import styles from "../LandingPage/LandingPage.module.css"
import axios from "axios";

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


    // const handleCheckUser = async () => {
    //     try {

    //         const response = await axios.get(`https://serverwellnestclinic.onrender.com/userClient?name=${cedula}`);
    //         if (response.status === 200) {
    //             navigate('/signup');
    //         } else {
    //             setErrorMessage('El usuario no se encuentra registrado en la obra social.');
    //         }
    //     } catch (error) {
    //         console.error('Error al realizar la solicitud:', error);
    //         setErrorMessage('Ocurrió un error al validar el usuario.');
    //     }
    // };
    

    return (
        <div className={styles.container}>
        <div className={styles.containerSection}>
            <h2>Valide su usuario para continuar con el registro:</h2>
            <input
                type="text"
                placeholder="Ingrese su cédula"
                value={cedula}
                onChange={handleCedulaChange}
            />
            <button className={styles.button} onClick={handleCheckUser}>Validar Usuario</button>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </div>
        </div>
    );
};

export default CheckUser;


const checkUserInSystem = (cedula) => {
    return cedula.length > 0;
};
