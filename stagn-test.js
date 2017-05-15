
const stagn = require( "./stagn.js" );

console.log( require( "util" ).inspect( stagn( function Hello( ){ },
{ "yeah": "world" }, function why( ){ } ), { "showHidden": true } ) );
