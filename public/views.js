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
  presenter: function() {
    var data = this.model.toJSON();
    var presented = _.extend(data, {
      phone: data.locations[0].phones.voice[0].number,
      address: data.locations[0].address,
      index: this.id + 1
    });
    return presented;
  },
  showContactInfo: function(e) {
    e.preventDefault()
    var phone = this.presenter().phone
    this.$el.find(".phone_num").html(phone).hide().fadeIn()
  },
  render: function() {
    this.$el.append(this.template(this.presenter()))
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

