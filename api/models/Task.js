const { Model, DataTypes } = require('sequelize');
const User = require('./User');

const sequelize = require('../db_connection');

class Task extends Model { }

Task.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    content: DataTypes.STRING,
    completed: DataTypes.BOOLEAN,
    user_id: { type: DataTypes.INTEGER },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
}, {
    sequelize,
    modelName: 'Task',
    tableName: 'tasks',

});

(async () => {
    await Task.sync({ force: true, alter: true });
});

//Task.belongsTo(User);

module.exports = Task;