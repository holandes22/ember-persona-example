var token = null;
Ember.$.getJSON('http://localhost:8888/api/get-auth-token/').then(
    function(data) {
        token = 'Token ' + data;
    },
    function(error) {
        token = '';
    }
);

var ApplicationAdapter = DS.DjangoRESTAdapter.extend({
    namespace: 'api',
    host: 'http://localhost:8888',
    headers: { 'Authorization': token }
});

var ApplicationSerializer = DS.DjangoRESTSerializer.extend();

export default ApplicationAdapter;
export default ApplicationSerializer;

