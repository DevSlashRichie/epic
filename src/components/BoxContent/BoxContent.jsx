import { FilterHeader } from '../FilterHeader/FilterHeader';
import { OfferIcon } from '../OfferIcon/OfferIcon';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

let BoxContent = ({ courses }) => {

  useEffect(() => {
  }, []);

  const [filters, setFilters] = useState({
    stars: false,
    workingTime: false,
    clients: false,
  });

  function module() {
    return courses.map(fakeData => {
      return <OfferIcon
        title={fakeData.title}
        clients={fakeData.clients}
        description={fakeData.description}
        name={fakeData.name}
        hours={fakeData.hours}
        stars={fakeData.stars}

        key={Math.random()}
      />;
    });
  }

  function filtersChangeHandler(filterChanged) {
    setFilters({
      ...filters,
      ...filterChanged,
    });

    // if (typeof filterChanged.stars === 'boolean') {
    //   const r = data.sort((a, b) => {
    //     if (filterChanged.stars) {
    //       return b.stars + a.stars;
    //     } else {
    //       return b.stars - a.stars;
    //     }
    //   });
    // }
    //
    //
    // if (typeof filterChanged.hours === 'boolean') {
    //   const r = data.sort((a, b) => {
    //     if (filterChanged.hours) {
    //       return b.hours + a.hours;
    //     } else {
    //       return b.hours - a.hours;
    //     }
    //   });
    // }
    //
    //
    // if (typeof filterChanged.clients === 'boolean') {
    //   const r = data.sort((a, b) => {
    //     if (filterChanged.clients) {
    //       return b.clients + a.clients;
    //     } else {
    //       return b.clients - a.clients;
    //     }
    //   });
    // }



  }

  return (
    <div className='box-content'>

      <FilterHeader onFiltersChange={filtersChangeHandler} />

      <div className='container'>

        {module()}

      </div>


    </div>
  );

}

const getCourses = (state) => {
  return {
    courses: state.courses
  }
};

BoxContent = connect(getCourses)(BoxContent);

export {
  BoxContent
};