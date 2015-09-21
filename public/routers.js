App.Routers.Index = Backbone.Router.extend({
  routes: {
    ""    : "root"
  },
  root: function() {
    index = new App.Models.Index()
    index.fetch().then(function() {
      var indexView = App.Views.Index({model: index})
    })
  }

})
