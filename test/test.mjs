"use strict";

import * as expect from "chai";
const Expect = expect.expect;
import numFormatter from "../index.js";

describe("#numFormatter", function () {
	it("should convert single digits", function () {
		var result = numFormatter(1);
		Expect(result).to.equal("1");
	});

	it("should convert double digits", function () {
		var result = numFormatter(12);
		Expect(result).to.equal("12");
	});

	it("should convert triple digits", function () {
		var result = numFormatter(123);
		Expect(result).to.equal("123");
	});

	it("should convert 4 digits", function () {
		var result = numFormatter(1234);
		Expect(result).to.equal("1.234");
	});

	it("should convert 5 digits", function () {
		var result = numFormatter(12345);
		Expect(result).to.equal("12.345");
	});

	it("should convert 6 digits", function () {
		var result = numFormatter(123456);
		Expect(result).to.equal("123.456");
	});

	it("should convert 7 digits", function () {
		var result = numFormatter(1234567);
		Expect(result).to.equal("1.234.567");
	});

	it("should convert 8 digits", function () {
		var result = numFormatter(12345678);
		Expect(result).to.equal("12.345.678");
	});
});
