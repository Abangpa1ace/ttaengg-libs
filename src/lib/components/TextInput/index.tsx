import { ChangeEvent, forwardRef, InputHTMLAttributes } from "react";
import { input } from './TextInput.css';

export interface TextInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
  value?: string | number | undefined | null;
  onChangeInput?: (value: string) => void;
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(({ value, onChangeInput, ...props }, ref) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeInput?.(e.target.value);
  };

  return (
    <input className={input} {...props} value={value || ''} onChange={handleChange} ref={ref} />
  )
});

export default TextInput;