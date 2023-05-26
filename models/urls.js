module.exports = (sequelize, DataTypes) => {
  const urls = sequelize.define("urls", {
    title: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    downloadLink: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return urls;
};
