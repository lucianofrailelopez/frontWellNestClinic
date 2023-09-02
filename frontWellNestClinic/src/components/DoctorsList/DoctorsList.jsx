import React, { useState, useEffect } from 'react';
import styles from "./DoctorsList.module.css"

const DoctorsList = () => {
    const [doctors, setDoctors] = useState([]);
    const [selectedSpecialty, setSelectedSpecialty] = useState('');

    useEffect(() => {
        const apiUrl = 'https://serverwellnestclinic.onrender.com/doctorsList';

        setTimeout(() => {

            const fakeDoctors = [
                {
                    id: 1,
                    name: 'Dr. John Doe',
                    specialty: 'Cardiólogo',
                    birthDate: '01/01/1970',
                    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYowdNR4i_2kmPyC7d6gBNkmOuBOTOnaaqGQ&usqp=CAU'
                },
                {
                    id: 2,
                    name: 'Dr. Jane Smith',
                    specialty: 'Pediatra',
                    birthDate: '02/15/1985',
                    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI-NcEn2flFdLqP8Kckaeg54z8RJJ3v7xQfQ&usqp=CAU'
                },
                {
                    id: 3,
                    name: 'Dr. Ana Rodríguez',
                    specialty: 'Dermatólogo',
                    birthDate: '25/03/1972',
                    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvMZrYoOa_Z1Eag9vMb_hJCVeMLaR8wT2O4g&usqp=CAU',
                },
                {
                    id: 4,
                    name: 'Dra. Carlos Martínez',
                    specialty: 'Ginecólogo',
                    birthDate: '08/11/1985',
                    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIHl9FV8agFGS6H3x1dgvUQvS_dYFi9DdPPQ&usqp=CAU',
                },
                {
                    id: 5,
                    name: 'Dr. Laura Fernández',
                    specialty: 'Ortopedista',
                    birthDate: '12/06/1978',
                    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-Yyfzpq7Zcsjv3qQHBVJLONeLQ8MIPT3Now&usqp=CAU',
                },
                {
                    id: 6,
                    name: 'Dra. Sergio Ramírez',
                    specialty: 'Neurólogo',
                    birthDate: '19/09/1983',
                    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk0verXU3tWojoUFvWIQHkhw_lhqSIaRYw1A&usqp=CAU',
                }


            ];


            setDoctors(fakeDoctors);
        }, 1000);
    }, []);

    const filteredDoctors = doctors.filter((doctor) => {
        if (!selectedSpecialty) {
          return true;
        }
        return doctor.specialty === selectedSpecialty;
      });

    return (
        <div className={styles.container }>
            <div>
                <select
                    value={selectedSpecialty}
                    onChange={(e) => setSelectedSpecialty(e.target.value)}
                >
                    <option value="">Todas las Especialidades</option>
                    <option value="Cardiólogo">Cardiólogo</option>
                    <option value="Pediatra">Pediatra</option>

                </select>
            </div>
            <div className={styles.doctorcards}>
                {filteredDoctors.map(doctor => (
                    <div key={doctor.id} className={styles.doctorcard}>
                        <img src={doctor.photo} alt={doctor.name} />
                        <h3>{doctor.name}</h3>
                        <p>Especialidad: {doctor.specialty}</p>
                        <p>Fecha de Nacimiento: {doctor.birthDate}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DoctorsList;
