/**
 * ap-challenge-microservice
 * Services that provide access and interaction with all sorts of challenges, including design, dev, single round matches, and marathon matches. 
 *
 * OpenAPI spec version: 1.0.5
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ApChallengeMicroservice);
  }
}(this, function(expect, ApChallengeMicroservice) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ApChallengeMicroservice.InlineResponse2009ResultRounds();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('InlineResponse2009ResultRounds', function() {
    it('should create an instance of InlineResponse2009ResultRounds', function() {
      // uncomment below and update the code to test InlineResponse2009ResultRounds
      //var instane = new ApChallengeMicroservice.InlineResponse2009ResultRounds();
      //expect(instance).to.be.a(ApChallengeMicroservice.InlineResponse2009ResultRounds);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ApChallengeMicroservice.InlineResponse2009ResultRounds();
      //expect(instance).to.be();
    });

    it('should have the property registrationStartAt (base name: "registrationStartAt")', function() {
      // uncomment below and update the code to test the property registrationStartAt
      //var instane = new ApChallengeMicroservice.InlineResponse2009ResultRounds();
      //expect(instance).to.be();
    });

    it('should have the property registrationEndAt (base name: "registrationEndAt")', function() {
      // uncomment below and update the code to test the property registrationEndAt
      //var instane = new ApChallengeMicroservice.InlineResponse2009ResultRounds();
      //expect(instance).to.be();
    });

    it('should have the property codingStartAt (base name: "codingStartAt")', function() {
      // uncomment below and update the code to test the property codingStartAt
      //var instane = new ApChallengeMicroservice.InlineResponse2009ResultRounds();
      //expect(instance).to.be();
    });

    it('should have the property codingEndAt (base name: "codingEndAt")', function() {
      // uncomment below and update the code to test the property codingEndAt
      //var instane = new ApChallengeMicroservice.InlineResponse2009ResultRounds();
      //expect(instance).to.be();
    });

    it('should have the property systemTestStartAt (base name: "systemTestStartAt")', function() {
      // uncomment below and update the code to test the property systemTestStartAt
      //var instane = new ApChallengeMicroservice.InlineResponse2009ResultRounds();
      //expect(instance).to.be();
    });

    it('should have the property systemTestEndAt (base name: "systemTestEndAt")', function() {
      // uncomment below and update the code to test the property systemTestEndAt
      //var instane = new ApChallengeMicroservice.InlineResponse2009ResultRounds();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new ApChallengeMicroservice.InlineResponse2009ResultRounds();
      //expect(instance).to.be();
    });

    it('should have the property forumId (base name: "forumId")', function() {
      // uncomment below and update the code to test the property forumId
      //var instane = new ApChallengeMicroservice.InlineResponse2009ResultRounds();
      //expect(instance).to.be();
    });

    it('should have the property userMMDetails (base name: "userMMDetails")', function() {
      // uncomment below and update the code to test the property userMMDetails
      //var instane = new ApChallengeMicroservice.InlineResponse2009ResultRounds();
      //expect(instance).to.be();
    });

  });

}));