JST['templates/show'] = _.template(
  "<div class='row border doctor_item'>\
    <div class='col-xs-1 doctor_counter'>\
      <%= index %>.\
    </div>\
    <div class='col-xs-1'>\
      <a href='#'><img class='img-circle doctor_img' src=<%= photos[0] %>></a>\
    </div>\
    <div class='col-xs-6'>\
      <ul class='doctor_info'>\
        <li><%= name %></li>\
        <li><%= address.addr_line1 %></li>\
        <li><%= address.city %>, <%= address.state_code %> <%= address.postal_code %></li>\
      </ul>\
    </div>\
    <div class='col-xs-2'>\
      <p class='phone_num'></p>\
    </div>\
  </div>"
)