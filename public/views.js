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

