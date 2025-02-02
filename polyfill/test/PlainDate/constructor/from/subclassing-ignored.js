// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindate.from
includes: [temporalHelpers.js]
---*/

TemporalHelpers.checkSubclassingIgnoredStatic(
  Temporal.PlainDate,
  "from",
  ["2000-05-02"],
  (result) => TemporalHelpers.assertPlainDate(result, 2000, 5, "M05", 2),
);
