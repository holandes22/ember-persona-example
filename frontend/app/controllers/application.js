var ApplicationController = Ember.ObjectController.extend({
    needs: 'logout',
    loggedInUser: null,

    setAuthHeader: function() {
        var token = window.sessionStorage.getItem('loggedInUserToken');
        DS.RESTAdapter.reopen({
            headers: { 'Authorization': 'Token ' + token }
        });

    },
    init: function() {
        this._super();
        var controller = this;
        controller.set('loggedInUser',  window.sessionStorage.getItem('loggedInUser'));
        window.navigator.id.watch({
            // Force Persona to call login by setting loggedInUser: null
            // https://developer.mozilla.org/en-US/docs/Web/API/navigator.id.watch
            loggedInUser: null,
            onlogin: function(assertion) {
                if ( controller.get('loggedInUser') ) {
                    controller.setAuthHeader();
                } else {
                    window.jQuery.ajax({
                        type: 'POST',
                        data: { assertion: assertion },
                        url: 'http://localhost:8888/api/auth/login/'
                    }).then(
                        function(data) {
                            controller.set('loggedInUser', data.email);
                            window.sessionStorage.setItem('loggedInUser', data.email);
                            window.sessionStorage.setItem('loggedInUserToken', data.token);
                            controller.setAuthHeader();
                            controller.transitionToRoute('user');
                        },
                        function(error) {
                            window.navigator.id.logout();
                            window.alert(error);
                        }
                    );
                }
            },
            onlogout: function() {
                window.sessionStorage.clear();
                window.location.replace('/');
            }
        });
    },

    actions: {
        logout: function() {
            this.get('controllers.logout').send('logout');
        }
    }
});

export default ApplicationController;
