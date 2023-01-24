const { Model, DataTypes } = require('sequelize');
const Task = require('./Task');
const sequelize = require('../db_connection');

class User extends Model { }

User.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    fullname: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
}, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    timestamps: false

});

(async () => {
    await User.sync({ force: true });
});

//User.hasMany(Task, { foreignKey: 'user_id' });

module.exports = User;