JST['templates/show'] = _.template(
  "<div class='row border doctor_item'>\
    <div class='col-xs-1 doctor_counter'>\
      <%= index %>.\
    </div>\
    <div class='col-xs-1'>\
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