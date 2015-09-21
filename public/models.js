App.Models.Doctor = Backbone.Model.extend({
})


App.Models.Doctors = Backbone.Model.extend({
  url: "doctors.json",
  model: App.Models.Doctor
})
