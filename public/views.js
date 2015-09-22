App.Views.DoctorListView = Backbone.View.extend({
  initialize: function() {
     this.collection.on("change", this.render, this);
   },
  tagName: "ol",
  render: function() {
    var self = this
    this.collection.forEach(function (model, index) {
      self.$el.append(new App.Views.DoctorListItemView({
          model: model
        }).render().el);
      }, this);
    return this;
  }
})

App.Views.DoctorListItemView = Backbone.View.extend({
  tagName: "li",
  template: JST['templates/show'],
  render: function() {
    this.$el.append(this.template(this.model.toJSON()))
      return this;
  }
})

