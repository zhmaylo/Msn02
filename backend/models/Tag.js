const { DataTypes } = require('sequelize');
const { sequelize } = require('../api/sequelize.db');


const Tag = sequelize.define("tag",
    {
        value: DataTypes.STRING,
        count: DataTypes.INTEGER,
    },

)

module.exports = Tag;

