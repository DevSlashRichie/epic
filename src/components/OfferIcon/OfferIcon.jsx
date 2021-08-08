import './OfferIcon.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';

export function OfferIcon({
                            name,
                            title,
                            description,

                            stars,
                            hours,
                            clients,
                          }) {

  return (
    <div className='offerIcon'>

      <div className='header'>

        <div className='image'>
          <img
            src='https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
            alt='' />
        </div>
        <div className='user-details'>
        <span className='name'>
          {name || 'No name'}
        </span>

          <span className='title'>
            { title || "No title" }
        </span>

          <span className='description'>
            { description || "No Description" }
        </span>

        </div>
        <div className='user-data'>
          <div className='stars'><FontAwesomeIcon icon={faStar} className='icon' /> { stars || '0.0' }</div>
          <div className='attended-users'><FontAwesomeIcon icon={faUserFriends} className='icon' /> {clients || '0'}</div>
          <div className='hours'><FontAwesomeIcon icon={faClock} className='icon' /> { hours || '0' }</div>
        </div>
      </div>

      <div className='footer'>
        <span>Starting at $5 h</span>
      </div>
    </div>
  );

}