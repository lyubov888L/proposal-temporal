// Copyright (C) 2020 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindatetime.prototype.add
includes: [temporalHelpers.js]
---*/

const instance = Temporal.PlainDateTime.from({ year: 2000, month: 5, day: 2, minute: 34, second: 56, millisecond: 987, microsecond: 654, nanosecond: 321 });
const result = instance.add("P3D");
TemporalHelpers.assertPlainDateTime(result, 2000, 5, "M05", 5, 0, 34, 56, 987, 654, 321);
