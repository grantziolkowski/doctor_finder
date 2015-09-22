App.Views.DoctorListView = Backbone.View.extend({
  initialize: function() {
     this.collection.on("change", this.render, this);
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
  tagname: "li",
  template: JST['templates/show'],
  render: function() {
    var model = this.model.toJSON()
    model.index = this.id + 1
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

