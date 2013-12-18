var CarModel = DS.Model.extend({
    brand: DS.attr('string'),
    model: DS.attr('string'),
    fullName: function() {
        return this.get('brand') + ' ' + this.get('model');
    }.property('brand', 'model'),
});

export default CarModel;
