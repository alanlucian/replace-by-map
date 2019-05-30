const replacer = require('../src/index');

var map = new Map();
map.set('param1', 'val1');
map.set('param2', 'val2');
map.set('paramX', 'valX');

var string = " My String has %param1%, %param2% and another thing: %paramX%, I will use %param1% here too ";
console.log( replacer.exec( string,map, '%' ) );

var string2 = " This new String will use only [paramX]";
console.log( replacer.exec( string2, map, '[', ']' ) );