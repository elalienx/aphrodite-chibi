import Input from "../../components/input/Input";

export default {
  text: <Input type="text" placeholder="I'm an input" />,
  ["text with error"]: <Input type="text" placeholder="I'm an input" validationMessage="Your answer is incorrect" />,
  number: <Input type="number" placeholder="0" />,
  email: <Input type="email" placeholder="leif@lendo.se" />,
  telephone: <Input type="tel" placeholder="+46 729478013" />,
  password: <Input type="password" placeholder="Minimum 8 characters" />,
};
