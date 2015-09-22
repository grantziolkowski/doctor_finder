App.Routers.Index = Backbone.Router.extend({
  initialize: function(options) {
    this.$el = options.container
  },
  routes: {
    ""    : "root"
  },
  root: function() {
    var self = this
    var doctors = new App.Models.Doctors()
    doctors.fetch().then(function() {
      var doctorsView = new App.Views.DoctorListView({collection: doctors})
      self.$el.append(doctorsView.render().el);
    })

  }

})
