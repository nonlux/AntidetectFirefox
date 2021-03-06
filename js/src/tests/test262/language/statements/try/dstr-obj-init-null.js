// This file was procedurally generated from the following sources:
// - src/dstr-binding/obj-init-null.case
// - src/dstr-binding/error/try.template
/*---
description: Value specifed for object binding pattern must be object coercible (null) (try statement)
esid: sec-runtime-semantics-catchclauseevaluation
es6id: 13.15.7
features: [destructuring-binding]
flags: [generated]
info: |
    Catch : catch ( CatchParameter ) Block

    [...]
    5. Let status be the result of performing BindingInitialization for
       CatchParameter passing thrownValue and catchEnv as arguments.
    [...]

    Runtime Semantics: BindingInitialization

    ObjectBindingPattern : { }

    1. Return NormalCompletion(empty).
---*/

assert.throws(TypeError, function() {
  try {
    throw null;
  } catch ({}) {}
});

reportCompare(0, 0);
