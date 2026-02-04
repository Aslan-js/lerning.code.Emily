const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('lerningcode', 'root','Emifofa2705*', {
    host: 'localhost',
    dialect:'mysql'
});
module.exports = sequelize;