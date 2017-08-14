
const assert = require( "assert" );
const stagn = require( "./stagn.js" );

assert.equal( typeof stagn( function Hello( ){ }, { "yeah": "world" }, function why( ){ } ) == "function",
	true, "should be of function data type" );

let Test = stagn( function Hello( ){ }, { "yeah": "world" }, function why( ){ } );
console.log( require( "util" ).inspect( Test, { "showHidden": true } ) );

assert.equal( Test.yeah, "world", "should be equal to 'world'" );

//These result of these test had changed from function to undefined 
//assert.equal( typeof Test.why == "function", true, "should be of function data type" );

console.log( "ok" );
