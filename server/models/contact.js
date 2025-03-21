module.exports = (sequelize, DataTypes) => {
    const ContactForm = sequelize.define("ContactForm", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      company: {
        type: DataTypes.STRING,
        allowNull: true, // Optional field
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: true, // Optional field
        validate: {
          isNumeric: true, // Ensures only numbers are entered
        },
      },
      subject: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      message: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    });
  
    return ContactForm;
  };
  