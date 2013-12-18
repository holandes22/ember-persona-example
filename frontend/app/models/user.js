var UserModel = DS.Model.extend({
    email: DS.attr('string'),
    fullName: DS.attr('string'),
    shortName: DS.attr('string'),
});

export default UserModel;
