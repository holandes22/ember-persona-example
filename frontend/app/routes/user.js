var UserRoute = Ember.Route.extend({
    model: function() {
        return this.get('store').find('user', 1);
    },
});

export default UserRoute;

