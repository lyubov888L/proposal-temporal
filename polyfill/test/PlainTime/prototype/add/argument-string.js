// Copyright (C) 2020 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaintime.prototype.add
includes: [temporalHelpers.js]
---*/

const instance = Temporal.PlainTime.from({ hour: 12, minute: 34, second: 56, millisecond: 987, microsecond: 654, nanosecond: 321 });
const result = instance.add("PT3M");
TemporalHelpers.assertPlainTime(result, 12, 37, 56, 987, 654, 321);
