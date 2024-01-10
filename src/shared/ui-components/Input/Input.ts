import { InputFocusEvent, InputInputEvent } from '../../types/types';
import { createElement } from '../../lib/dom/createElement';

type InputProps = {
  id?: string;
  className?: string;
  onInput?: Function;
  onFocus?: Function;
  [key: string]: string | Function | undefined;
};

export const Input = ({
  id,
  className,
  onInput,
  onFocus,
  ...rest
}: InputProps) => {
  return createElement('input', {
    id,
    className,
    type: 'text',
    onInput: (e: InputInputEvent) => {
      onInput?.(e.target.value);
    },
    onFocus: (e: InputFocusEvent) => {
      onFocus?.(e.target.value);
    },
    ...rest,
  });
};
