var Realm = require('realm');

class Noti {}

Noti.schema = {
    name: 'Noti',
    properties: {
        title: {type: 'string', optional: false},
        message: {type: 'string', optional: true},
        date: 'date',
        id: 'int'
    }
};

let realm = new Realm({
    schema: [Noti]
});
module.exports = realm;
