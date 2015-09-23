if (typeof exports !== 'undefined' && this.exports !== exports) {


   // * Here's why the node.js environment needs special
   // * treatment:
   // *
   // *   -  We need to identify dependencies so node.js
   // *      can load the necessary libraries. (In the
   // *      browser, these will be handled by explicit
   // *      includes, either of individual script files
   // *      or of concatenated, possibly minified versions.)
   // *
   // *   -  Node.js doesn't have a DOM into which we
   // *      can insert our views to test interactions.
   // *      We can simulate a DOM with jsdom.
   // *


  global.jQuery = require("jquery");
  global.$ = jQuery;
  global.chai = require("chai");
  global.sinon = require("sinon");
  chai.use(require("sinon-chai"));

  global.jsdom = require("jsdom").jsdom;
  var doc = jsdom("<html><body></body></html>");
  global.window = doc.createWindow();
}

var should = chai.should();
var expect = chai.expect;

describe("Namespace", function () {
  it("provides the 'App' object", function () {
    expect(App).to.be.an("object");

    // Expect all namespace properties are present.
    expect(App).to.include.keys(
      "Models", "Routers", "Views"
    );
  });
  it("provides the 'JST' Templates object", function () {
    expect(JST).to.be.an("object");
  });
});

describe("Models", function() {
  describe("App.Models.Doctors", function () {
    before(function () {
      this.doctors = new App.Models.Doctors();
    });

    after(function () {
      this.doctors = null;
    });

    describe("creation", function () {
      it("should default url to be 'search.json'",function() {
        var url = this.doctors.url;
          url.should.equal("search.json");
        })
      });
  });
})

describe("Views", function() {
  beforeEach(function() {
   var locations = [{
      address: {addr_line1: "44 Park Ave", city: "New York", state_code: "NY", postal_code: "11111"},
      phones: {voice: [{number: "9178097978"}]}
    }]
    var doctorModelData1 = {name: "Dr. Bigham", photos: [], locations: locations}
    var doctorModelData2 = {name: "Dr. Francis", photos: [], locations: locations}

    this.doctor = new App.Models.Doctor(doctorModelData1);
    this.doctors = new App.Models.Doctors([doctorModelData1, doctorModelData2]);
  })

  afterEach(function() {
    this.save_stub.restore();
  })

  describe("Doctor List Item View", function() {
    beforeEach(function(){
      this.item = new App.Views.DoctorListItemView({model: this.doctor});
      this.save_stub = sinon.stub(this.doctor, "save");
    })
    afterEach(function() {
      this.save_stub.restore();
    })
    it("render() should return the view object", function() {
      this.item.render().should.equal(this.item);
    });
    it("should render as a list item", function() {
      this.item.render().el.nodeName.should.equal("LI");
    })

    describe("Template", function() {
      beforeEach(function(){
        this.item.render();
      })
      it("should contain the doctor's name as text", function() {
        this.item.$el.text().should.have.string("Dr. Bigham");
      })
      it("should contain the doctor's address as text", function() {
        this.item.$el.text().should.have.string("44 Park Ave");
      })
      it("should contain an img tag for the doctor's photo", function() {
        this.item.$el.find(".doctor_img").should.exist;
      })
    })

    describe("Photo Click Event", function() {
      beforeEach(function(){
        this.item.render();
      })
      it("should not show a doctor's phone number before photo is clicked", function() {
        this.item.$el.text().should.not.have.string("9178097978");
      })
      it("should show a doctor's phone number when her photo is clicked", function() {
        this.item.$el.find(".doctor_img").click();
        this.item.$el.text().should.have.string("9178097978");
      })
    })
  })

  describe("Doctor List View", function() {
    beforeEach(function(){
      this.list = new App.Views.DoctorListView({collection: this.doctors});
    })
    it("render() should return the view object", function() {
      this.list.render().should.equal(this.list);
    });
    it("should render as an unordered list", function() {
      this.list.render().el.nodeName.should.equal("UL");
    })
    it("should include list items for all models in collection", function() {
      this.list.render();
      this.list.$el.find(".doctor_item").should.have.length(2);
    })
  })

})