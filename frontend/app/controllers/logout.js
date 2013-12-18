var LogoutController = Ember.ObjectController.extend({

    actions: {
        logout: function() {
            window.navigator.id.logout();
        }
    }
});

export default LogoutController;
