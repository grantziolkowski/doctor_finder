window.App = {
    Models: {},
    Routers: {},
    Views: {}
 }

window.JST = {} //templates

$(document).ready(function(){
    window.router = new App.Routers.Index({
      container: $('.container')
    });
    Backbone.history.start({pushState: true})
});