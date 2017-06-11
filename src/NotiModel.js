var Realm = require('realm');

class Noti {}

Noti.schema = {
    name: 'Noti',
    properties: {
        message: {type: 'string', optional: true},
        date: 'date'
    }
};

let realm = new Realm({
    schema: [Noti]
});
module.exports = realm;
