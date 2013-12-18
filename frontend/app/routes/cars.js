var CarsRoute = Ember.Route.extend({
    model: function() {
        return this.get('store').find('car');
    },
});

export default CarsRoute;

