// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.zoneddatetime.prototype.toplainmonthday
info: |
    MonthDayFromFields ( calendar, fields [ , options ] )

    3. If options is not present, then
        a. Set options to undefined.
includes: [temporalHelpers.js]
---*/

class CustomCalendar extends Temporal.Calendar {
  constructor() {
    super("iso8601");
  }
  monthDayFromFields(...args) {
    assert.sameValue(args.length, 2, "args.length");
    assert.sameValue(typeof args[0], "object", "args[0]");
    assert.sameValue(args[1], undefined, "args[1]");
    return super.monthDayFromFields(...args);
  }
}
const zonedDateTime = new Temporal.ZonedDateTime(957270896123456789n, "UTC", new CustomCalendar());
const result = zonedDateTime.toPlainMonthDay();
TemporalHelpers.assertPlainMonthDay(result, "M05", 2);
