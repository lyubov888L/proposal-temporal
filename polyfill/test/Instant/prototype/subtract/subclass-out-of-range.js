// Copyright (C) 2020 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.instant.prototype.subtract
features: [BigInt]
---*/

let called = 0;

class MyInstant extends Temporal.Instant {
  constructor(ns) {
    ++called;
    super(ns);
  }
}

const instance = new MyInstant(-8640000000000000000000n);
assert.sameValue(called, 1);

assert.throws(RangeError, () => instance.subtract({ nanoseconds: 1 }));
assert.sameValue(called, 1);
