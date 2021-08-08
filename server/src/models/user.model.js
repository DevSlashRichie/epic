module.exports = (sequalize, Sequalize) => {

  return sequalize.define('user', {
    username: {
      type: Sequalize.STRING,
      allowNull: false,
      unique: true
    },

    password: {
      type: Sequalize.STRING,
      allowNull: false
    }

  });

}