// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.zoneddatetime.prototype.withcalendar
description: Fast path for converting other Temporal objects to Temporal.Calendar by reading internal slots
info: |
    sec-temporal.zoneddatetime.prototype.withcalendar step 3:
      3. Let _calendar_ be ? ToTemporalCalendar(_calendarLike_).
    sec-temporal-totemporalcalendar step 1.a:
      a. If _temporalCalendarLike_ has an [[InitializedTemporalDate]], [[InitializedTemporalDateTime]], [[InitializedTemporalMonthDay]], [[InitializedTemporalYearMonth]], or [[InitializedTemporalZonedDateTime]] internal slot, then
        i. Return _temporalCalendarLike_.[[Calendar]].
includes: [compareArray.js, temporalHelpers.js]
---*/

TemporalHelpers.checkToTemporalCalendarFastPath((temporalObject, calendar) => {
  const zonedDateTime = new Temporal.ZonedDateTime(1_000_000_000_987_654_321n, "UTC");
  const result = zonedDateTime.withCalendar(temporalObject);
  assert.sameValue(result.calendar, calendar, "Temporal object coerced to calendar");
});
