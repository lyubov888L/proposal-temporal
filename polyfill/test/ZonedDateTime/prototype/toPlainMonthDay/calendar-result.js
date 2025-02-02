// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.zoneddatetime.prototype.toplainmonthday
info: |
    MonthDayFromFields ( calendar, fields, options )

    4. Perform ? RequireInternalSlot(monthDay, [[InitializedTemporalMonthDay]]).
---*/

class CustomCalendar extends Temporal.Calendar {
  constructor() {
    super("iso8601");
  }
  monthDayFromFields() {
    return {};
  }
}
const zonedDateTime = new Temporal.ZonedDateTime(957270896123456789n, "UTC", new CustomCalendar());
assert.throws(TypeError, () => zonedDateTime.toPlainMonthDay());
