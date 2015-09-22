App.Models.Doctor = Backbone.Model.extend({
})


App.Models.Doctors = Backbone.Collection.extend({
  url: "doctors.json",
  model: App.Models.Doctor
})
