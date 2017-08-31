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
              			"protype": "protype",
              			"pyck": "pyck",
              			"redupe": "redupe",
              			"shft": "shft"
              		}
              	@end-include
              */var _getOwnPropertyNames = require("babel-runtime/core-js/object/get-own-property-names");var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);var _defineProperty2 = require("babel-runtime/helpers/defineProperty");var _defineProperty3 = _interopRequireDefault(_defineProperty2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var falzy = require("falzy");
var harden = require("harden");
var kein = require("kein");
var plough = require("plough");
var protype = require("protype");
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

	if (falzy(blueprint) || !protype(blueprint, FUNCTION)) {
		throw new Error("invalid blueprint");
	}

	set = redupe.apply(null, pyck(plough(shft(arguments)).map(function (entity) {
		if (protype(entity, OBJECT)) {
			return entity;

		} else if (!protype(entity, OBJECT) && kein("name", entity)) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YWduLnN1cHBvcnQuanMiXSwibmFtZXMiOlsiZmFsenkiLCJyZXF1aXJlIiwiaGFyZGVuIiwia2VpbiIsInBsb3VnaCIsInByb3R5cGUiLCJweWNrIiwicmVkdXBlIiwic2hmdCIsInN0YWduIiwiYmx1ZXByaW50Iiwic2V0IiwiRlVOQ1RJT04iLCJFcnJvciIsImFwcGx5IiwiYXJndW1lbnRzIiwibWFwIiwiZW50aXR5IiwiT0JKRUNUIiwibmFtZSIsImZvckVhY2giLCJwcm9wZXJ0eSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUErREEsSUFBTUEsUUFBUUMsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNQyxTQUFTRCxRQUFTLFFBQVQsQ0FBZjtBQUNBLElBQU1FLE9BQU9GLFFBQVMsTUFBVCxDQUFiO0FBQ0EsSUFBTUcsU0FBU0gsUUFBUyxRQUFULENBQWY7QUFDQSxJQUFNSSxVQUFVSixRQUFTLFNBQVQsQ0FBaEI7QUFDQSxJQUFNSyxPQUFPTCxRQUFTLE1BQVQsQ0FBYjtBQUNBLElBQU1NLFNBQVNOLFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTU8sT0FBT1AsUUFBUyxNQUFULENBQWI7O0FBRUEsSUFBTVEsUUFBUSxTQUFTQSxLQUFULENBQWdCQyxTQUFoQixFQUEyQkMsR0FBM0IsRUFBZ0M7QUFDN0M7Ozs7Ozs7Ozs7Ozs7QUFhQSxLQUFJWCxNQUFPVSxTQUFQLEtBQXNCLENBQUNMLFFBQVNLLFNBQVQsRUFBb0JFLFFBQXBCLENBQTNCLEVBQTJEO0FBQzFELFFBQU0sSUFBSUMsS0FBSixDQUFXLG1CQUFYLENBQU47QUFDQTs7QUFFREYsT0FBTUosT0FBT08sS0FBUCxDQUFjLElBQWQsRUFBb0JSLEtBQU1GLE9BQVFJLEtBQU1PLFNBQU4sQ0FBUixFQUE0QkMsR0FBNUIsQ0FBaUMsVUFBRUMsTUFBRixFQUFjO0FBQzlFLE1BQUlaLFFBQVNZLE1BQVQsRUFBaUJDLE1BQWpCLENBQUosRUFBK0I7QUFDOUIsVUFBT0QsTUFBUDs7QUFFQSxHQUhELE1BR00sSUFBSSxDQUFDWixRQUFTWSxNQUFULEVBQWlCQyxNQUFqQixDQUFELElBQThCZixLQUFNLE1BQU4sRUFBY2MsTUFBZCxDQUFsQyxFQUEwRDtBQUMvRCw0Q0FBV0EsT0FBT0UsSUFBbEIsRUFBMEJGLE1BQTFCOztBQUVBLEdBSEssTUFHRDtBQUNKLFVBQU8sS0FBUDtBQUNBO0FBQ0QsRUFWK0IsQ0FBTixFQVVyQkMsTUFWcUIsQ0FBcEIsQ0FBTjs7QUFZQSxvQ0FBNEJQLEdBQTVCLEVBQWtDUyxPQUFsQyxDQUEyQyxVQUFFQyxRQUFGLEVBQWdCO0FBQzFEbkIsU0FBUW1CLFFBQVIsRUFBa0JWLElBQUtVLFFBQUwsQ0FBbEIsRUFBbUNYLFNBQW5DO0FBQ0EsRUFGRDs7QUFJQSxRQUFPQSxTQUFQO0FBQ0EsQ0FuQ0Q7O0FBcUNBWSxPQUFPQyxPQUFQLEdBQWlCZCxLQUFqQiIsImZpbGUiOiJzdGFnbi5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKjtcclxuXHRAbW9kdWxlLWxpY2Vuc2U6XHJcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcclxuXHRcdEBtaXQtbGljZW5zZVxyXG5cclxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3JcclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxyXG5cclxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcclxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcclxuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcclxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuXHJcblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcclxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxyXG5cdFx0U09GVFdBUkUuXHJcblx0QGVuZC1tb2R1bGUtbGljZW5zZVxyXG5cclxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XHJcblx0XHR7XHJcblx0XHRcdFwicGFja2FnZVwiOiBcInN0YWduXCIsXHJcblx0XHRcdFwicGF0aFwiOiBcInN0YWduL3N0YWduLmpzXCIsXHJcblx0XHRcdFwiZmlsZVwiOiBcInN0YWduLmpzXCIsXHJcblx0XHRcdFwibW9kdWxlXCI6IFwic3RhZ25cIixcclxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcclxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcclxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xyXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxyXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxyXG5cdFx0XHRdLFxyXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvc3RhZ24uZ2l0XCIsXHJcblx0XHRcdFwidGVzdFwiOiBcInN0YWduLXRlc3QuanNcIixcclxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxyXG5cdFx0fVxyXG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cclxuXHJcblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxyXG5cdFx0QXR0YWNoIHN0YXRpYyBlbnRpdHkgdG8gdGhlIGNsYXNzLlxyXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cclxuXHJcblx0QGluY2x1ZGU6XHJcblx0XHR7XHJcblx0XHRcdFwiZmFsenlcIjogXCJmYWx6eVwiLFxyXG5cdFx0XHRcImhhcmRlblwiOiBcImhhcmRlblwiLFxyXG5cdFx0XHRcImtlaW5cIjogXCJrZWluXCIsXHJcblx0XHRcdFwicGxvdWdoXCI6IFwicGxvdWdoXCIsXHJcblx0XHRcdFwicHJvdHlwZVwiOiBcInByb3R5cGVcIixcclxuXHRcdFx0XCJweWNrXCI6IFwicHlja1wiLFxyXG5cdFx0XHRcInJlZHVwZVwiOiBcInJlZHVwZVwiLFxyXG5cdFx0XHRcInNoZnRcIjogXCJzaGZ0XCJcclxuXHRcdH1cclxuXHRAZW5kLWluY2x1ZGVcclxuKi9cclxuXHJcbmNvbnN0IGZhbHp5ID0gcmVxdWlyZSggXCJmYWx6eVwiICk7XHJcbmNvbnN0IGhhcmRlbiA9IHJlcXVpcmUoIFwiaGFyZGVuXCIgKTtcclxuY29uc3Qga2VpbiA9IHJlcXVpcmUoIFwia2VpblwiICk7XHJcbmNvbnN0IHBsb3VnaCA9IHJlcXVpcmUoIFwicGxvdWdoXCIgKTtcclxuY29uc3QgcHJvdHlwZSA9IHJlcXVpcmUoIFwicHJvdHlwZVwiICk7XHJcbmNvbnN0IHB5Y2sgPSByZXF1aXJlKCBcInB5Y2tcIiApO1xyXG5jb25zdCByZWR1cGUgPSByZXF1aXJlKCBcInJlZHVwZVwiICk7XHJcbmNvbnN0IHNoZnQgPSByZXF1aXJlKCBcInNoZnRcIiApO1xyXG5cclxuY29uc3Qgc3RhZ24gPSBmdW5jdGlvbiBzdGFnbiggYmx1ZXByaW50LCBzZXQgKXtcclxuXHQvKjtcclxuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XHJcblx0XHRcdHtcclxuXHRcdFx0XHRcImJsdWVwcmludDpyZXF1aXJlZFwiOiBcImZ1bmN0aW9uXCIsXHJcblx0XHRcdFx0XCJzZXQ6cmVxdWlyZWRcIjogW1xyXG5cdFx0XHRcdFx0QXJyYXksXHJcblx0XHRcdFx0XHRcIm9iamVjdFwiLFxyXG5cdFx0XHRcdFx0XCIuLi5cIlxyXG5cdFx0XHRcdF1cclxuXHRcdFx0fVxyXG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cclxuXHQqL1xyXG5cclxuXHRpZiggZmFsenkoIGJsdWVwcmludCApIHx8ICFwcm90eXBlKCBibHVlcHJpbnQsIEZVTkNUSU9OICkgKXtcclxuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGJsdWVwcmludFwiICk7XHJcblx0fVxyXG5cclxuXHRzZXQgPSByZWR1cGUuYXBwbHkoIG51bGwsIHB5Y2soIHBsb3VnaCggc2hmdCggYXJndW1lbnRzICkgKS5tYXAoICggZW50aXR5ICkgPT4ge1xyXG5cdFx0aWYoIHByb3R5cGUoIGVudGl0eSwgT0JKRUNUICkgKXtcclxuXHRcdFx0cmV0dXJuIGVudGl0eTtcclxuXHJcblx0XHR9ZWxzZSBpZiggIXByb3R5cGUoIGVudGl0eSwgT0JKRUNUICkgJiYga2VpbiggXCJuYW1lXCIsIGVudGl0eSApICl7XHJcblx0XHRcdHJldHVybiB7IFsgZW50aXR5Lm5hbWUgXTogZW50aXR5IH07XHJcblxyXG5cdFx0fWVsc2V7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHR9ICksIE9CSkVDVCApICk7XHJcblxyXG5cdE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKCBzZXQgKS5mb3JFYWNoKCAoIHByb3BlcnR5ICkgPT4ge1xyXG5cdFx0aGFyZGVuKCBwcm9wZXJ0eSwgc2V0WyBwcm9wZXJ0eSBdLCBibHVlcHJpbnQgKTtcclxuXHR9ICk7XHJcblxyXG5cdHJldHVybiBibHVlcHJpbnQ7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWduO1xyXG4iXX0=
//# sourceMappingURL=stagn.support.js.map
