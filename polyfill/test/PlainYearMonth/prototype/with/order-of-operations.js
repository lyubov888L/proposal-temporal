// Copyright (C) 2020 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plainyearmonth.prototype.with
includes: [compareArray.js, temporalHelpers.js]
---*/

const instance = new Temporal.PlainYearMonth(2000, 5);
const expected = [
  "get calendar",
  "get timeZone",
  "get month",
  "get month.valueOf",
  "call month.valueOf",
  "get monthCode",
  "get monthCode.toString",
  "call monthCode.toString",
  "get year",
  "get year.valueOf",
  "call year.valueOf",
];
const actual = [];
const fields = {
  year: 1.7,
  month: 1.7,
  monthCode: "M01",
};
const argument = new Proxy(fields, {
  get(target, key) {
    actual.push(`get ${key}`);
    const result = target[key];
    if (result === undefined) {
      return undefined;
    }
    return TemporalHelpers.toPrimitiveObserver(actual, result, key);
  },
  has(target, key) {
    actual.push(`has ${key}`);
    return key in target;
  },
});
const result = instance.with(argument);
TemporalHelpers.assertPlainYearMonth(result, 1, 1, "M01");
assert.compareArray(actual, expected, "order of operations");
