// Node modules
import * as v from "valibot";

const schema = v.object({
  owner: v.string("Fill your name"),
  type: v.pipe(v.string("Choose a payment method")),
  number: v.string("Fill your credit card number"),
  expiration: v.string("Fill the expiration date"),
  email: v.string("Fill you Paypal account"),
});

export default schema;
