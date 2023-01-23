const db = require('../db_connection');

const { Model } = require('objection');

Model.knex(db);

class User extends Model {
    static get tableName() {
        return 'users';
    }

    static get relationMappings() {
        const Task = require('../models/Task');
        //importer ici pour éviter une erreur de type "require loops"
        //https://vincit.github.io/objection.js/guide/relations.html#require-loops

        return {
            tasks: {
                relation: Model.HasManyRelation,
                modelClass: Task,
                join: {
                    from: 'users.id',//primary key
                    to: 'tasks.user_id'//foreign key
                }
            }
        };
    }
}

module.exports = User;