window.App = {
    Models: {},
    Routers: {},
    Views: {}
 }

$(document).ready(function(){
    window.router = new App.Routers.Index();
    Backbone.history.start({pushState: true})
});