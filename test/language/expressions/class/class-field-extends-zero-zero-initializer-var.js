// This file was procedurally generated from the following sources:
// - src/class-fields/zero-zero-initializer-var.case
// - src/class-fields/default/cls-decl-extends.template
/*---
description: zero initialized zero var (class fields)
flags: [generated]
includes: [propertyHelper.js]
info: |
    1.1 New Productions

    [...]

    FieldDefinitionList [Yield, Await]:
      FieldDefinition [?Yield, ?Await]
      FieldDefinitionList  [?Yield, ?Await], FieldDefinition [?Yield, ?Await]

---*/


class Base {}
class C extends Base {
  0 = 0;

  constructor() {
    super();
    assert.sameValue(this["0"], 0);
      verifyEnumerable(this, "0");
      verifyWritable(this, "0");
      verifyConfigurable(this, "0");
  }
}

const c = new C();
