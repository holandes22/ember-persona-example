/*
var token = null;
Ember.$.getJSON('http://localhost:8888/api/get-auth-token/').then(
    function(data) {
        token = 'Token ' + data;
    },
    function(error) {
        token = '';
    }
);
*/
var ApplicationSerializer = DS.DjangoRESTSerializer.extend();

export default ApplicationSerializer;

