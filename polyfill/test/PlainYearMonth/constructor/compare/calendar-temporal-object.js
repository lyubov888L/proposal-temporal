// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plainyearmonth.compare
description: Fast path for converting other Temporal objects to Temporal.Calendar by reading internal slots
info: |
    sec-temporal.plainyearmonth.compare steps 1–2:
      1. Set _one_ to ? ToTemporalYearMonth(_one_).
      2. Set _two_ to ? ToTemporalYearMonth(_two_).
    sec-temporal-totemporaldate step 2.b:
      b. Let _calendar_ be ? GetOptionalTemporalCalendar(_item_).
    sec-temporal-getoptionaltemporalcalendar step 2:
      2. Return ? ToOptionalTemporalCalendar(_calendar_).
    sec-temporal-tooptionaltemporalcalendar step 2:
      3. Return ? ToTemporalCalendar(_temporalCalendarLike_).
    sec-temporal-totemporalcalendar step 1.a:
      a. If _temporalCalendarLike_ has an [[InitializedTemporalDate]], [[InitializedTemporalDateTime]], [[InitializedTemporalMonthDay]], [[InitializedTemporalYearMonth]], or [[InitializedTemporalZonedDateTime]] internal slot, then
        i. Return _temporalCalendarLike_.[[Calendar]].
includes: [compareArray.js, temporalHelpers.js]
---*/

TemporalHelpers.checkToTemporalCalendarFastPath((temporalObject) => {
  Temporal.PlainYearMonth.compare(
    { year: 2000, month: 5, calendar: temporalObject },
    { year: 2001, month: 6, calendar: temporalObject },
  );
});
