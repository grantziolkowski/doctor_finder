JST['templates/show'] = _.template(
  "<div class='doctor_name'>\
    <img class='img-circle' src=<%= imgUrl %> />\
    <ul class='doctor_info'>\
      <li><%= name %></li>\
      <li><%= streetAddress %></li>\
      <li><%= city %>, <%= state %> <%= zipCode %></li>\
    </ul>\
  </div>"



)