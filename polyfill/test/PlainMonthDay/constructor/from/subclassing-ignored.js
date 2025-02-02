// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plainmonthday.from
includes: [temporalHelpers.js]
---*/

TemporalHelpers.checkSubclassingIgnoredStatic(
  Temporal.PlainMonthDay,
  "from",
  ["05-02"],
  (result) => TemporalHelpers.assertPlainMonthDay(result, "M05", 2),
);
