App.Routers.Index = Backbone.Router.extend({
  initialize: function(options) {
    this.$el = options.container
  },
  routes: {
    ""    : "root"
  },
  root: function() {
    var doctors = new App.Models.Doctors()
    doctors.fetch().then(function() {
      var indexView = new App.Views.Doctors({collection: doctors})
    })
  }

})
