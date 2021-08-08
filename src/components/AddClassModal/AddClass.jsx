import '../Header/Header.scss';
import { useState } from 'react';
import { connect } from 'react-redux';
import { addCourse } from '../../reducers/courses.reducer';

let AddClass = ({ toggleModal, dispatch }) => {

  const [data, setData] = useState({
    clase: "",
    duracion: 0,
    link: ""
  });

  const handleAddClass = (e) => {
    e.preventDefault();
    dispatch(addCourse(
      data.clase,
      0,
      data.link,
      "Ricardo",
      data.duracion,
      0
    ));

    toggleModal();
  };

  const handleTextFieldChange = (event, field) => {
    setData({
      ...data,
      [field]: event.target.value
    })
  }

  const handleTimeChange = (event) => {
    const { value } = event.target;

    if (!/[0-9]+/.test(value) || value === '') {
      return;
    }

    setData({
      ...data,
      duracion: value,
    });
  }

  return (
    <div className={'modal'}>
      <div className='closeBtn' onClick={toggleModal}>
        Cerrar
      </div>
      <form onSubmit={handleAddClass}>
        <div className='content'>
          <h1>Ingresa los datos de tu clase</h1>
          <div className='fields'>
            <input type='text' placeholder='Nombre de la Clase' required
                   value={data.clase}
                   onChange={(event) => handleTextFieldChange(event, "clase")}
            />
            <input type='number' placeholder='Duración de la Clase' required
                   value={data.duracion}
                   onChange={handleTimeChange}
            />
            <input type='text' placeholder='Link de la Clase' required
                   value={data.link}
                   onChange={(event) => handleTextFieldChange(event, "link")}
            />
            <input type='submit' />
          </div>
        </div>

      </form>
    </div>
  );
}

AddClass = connect()(AddClass);

export {
  AddClass
};
