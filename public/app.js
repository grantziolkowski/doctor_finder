window.App = {
    Models: {},
    Routers: {},
    Views: {}
 }

window.JST = {} //JS templates

$(document).ready(function(){
    window.router = new App.Routers.Index({
      container: $('.container')
    });
    Backbone.history.start({pushState: true})
});