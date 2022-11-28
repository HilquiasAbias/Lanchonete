const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('lanchonete', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

try {
    sequelize.authenticate();
    console.log('Conectou ao MySQL!');
} catch (error) {
    console.log(`Não foi possível conectar: ${error}`);
}

module.exports = sequelize;
