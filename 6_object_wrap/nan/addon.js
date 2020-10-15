const addon = require('bindings')('addon');

var obj = new addon.MyObject(10);





setInterval(function(){
  console.log('!!');
},100000);

