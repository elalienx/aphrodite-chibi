// Node modules
import * as v from "valibot";

const owner = v.pipe(
  v.string("Please enter your name."),
  v.nonEmpty("Please enter your name."),
  v.minLength(3, "Name is too short."),
);

// Payment method: Card
const number = v.pipe(
  v.string("Please enter your card number."),
  v.nonEmpty("Please enter your card number."),
  v.creditCard("The card number is badly formatted."),
);

const expiration = v.pipe(
  v.string("Please enter the expiration date."),
  v.nonEmpty("Please enter the expiration date."),
  v.regex(/^(?:0[1-9]|1[0-2])\/(?:2[5-9]|3[0-9])$/, "The expiration date is badly formatted."),
);

const card = v.object({
  type: v.literal("card"),
  card: v.object({ number, expiration }),
});

// Payment method: Paypal
const email = v.pipe(
  v.string("Please enter your PayPal email."),
  v.nonEmpty("Please enter your PayPal email."),
  v.email("The email address is badly formatted."),
);

const paypal = v.object({
  type: v.literal("paypal"),
  paypal: v.object({ email }),
});

export const schema = v.intersect([
  v.object({ owner }),
  v.variant("type", [card, paypal], "Please select the payment type."),
]);

export default schema;
