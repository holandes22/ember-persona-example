var ApplicationController = Ember.ObjectController.extend({
    needs: 'logout',
    loggedInUser: null,

    init: function() {
        var controller = this;
        window.navigator.id.watch({
            loggedInUser: controller.loggedInUser,
            onlogin: function(assertion) {
                window.jQuery.ajax({
                    type: 'POST',
                    data: { assertion: assertion },
                    url: 'http://localhost:8888/api/auth/login/'
                }).then(
                    function(data) {
                        controller.set('loggedInUser', data.email);
                        DS.RESTAdapter.reopen({
                            // TODO: Store in a cookie instead of calling every time to mozilla service
                            headers: { 'Authorization': 'Token ' + data.token }
                        });
                        //window.location.reload();
                        controller.transitionToRoute('cars');
                    },
                    function(error) {
                        window.navigator.id.logout();
                        window.alert(error);
                    }
                );
            },
            onlogout: function() {
                DS.RESTAdapter.reopen({
                    headers: { 'Authorization': 'Token ' }
                });
                window.location.reload();
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
