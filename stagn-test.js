
const assert = require( "assert" );
const stagn = require( "./stagn.js" );

assert.equal( typeof stagn( function Hello( ){ }, { "yeah": "world" }, function why( ){ } ) == "function",
				true, "should return true" );

let Test = stagn( function Hello( ){ }, { "yeah": "world" }, function why( ){ } );
console.log( require( "util" ).inspect( Test, { "showHidden": true } ) );

assert.equal( Test.yeah, "world", "should return 'world'" );

assert.equal( typeof Test.why == "function", true, "should return true" );

console.log( "ok" );
