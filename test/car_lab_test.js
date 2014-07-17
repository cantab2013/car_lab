
// test/car_lab_test.js
// TEST RESULTS BELOW
// yinan@Yinans-MacBook-Air:~/gacode/car_lab/test(master⚡) » mocha car_lab_test.js

//   ․․․․driving to Fremont
// ․parked!!
// ․driving to pick up mom
// ․driving to pick up mom
// dropped off mom
// don't have that passenger!
// ․

//   8 passing (8ms)

var Car = require("../src/car_lab.js"),
  expect = require("chai").expect;


describe("Car", function(){

  describe("#sale", function(){
    it("should update newOwner", function(){
			var myCar = new Car ("BMW", "S3", "2003", "black");
      myCar.sale("Aaron");
      expect(myCar.currentOwner).to.equal("Aaron");
      expect(myCar.previousOwners).to.eql(["manufacturer"]);
    });
  });

  describe("#paint", function(){
    it("should paint newColor", function(){
			var myCar = new Car ("BMW", "S3", "2003", "black");
      myCar.paint("red");
      expect(myCar.color).to.equal("red");
    });
  });

  describe("#start", function(){
    it("should start car", function(){
			var myCar = new Car ("BMW", "S3", "2003", "black");
			myCar.start();
      expect(myCar.state).to.equal("on");
    });
  });

  describe("#off", function(){
    it("should turn off car", function(){
			var myCar = new Car ("BMW", "S3", "2003", "black");
			myCar.start();
			myCar.off();
      expect(myCar.state).to.equal("off");
    });
  });

  describe("#driveTo", function(){
    it("should drive to a destination", function(){
			var myCar = new Car ("BMW", "S3", "2003", "black");
			myCar.start();
      expect(myCar.driveTo("Fremont")).to.equal("driving to Fremont");
    });
  });

  describe("#park", function(){
    it("park car when off", function(){
			var myCar = new Car ("BMW", "S3", "2003", "black");
			myCar.off();
      expect(myCar.park()).to.equal("parked!!");
    });
  });

  describe("#pickUp", function(){
    it("pick up someone with specific name", function(){
			var myCar = new Car ("BMW", "S3", "2003", "black");
			myCar.start();
      expect(myCar.pickUp("mom")).to.equal("driving to pick up mom");
      expect(myCar.passengers).to.eql(["mom"]);
    });
  });

  describe("#dropOff", function(){
    it("drop off someone with specific name", function(){
			var myCar = new Car ("BMW", "S3", "2003", "black");
			myCar.start();
			myCar.pickUp("mom");
      expect(myCar.dropOff("mom")).to.eql("dropped off mom");
      expect(myCar.passengers).to.eql([]);
      expect(myCar.dropOff("dad")).to.equal("don't have that passenger!");
    });
  });



});