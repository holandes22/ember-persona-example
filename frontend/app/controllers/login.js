var LoginController = Ember.ObjectController.extend({

    actions: {
        navigatorRequest: function() {
            window.navigator.id.request();
        }
    }
});

export default LoginController;
