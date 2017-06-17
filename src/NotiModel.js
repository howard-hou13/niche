var Realm = require('realm');

class Noti {}

Noti.schema = {
    name: 'Noti',
    primaryKey: 'serial',
    properties: {
        title: {type: 'string', optional: false},
        message: {type: 'string', optional: true},
        date: 'date',
        serial: 'int'
    }
};

let realm = new Realm({
    schema: [Noti]
});
module.exports = realm;
