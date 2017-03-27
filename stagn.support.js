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
              			"budge": "budge",
              			"falzy": "falzy",
              			"harden": "harden",
              			"kein": "kein",
              			"plough": "plough",
              			"protype": "protype",
              			"pyck": "pyck",
              			"redupe": "redupe"
              		}
              	@end-include
              */var _getOwnPropertyNames = require("babel-runtime/core-js/object/get-own-property-names");var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);var _defineProperty2 = require("babel-runtime/helpers/defineProperty");var _defineProperty3 = _interopRequireDefault(_defineProperty2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var budge = require("budge");
var falzy = require("falzy");
var harden = require("harden");
var kein = require("kein");
var plough = require("plough");
var protype = require("protype");
var pyck = require("pyck");
var redupe = require("redupe");

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

	set = redupe.apply(null, pyck(plough(budge(arguments)).map(function (entity) {
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

//# sourceMappingURL=stagn.support.js.map