
export const addCourse = (title, clients, description, name, hours, stars) => {
  return {
    type: "ADD_COURSE",
    title,
    clients,
    description,
    name,
    hours,
    stars
  }
};

const course = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_COURSE':
      return {
        id: action.id,
        title: action.title,
        clients: action.clients,
        description: action.description,
        name: action.name,
        hours: action.hours,
        stars: action.stars
      }

    default:
      return state;
  }
}

const courses = (state = [], action) => {
  switch (action.type) {
    case 'ADD_COURSE':
      return [
        ...state,
        course(undefined, action)
      ]
    default:
      return state;
  }
}

export default courses;