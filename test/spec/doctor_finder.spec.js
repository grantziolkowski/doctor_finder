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
    // Expect exists and is an object.
    expect(App).to.be.an("object");

    // Expect all namespace properties are present.
    expect(App).to.include.keys(
      "Models", "Routers", "Views"
    );
  });
});

describe("App.Models.Doctors", function () {

  before(function () {
    // Create a reference for all internal suites/specs.
    this.doctors = new App.Models.Doctors();
  });

  after(function () {
    // Remove the reference.
    this.doctors = null;
  });

  describe("creation", function () {

    it("has default values", function () {
      expect(this.doctors).to.be.ok;
      expect(this.doctors).to.have.length(0);
    });
  });
  });
