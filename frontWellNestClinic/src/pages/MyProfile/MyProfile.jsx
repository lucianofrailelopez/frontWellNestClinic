import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateProfilePicture, updatePassword, cancelMembership } from './actions';

function MyProfile(props) {
  const { userData, membershipStatus, updateProfilePicture, updatePassword, cancelMembership } = props;
  const [newPassword, setNewPassword] = useState(''); // Para cambiar contraseña
  const [confirmPassword, setConfirmPassword] = useState(''); // Para cambiar contraseña

  useEffect(() => {
    axios.get('https://serverwellnestclinic.onrender.com/api-docs/')
      .then((response) => {
        const user = response.data[0];
        props.setUser(user);
      })
      .catch((error) => {
        console.error('Error al obtener datos del usuario:', error);
      });
  }, []);

  const cambiarFotoDePerfil = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.addEventListener('change', async (e) => {
      const file = e.target.files[0];

      if (!file) {
        return;
      }

      try {
        const formData = new FormData();
        formData.append('profilePicture', file);

        const response = await axios.post('https://serverwellnestclinic.onrender.com/api/change-profile-picture', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        updateProfilePicture(response.data.imageUrl);
      } catch (error) {
        console.error('Error al cambiar la foto de perfil:', error);
      }
    });

    input.click();
  };

  const cambiarContraseña = async () => {
    if (!newPassword || !confirmPassword) {
      alert('Por favor, complete todos los campos.');
      return;
    }

    if (newPassword !== confirmPassword) {
      alert('Las contraseñas no coinciden.');
      return;
    }

    try {
      const response = await axios.put('https://serverwellnestclinic.onrender.com/api/change-password', {
        newPassword: newPassword,
      });

      updatePassword(response.data.newPassword);
      alert('Contraseña cambiada exitosamente.');
    } catch (error) {
      console.error('Error al cambiar la contraseña:', error);
      alert('No se pudo cambiar la contraseña.');
    }
  };

  const cancelarMembresia = async () => {
    const confirmation = window.confirm('¿Estás seguro de que deseas cancelar tu membresía? Esta acción es irreversible.');

    if (!confirmation) {
      return;
    }

    try {
      await axios.post('https://serverwellnestclinic.onrender.com/api/cancel-membership');
      cancelMembership();
      alert('Membresía cancelada exitosamente.');
    } catch (error) {
      console.error('Error al cancelar la membresía:', error);
      alert('No se pudo cancelar la membresía.');
    }
  };

  return (
    <div>
      <h1>{userData.name} {userData.lastName}</h1>
      <p>Email: {userData.email}</p>
      <p>DNI: {userData.dni}</p>
      <p>Tipo de DNI: {userData.dniType}</p>
      <p>Fecha de Nacimiento: {userData.birthDate}</p>
      <p>Dirección: {userData.address}</p>
      <p>Contacto de respaldo: {userData.backupContact}</p>
      <img src={userData.imageUrl} alt="Foto de perfil" />

      <p>Estado de membresía: {membershipStatus}</p>

      <button onClick={cambiarFotoDePerfil}>Cambiar Foto de Perfil</button>
      <div>
        <input type="password" placeholder="Nueva Contraseña" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
        <input type="password" placeholder="Confirmar Contraseña" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        <button onClick={cambiarContraseña}>Cambiar Contraseña</button>
      </div>
      <button onClick={cancelarMembresia}>Cancelar Membresía</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  userData: state.user,
  membershipStatus: state.membershipStatus,
});

const mapDispatchToProps = {
  updateProfilePicture,
  updatePassword,
  cancelMembership,
};

export default connect(mapStateToProps, mapDispatchToProps)(MyProfile);

