const db = require('../db_connection');

const { Model } = require('objection');


Model.knex(db);

class Task extends Model {
    static get tableName() {
        return 'tasks';
    }

    static get relationMappings() {
        const User = require('../models/User');
        //importer ici pour éviter une erreur de type "require loops"
        //https://vincit.github.io/objection.js/guide/relations.html#require-loops

        return {
            user: {
                relation: Model.BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: 'tasks.user_id',//foreign key
                    to: 'users.id',//primary key
                }
            }
        };
    }
}

module.exports = Task;