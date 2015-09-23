App.Views.DoctorListView = Backbone.View.extend({
  initialize: function() {
     this.collection.on("reset", this.render, this);
   },
  tagName: "ul",
  render: function() {
    var self = this
    this.collection.forEach(function (doctor, index) {
      self.$el.append(new App.Views.DoctorListItemView({
          model: doctor,
          id: index
        }).render().el);
      }, this);
    return this;
  }
})

App.Views.DoctorListItemView = Backbone.View.extend({
  tagName: "li",
  template: JST['templates/show'],
  events: {
    'click .doctor_img': 'showContactInfo'
  },
  showContactInfo: function(e) {
    e.preventDefault()
  },
  render: function() {
    var model = this.model.toJSON()
    model.index = this.id + 1
    model.address = model.locations[0].address
    this.$el.append(this.template(model))
      return this;
  }
})

App.Views.NavView = Backbone.View.extend({
  template: JST['templates/nav'],
  render: function() {
    this.$el.append(this.template())
      return this;
  }
})

App.Views.MapView = Backbone.View.extend({
  template: JST['templates/map'],
  render: function() {
    this.$el.append(this.template())
      return this;
  }
})

