App.Routers.Index = Backbone.Router.extend({
  initialize: function(options) {
    this.$el = options.container
  },
  routes: {
    ""    : "root"
  },
  root: function() {
    var self = this
    var nav = new App.Views.NavView()
    this.$el.append(nav.render().el)
    var doctors = new App.Models.Doctors()
    doctors.fetch().then(function() {
      var doctorsView = new App.Views.DoctorListView({collection: doctors})
      self.$el.append(doctorsView.render().el);
    })

  }

})
