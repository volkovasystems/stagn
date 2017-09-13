"use strict";

/*;
              	@module-license:
              		The MIT License (MIT)
              		@mit-license
              
              		Copyright (@c) 2017 Richeve Siodina Bebedor
              		@email: richeve.bebedor@gmail.com
              
              		Permission is hereby granted, free of charge, to any person obtaining a copy
              		of this software and associated documentation files (the "Software"), to deal
              		in the Software without restriction, including without limitation the rights
              		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
              		copies of the Software, and to permit persons to whom the Software is
              		furnished to do so, subject to the following conditions:
              
              		The above copyright notice and this permission notice shall be included in all
              		copies or substantial portions of the Software.
              
              		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
              		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
              		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
              		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
              		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
              		SOFTWARE.
              	@end-module-license
              
              	@module-configuration:
              		{
              			"package": "stagn",
              			"path": "stagn/stagn.js",
              			"file": "stagn.js",
              			"module": "stagn",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/stagn.git",
              			"test": "stagn-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Attach static entity to the class.
              	@end-module-documentation
              
              	@include:
              		{
              			"falzy": "falzy",
              			"harden": "harden",
              			"kein": "kein",
              			"plough": "plough",
              			"pyck": "pyck",
              			"redupe": "redupe",
              			"shft": "shft"
              		}
              	@end-include
              */var _getOwnPropertyNames = require("babel-runtime/core-js/object/get-own-property-names");var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);var _defineProperty2 = require("babel-runtime/helpers/defineProperty");var _defineProperty3 = _interopRequireDefault(_defineProperty2);var _typeof2 = require("babel-runtime/helpers/typeof");var _typeof3 = _interopRequireDefault(_typeof2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var falzy = require("falzy");
var harden = require("harden");
var kein = require("kein");
var plough = require("plough");
var pyck = require("pyck");
var redupe = require("redupe");
var shft = require("shft");

var stagn = function stagn(blueprint, set) {
	/*;
                                            	@meta-configuration:
                                            		{
                                            			"blueprint:required": "function",
                                            			"set:required": [
                                            				Array,
                                            				"object",
                                            				"..."
                                            			]
                                            		}
                                            	@end-meta-configuration
                                            */

	if (falzy(blueprint) || typeof blueprint != "function") {
		throw new Error("invalid blueprint");
	}

	set = redupe.apply(null, pyck(plough(shft(arguments)).map(function (entity) {
		if ((typeof entity === "undefined" ? "undefined" : (0, _typeof3.default)(entity)) == "object") {
			return entity;

		} else if ((typeof entity === "undefined" ? "undefined" : (0, _typeof3.default)(entity)) != "object" && kein("name", entity)) {
			return (0, _defineProperty3.default)({}, entity.name, entity);

		} else {
			return false;
		}
	}), OBJECT));

	(0, _getOwnPropertyNames2.default)(set).forEach(function (property) {
		harden(property, set[property], blueprint);
	});

	return blueprint;
};

module.exports = stagn;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YWduLnN1cHBvcnQuanMiXSwibmFtZXMiOlsiZmFsenkiLCJyZXF1aXJlIiwiaGFyZGVuIiwia2VpbiIsInBsb3VnaCIsInB5Y2siLCJyZWR1cGUiLCJzaGZ0Iiwic3RhZ24iLCJibHVlcHJpbnQiLCJzZXQiLCJFcnJvciIsImFwcGx5IiwiYXJndW1lbnRzIiwibWFwIiwiZW50aXR5IiwibmFtZSIsIk9CSkVDVCIsImZvckVhY2giLCJwcm9wZXJ0eSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThEQSxJQUFNQSxRQUFRQyxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1DLFNBQVNELFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTUUsT0FBT0YsUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNRyxTQUFTSCxRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1JLE9BQU9KLFFBQVMsTUFBVCxDQUFiO0FBQ0EsSUFBTUssU0FBU0wsUUFBUyxRQUFULENBQWY7QUFDQSxJQUFNTSxPQUFPTixRQUFTLE1BQVQsQ0FBYjs7QUFFQSxJQUFNTyxRQUFRLFNBQVNBLEtBQVQsQ0FBZ0JDLFNBQWhCLEVBQTJCQyxHQUEzQixFQUFnQztBQUM3Qzs7Ozs7Ozs7Ozs7OztBQWFBLEtBQUlWLE1BQU9TLFNBQVAsS0FBc0IsT0FBT0EsU0FBUCxJQUFvQixVQUE5QyxFQUEwRDtBQUN6RCxRQUFNLElBQUlFLEtBQUosQ0FBVyxtQkFBWCxDQUFOO0FBQ0E7O0FBRURELE9BQU1KLE9BQU9NLEtBQVAsQ0FBYyxJQUFkLEVBQW9CUCxLQUFNRCxPQUFRRyxLQUFNTSxTQUFOLENBQVIsRUFBNEJDLEdBQTVCLENBQWlDLFVBQUVDLE1BQUYsRUFBYztBQUM5RSxNQUFJLFFBQU9BLE1BQVAsdURBQU9BLE1BQVAsTUFBaUIsUUFBckIsRUFBK0I7QUFDOUIsVUFBT0EsTUFBUDs7QUFFQSxHQUhELE1BR00sSUFBSSxRQUFPQSxNQUFQLHVEQUFPQSxNQUFQLE1BQWlCLFFBQWpCLElBQTZCWixLQUFNLE1BQU4sRUFBY1ksTUFBZCxDQUFqQyxFQUF5RDtBQUM5RCw0Q0FBV0EsT0FBT0MsSUFBbEIsRUFBMEJELE1BQTFCOztBQUVBLEdBSEssTUFHRDtBQUNKLFVBQU8sS0FBUDtBQUNBO0FBQ0QsRUFWK0IsQ0FBTixFQVVyQkUsTUFWcUIsQ0FBcEIsQ0FBTjs7QUFZQSxvQ0FBNEJQLEdBQTVCLEVBQWtDUSxPQUFsQyxDQUEyQyxVQUFFQyxRQUFGLEVBQWdCO0FBQzFEakIsU0FBUWlCLFFBQVIsRUFBa0JULElBQUtTLFFBQUwsQ0FBbEIsRUFBbUNWLFNBQW5DO0FBQ0EsRUFGRDs7QUFJQSxRQUFPQSxTQUFQO0FBQ0EsQ0FuQ0Q7O0FBcUNBVyxPQUFPQyxPQUFQLEdBQWlCYixLQUFqQiIsImZpbGUiOiJzdGFnbi5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAbW9kdWxlLWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC1tb2R1bGUtbGljZW5zZVxuXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJzdGFnblwiLFxuXHRcdFx0XCJwYXRoXCI6IFwic3RhZ24vc3RhZ24uanNcIixcblx0XHRcdFwiZmlsZVwiOiBcInN0YWduLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcInN0YWduXCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxuXHRcdFx0XSxcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9zdGFnbi5naXRcIixcblx0XHRcdFwidGVzdFwiOiBcInN0YWduLXRlc3QuanNcIixcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcblx0XHR9XG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cblxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0QXR0YWNoIHN0YXRpYyBlbnRpdHkgdG8gdGhlIGNsYXNzLlxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJmYWx6eVwiOiBcImZhbHp5XCIsXG5cdFx0XHRcImhhcmRlblwiOiBcImhhcmRlblwiLFxuXHRcdFx0XCJrZWluXCI6IFwia2VpblwiLFxuXHRcdFx0XCJwbG91Z2hcIjogXCJwbG91Z2hcIixcblx0XHRcdFwicHlja1wiOiBcInB5Y2tcIixcblx0XHRcdFwicmVkdXBlXCI6IFwicmVkdXBlXCIsXG5cdFx0XHRcInNoZnRcIjogXCJzaGZ0XCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgZmFsenkgPSByZXF1aXJlKCBcImZhbHp5XCIgKTtcbmNvbnN0IGhhcmRlbiA9IHJlcXVpcmUoIFwiaGFyZGVuXCIgKTtcbmNvbnN0IGtlaW4gPSByZXF1aXJlKCBcImtlaW5cIiApO1xuY29uc3QgcGxvdWdoID0gcmVxdWlyZSggXCJwbG91Z2hcIiApO1xuY29uc3QgcHljayA9IHJlcXVpcmUoIFwicHlja1wiICk7XG5jb25zdCByZWR1cGUgPSByZXF1aXJlKCBcInJlZHVwZVwiICk7XG5jb25zdCBzaGZ0ID0gcmVxdWlyZSggXCJzaGZ0XCIgKTtcblxuY29uc3Qgc3RhZ24gPSBmdW5jdGlvbiBzdGFnbiggYmx1ZXByaW50LCBzZXQgKXtcblx0Lyo7XG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdHtcblx0XHRcdFx0XCJibHVlcHJpbnQ6cmVxdWlyZWRcIjogXCJmdW5jdGlvblwiLFxuXHRcdFx0XHRcInNldDpyZXF1aXJlZFwiOiBbXG5cdFx0XHRcdFx0QXJyYXksXG5cdFx0XHRcdFx0XCJvYmplY3RcIixcblx0XHRcdFx0XHRcIi4uLlwiXG5cdFx0XHRcdF1cblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdGlmKCBmYWx6eSggYmx1ZXByaW50ICkgfHwgdHlwZW9mIGJsdWVwcmludCAhPSBcImZ1bmN0aW9uXCIgKXtcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBibHVlcHJpbnRcIiApO1xuXHR9XG5cblx0c2V0ID0gcmVkdXBlLmFwcGx5KCBudWxsLCBweWNrKCBwbG91Z2goIHNoZnQoIGFyZ3VtZW50cyApICkubWFwKCAoIGVudGl0eSApID0+IHtcblx0XHRpZiggdHlwZW9mIGVudGl0eSA9PSBcIm9iamVjdFwiICl7XG5cdFx0XHRyZXR1cm4gZW50aXR5O1xuXG5cdFx0fWVsc2UgaWYoIHR5cGVvZiBlbnRpdHkgIT0gXCJvYmplY3RcIiAmJiBrZWluKCBcIm5hbWVcIiwgZW50aXR5ICkgKXtcblx0XHRcdHJldHVybiB7IFsgZW50aXR5Lm5hbWUgXTogZW50aXR5IH07XG5cblx0XHR9ZWxzZXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH0gKSwgT0JKRUNUICkgKTtcblxuXHRPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyggc2V0ICkuZm9yRWFjaCggKCBwcm9wZXJ0eSApID0+IHtcblx0XHRoYXJkZW4oIHByb3BlcnR5LCBzZXRbIHByb3BlcnR5IF0sIGJsdWVwcmludCApO1xuXHR9ICk7XG5cblx0cmV0dXJuIGJsdWVwcmludDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhZ247XG4iXX0=
//# sourceMappingURL=stagn.support.js.map
