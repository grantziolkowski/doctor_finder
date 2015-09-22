App.Views.DoctorListView = Backbone.View.extend({
  // initialize: function() {
  //    this.collection.on("change", this.render, this);
  //  },
  tagname: "ul",
  render: function() {
    var self = this
    this.collection.forEach(function (model) {
      self.$el.append(new App.Views.DoctorListItemView({
          model: model
        }).render().el);
      }, this);
    return this;
  }
})

App.Views.DoctorListItemView = Backbone.View.extend({
  tagname: "li",
  template: JST['templates/show'],
  render: function() {
    this.$el.append(this.template(this.model.toJSON()))
      return this;
  }
})

