var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {
    this.route('component-test');
    this.route('helper-test');
    this.resource('cars', function() {
        this.resource('car', { path: ':car_id' });
    });
    this.route('user', { path: '/user/profile' });
    //this.resource('login');
    //this.resource('logout');
});

export default Router;
