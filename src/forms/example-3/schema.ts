// Node modules
import * as v from "valibot";

const schema = v.object({
  owner: v.string("Fill your name"),
  type: v.pipe(v.string("Choose a payment method")),
});

export default schema;
