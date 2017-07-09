var Realm = require('realm');

class Noti {}

Noti.schema = {
    name: 'Noti',
    primaryKey: 'id',
    properties: {
        id: 'int',
        title: 'string',
        message: {type: 'string', optional: true},
        date: 'date'
    }
};

let realm = new Realm({
    schema: [Noti]
});

export default realm;
