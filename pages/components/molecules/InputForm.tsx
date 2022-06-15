import { InputFormProps } from "../../../type";
import { Button } from "../atoms/Button";

export const InputForm = (props: InputFormProps<HTMLInputElement>) => {
  const { onSubmit, CurrentRef, textContent } = props;
  return (
    <form onSubmit={onSubmit}>
      <input ref={CurrentRef} type="text" />
      <Button textContent={textContent} />
    </form>
  );
};
