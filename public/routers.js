App.Routers.Index = Backbone.Router.extend({
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
