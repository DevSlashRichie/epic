import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export function FilterButton({ value, onChange }) {

  const [goingUp, setGoingUp] = useState(true);


  function clickHandler() {
    setGoingUp(!goingUp);

    if(onChange)
      onChange(goingUp);
  }

  return (

    <div className='filter' onClick={clickHandler}>
      {value} <b>{
      goingUp ?
        <FontAwesomeIcon icon={faChevronUp} /> :
        <FontAwesomeIcon icon={faChevronDown} />
    }</b>
    </div>

  );


}