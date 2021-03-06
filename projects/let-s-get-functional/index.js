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
    var total = _.reduce(array, function(previous, current, index, array){
        var balance = current.balance.replace(/[$,]/g, "");
        var num = parseFloat(balance);
        previous += num;
        return previous;
    }, 0);
    return total / array.length;

};

var firstLetterCount = function(array, letter) {
    var total = 0;
    for (var i = 0; i < array.length; i++) {
        if(array[i].name[0].toLowerCase() === letter.toLowerCase()) {
            total += 1;
        }
    }
    return total;
};

var friendFirstLetterCount = function(array, customer, letter) {
    var total = 0;
    for (var i = 0; i < array.length; i++) {
        if(array[i].name === customer) {
            for (var j = 0; j < array[i].friends.length; j++) {
                if(array[i].friends[j].name[0].toLowerCase() === letter.toLowerCase()) {
                    total += 1;
                    
                }              
            }
        }    
    }    
    return total;
};

var friendsCount = function(array, name) {
    var list = [];
    for (var i = 0; i < array.length; i++){
        for (var j = 0; j < array[i].friends.length; j++) {
            if(array[i].friends[j].name === name) {
                list.push(array[i].name);
            }
        }
    }
    return list;  
};

var topThreeTags = function(array) {
    var allTags = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].tags.length; j++) {
            allTags.push(array[i].tags[j]);
        }
    }
    var tagsCount = {};
    for (let i = 0; i < allTags.length; i++) {
        if(tagsCount[allTags[i]]) {
            tagsCount[allTags[i]] += 1;
        }else{
            tagsCount[allTags[i]] = 1;
        }
    }
    var entries = Object.entries(tagsCount);
    entries.sort(function(a, b) {
        return b[1] - a[1];
    });

    var top3 = [entries[0][0], entries[1][0], entries[2][0]];

    return top3;

};

var genderCount = function(array) {
    var genderObj = {female: 0, male: 0, "non-binary": 0};
    var total = _.reduce(array, function(acc, customer) {
        if (customer.gender === 'male') {
            genderObj.male += 1;
        }else if(customer.gender === "female") {
            genderObj.female +=1;
        }else
        genderObj["non-binary"] += 1;
        return total;
    }, 0); 
    return genderObj;
}

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
