import React, { useEffect, useState } from 'react';
import './App.css';
import { Cita } from "./components/Cita";
import { Form } from './components/Form';
function App() {
  let citasStorage = JSON.parse(localStorage.getItem('citas'))
  if (!citasStorage) citasStorage = []
  const [citas, setCitas] = useState(citasStorage)
  const titulo = citas.length > 0 ? 'Citas Agendadas' : 'No hay Citas';

  useEffect(() => {
    let citasStorage = JSON.parse(localStorage.getItem('citas'))
    if (citasStorage) {
      localStorage.setItem('citas', JSON.stringify(citas))
    } else {
      localStorage.setItem('citas', JSON.stringify([]))
    }

  }, [citas])

  const addNewCita = cita => {
    setCitas([
      ...citas,
      cita
    ])
  }

  const deleteCita = id => {
    setCitas(
      citas.filter(cita => cita.id !== id)
    )
  }
  return (
    <>
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form addNewCita={addNewCita} />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {citas.map(cita => <Cita
              key={cita.id}
              cita={cita}
              deleteCita={deleteCita}
            />)}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
