// Copyright (C) 2020 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindate.prototype.subtract
includes: [temporalHelpers.js]
---*/

const instance = Temporal.PlainDate.from({ year: 2000, month: 5, day: 2 });
const result = instance.subtract("P3D");
TemporalHelpers.assertPlainDate(result, 2000, 4, "M04", 29);
