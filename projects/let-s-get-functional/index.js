// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./matthew-schiro.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    var males = _.filter(array, function(customer) {
        if(customer.gender === "male") {
            return true;
        }else{
            return false;
        }
    });
    return males.length;
}


var femaleCount = function(array) {
    var females = _.reduce(array, function(numFemales, customer) {
        if(customer.gender === 'female') {
            numFemales += 1;
        }
        return numFemales;
    }, 0);
    return females; 
}


var oldestCustomer = function(array) {
    var oldest = _.reduce(array, function(oldestCustomer, customer) {
        if(customer.age > oldestCustomer.age) {
            oldestCustomer = customer;
        }
        return oldestCustomer;
    });
    return oldest.name;
};

var youngestCustomer = function(array) {
    var youngest = _.reduce(array, function(youngestCustomer, customer) {
        if(customer.age < youngestCustomer.age) {
            youngestCustomer = customer;
        }
        return youngestCustomer;
    });
    return youngest.name;
};

var averageBalance = function(array) {
    var total = 0;
    var result = array.replace(/[$]/g, "");
    for (var i = 0; i < array.length; i++) {
        total += array[i].balance;
    }
};

var firstLetterCount;

var friendFirstLetterCount;

var friendsCount;

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
