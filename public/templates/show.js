JST['templates/show'] = _.template(
  "<div class='row' class='doctor_name'>\
    <div class='col-med-12'>\
      <img class='img-circle' src=<%= imgUrl %>>\
    </div>\
    <div class='col-xs-6'>\
    <ul class='doctor_info'>\
      <li><%= name %></li>\
      <li><%= streetAddress %></li>\
      <li><%= city %>, <%= state %> <%= zipCode %></li>\
    </ul>\
    </div>\
  </div>"
)