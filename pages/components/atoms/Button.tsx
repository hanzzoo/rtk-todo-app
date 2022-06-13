import { ButtonProps } from "../../../type";

export const Button = (props: ButtonProps<HTMLInputElement>) => {
  const { textContent } = props;
  return <button>{textContent}</button>;
};
