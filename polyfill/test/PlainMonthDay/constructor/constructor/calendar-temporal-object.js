// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plainmonthday
description: Fast path for converting other Temporal objects to Temporal.Calendar by reading internal slots
info: |
    sec-temporal.plainmonthday step 5:
      5. Let _calendar_ be ? ToOptionalTemporalCalendar(_calendarLike_).
    sec-temporal-tooptionaltemporalcalendar step 2:
      2. Return ? ToTemporalCalendar(_temporalCalendarLike_).
    sec-temporal-totemporalcalendar step 1.a:
      a. If _temporalCalendarLike_ has an [[InitializedTemporalDate]], [[InitializedTemporalDateTime]], [[InitializedTemporalMonthDay]], [[InitializedTemporalYearMonth]], or [[InitializedTemporalZonedDateTime]] internal slot, then
        i. Return _temporalCalendarLike_.[[Calendar]].
includes: [compareArray.js, temporalHelpers.js]
---*/

TemporalHelpers.checkToTemporalCalendarFastPath((temporalObject, calendar) => {
  const result = new Temporal.PlainMonthDay(5, 2, temporalObject);
  assert.sameValue(result.calendar, calendar, "Temporal object coerced to calendar");
});
