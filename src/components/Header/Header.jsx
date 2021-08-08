import './Header.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import { AddClass } from '../AddClassModal/AddClass';

export function Header() {
  const [user, setUser] = useState(true);
  const [classShow, setClassShow] = useState(false);

  const toggleClassModal = () => {
    setClassShow(!classShow);
  }


  return (
    <header className='website-header'>

      <div className='title'>
        <a>Titulo</a>
      </div>

      <div className='menu'>

        <a>Inicio</a>
        <a>Registro</a>

      </div>

      <div className='details'>

        {
          user ?
            <>
              <div className='secondary-menu'>
                <a onClick={toggleClassModal}>Crear Clase</a>
                <a>Perfil</a>
                <div>
                  Points: 10000
                </div>
              </div>

              <div className='user'>
                <div className='image'>
                  <img src='https://via.placeholder.com/150' alt='' />
                </div>
                <div className='name'>
                  Ricardo
                </div>
              </div>
            </>
            : <>
              <div className='secondary-menu'>
                <Link to={'/login'}>
                  Login
                </Link>
              </div>
            </>
        }


      </div>

      <Modal
        isOpen={classShow}
      >
        <AddClass toggleModal={toggleClassModal} />
      </Modal>

    </header>
  );
}