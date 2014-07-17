// Only use this syntax for constructors, not other functions

function Car (make, model, year, color) {
	this.make = make;
	this.model = model;
	this.year = year;
	this.color = color;
	this.state = "off";
	this.previousOwners = [];
	this.currentOwner = "manufacturer";
	this.passengers = [];
}

Car.prototype.sale = function(newOwner) {
	this.previousOwners.push(this.currentOwner);
	this.currentOwner = newOwner;
};

Car.prototype.paint = function(newColor) {
	this.color = newColor;
};


Car.prototype.start = function() {
	this.state = "on";
};

Car.prototype.off = function() {
	this.state = "off";
};


Car.prototype.driveTo = function(destination) {
	if (this.state === "on") {
		console.log("driving to", destination);
		return "driving to " + destination; 
	}
	else {
		console.log("pls turn on car first!");
		return "pls turn on car first!";
	};
};

Car.prototype.park = function() {
	if (this.state === "off") {
		console.log("parked!!");
		return "parked!!";		
	}
	else {
		console.log("pls turn off car first!");
		return "pls turn off car first!";
	};
};

Car.prototype.pickUp = function (name) {
	if (this.state === "on") {
		console.log("driving to pick up", name);
		this.passengers.push(name);		
		return "driving to pick up " + name;
	}
	else {
		console.log("pls turn on car first!");
		return "pls turn on car first!";
	};
}

Car.prototype.dropOff = function (name) {
	if (this.state === "on") {
    if(this.passengers.indexOf(name) != -1) {
      this.passengers.splice(this.passengers.indexOf(name), 1);
			console.log("dropped off", name);
			return "dropped off " + name;
    }
    else {
 			console.log("don't have that passenger!");  
			return "don't have that passenger!";
		}
	}
	else {
		console.log("pls turn on car first!");
		return "pls turn on car first!";
	};
}

if (module !== undefined && module.exports) {
  module.exports = Car;
}



