import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Cita } from '../models/Cita';

const Form = ({ addNewCita }) => {

    const [cita, setCita] = useState(Cita);

    const { propietario, mascota, sintomas, fecha, hora } = cita;
    const [error, setError] = useState(false)

    const handleChange = (e) => {
        setCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateCita()) return
        setIdNewCita();
        addNewCita(cita);
        resetForm();
    }
    const resetForm = () => setCita(Cita)
    const setIdNewCita = () => {
        cita.id = nanoid()
    }
    const validateCita = () => {
        if (
            propietario.trim() === "" ||
            mascota.trim() === "" ||
            sintomas.trim() === "" ||
            fecha.trim() === "" ||
            hora.trim() === ""
        ) {
            setError(true);
            return false;
        }
        setError(false);
        return true;
    }

    return (
        <>
            <h2>Agendar Cita</h2>
            {error ? <p className="alerta-error">Todos los campo son obligatorios</p> : null}
            <form onSubmit={handleSubmit}>
                <label>Nombre Cliente</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Coloca tu nombre completo"
                    onChange={handleChange}
                    value={propietario}
                />
                <label>Nombre Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Coloca el nombre de tu mascota"
                    onChange={handleChange}
                    value={mascota}
                />
                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={handleChange}
                    value={fecha}
                />
                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={handleChange}
                    value={hora}
                />
                <label>Sintomas</label>
                <textarea
                    name="sintomas"
                    className="u-full-width"
                    onChange={handleChange}
                    value={sintomas}
                >
                </textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >
                    Agendar Cita
                </button>
            </form>
        </>
    )
}

Form.propTypes = {
    addNewCita: PropTypes.func.isRequired
}
export { Form };

