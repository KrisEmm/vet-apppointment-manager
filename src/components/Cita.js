import PropTypes from 'prop-types';
import React from 'react';

const Cita = ({ cita, deleteCita }) => {
    const { id, propietario, mascota, sintomas, fecha, hora } = cita;
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const handleClick = (e) => {
        deleteCita(e.target.dataset.id)
    }
    return (
        <div className="cita">
            <p>Cita: <span>{new Date(fecha).toLocaleDateString('es-ES', options)}</span><span> a las {hora} hrs</span></p>
            <p>Cliente: <span> {propietario} </span></p>
            <p>Mascota: <span> {mascota} </span></p>
            <p>Sintomas: <span> {sintomas} </span></p>
            <button
                data-id={id}
                className="button eliminar u-full-width"
                onClick={handleClick}
            >
                Eliminar
            </button>
        </div>
    )
}
Cita.propTypes = {
    cita: PropTypes.object.isRequired,
    deleteCita: PropTypes.func.isRequired
}
export { Cita };

