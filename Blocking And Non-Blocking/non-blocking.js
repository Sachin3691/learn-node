var getUser = require('./getUser'); // Do not worry about the implementation, for now

getUser('123', function(user1){
    console.log('user1', user1);
});

getUser('321', function(user2){
    console.log('user2', user2);
});

var sum = 1+2;
console.log('Sum', sum);