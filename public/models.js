App.Models.Doctor = Backbone.Model.extend({
})


App.Models.Doctors = Backbone.Collection.extend({
  url: "search.json",
  model: App.Models.Doctor,
  parse: function(response) {
    return response.professionals;
  }

})
