// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.zoneddatetime.prototype.until
description: The time fields are read from the object before being passed to dateFromFields().
info: |
    sec-temporal.zoneddatetime.prototype.until step 3:
      3. Set _other_ to ? ToTemporalZonedDateTime(_other_).
    sec-temporal-totemporalzoneddatetime step 2.e:
      e. Let _result_ be ? InterpretTemporalDateTimeFields(_calendar_, _fields_, _options_).
    sec-temporal-interprettemporaldatetimefields steps 1–2:
      1. Let _timeResult_ be ? ToTemporalTimeRecord(_fields_).
      2. Let _temporalDate_ be ? DateFromFields(_calendar_, _fields_, _options_).
includes: [temporalHelpers.js]
---*/

const calendar = TemporalHelpers.calendarMakeInfinityTime();
const datetime = new Temporal.ZonedDateTime(1_000_000_000_987_654_321n, "UTC", calendar);
const duration = datetime.until({ year: 2001, month: 9, day: 9, timeZone: "UTC", calendar });

TemporalHelpers.assertDuration(duration, 0, 0, 0, 0, -1, -46, -40, -987, -654, -321);
