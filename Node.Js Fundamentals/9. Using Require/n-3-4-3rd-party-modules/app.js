const _ = require('lodash');


console.log(_.isString(true));
console.log(_.isString("Sachin"));


var filteredArray = _.uniq(['Sachin','Thomas', 'Sachin', 1, 2, 3, 4]);
console.log(filteredArray);