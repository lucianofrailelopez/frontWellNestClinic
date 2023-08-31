import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "./MySchedule.module.css";

const MySchedule = () => {
    const [schedule, setSchedule] = useState([
        { id: 1, date: '2023-09-10', doctor: 'Dr. Smith', especialidad: "Otorrino" },
        { id: 2, date: '2023-09-11', doctor: 'Dr. Johnson', especialidad: "Cardiólogo" },
    ]);

    const handleCancelSchedule = (id) => {
        const confirmDelete = window.confirm('¿Estás seguro de que deseas cancelar esta cita?');
    
        if (confirmDelete) {
            const updatedSchedule = schedule.filter(schedule => schedule.id !== id);
            setSchedule(updatedSchedule);
        }
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.header}>Mis Citas Médicas</h2>
            {schedule.length === 0 ? (
                <p className={styles.noAppointments}>Usted no posee citas agendadas</p>
            ) : (
                <ul className={styles.scheduleList}>
                    {schedule.map(schedule => (
                        <li key={schedule.id} className={styles.appointment}>
                            <span className={styles.date}>{schedule.date}</span>
                            <span className={styles.doctor}>{schedule.doctor}</span>
                            <span className={styles.specialty}>{schedule.especialidad}</span>
                            <button className={styles['cancel-button']} onClick={() => handleCancelSchedule(schedule.id)}>
                                Cancelar Cita
                            </button>
                        </li>
                    ))}
                </ul>
            )}
            <Link to="/newSchedule" className={styles.newScheduleButton}>
                Agendar Nueva Cita
            </Link>
        </div>
    );
};

export default MySchedule;
