/*
var token = null;
export default Ember.$.getJSON('http://localhost:8888/api/user/token/').then(
    function(data) {
        token = 'Token ' + data;
        window.console.log('::TOKE::', token);
    },
    function(error) {
        token = '';
        window.console.log('::TOKE::', token);
    }
);
*/

var ApplicationAdapter = DS.DjangoRESTAdapter.extend({
    namespace: 'api',
    host: 'http://localhost:8888',
    //headers: { 'Authorization': token }
});

export default ApplicationAdapter;
