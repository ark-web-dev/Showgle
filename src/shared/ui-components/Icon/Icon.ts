import { createElement } from '../../lib/dom/createElement';
import styles from './Icon.module.css';

type IconProps = {
  className?: string;
  url?: string;
  alt?: string;
  svg?: string;
  width?: number;
  height?: number;
  clickable?: boolean;
  onClick?: () => void;
};

export const Icon = ({
  className,
  url,
  alt,
  svg,
  width = 20,
  height = 20,
  clickable,
  onClick,
}: IconProps) => {
  let element;

  if (clickable) {
    element = createElement('button', {
      type: 'button',
      className: [styles.btn, className].join(' '),
      onClick,
    });
  } else {
    element = createElement('i', {
      className: [styles.icon, className].join(' '),
    });
  }

  element.style.width = width + 'px';
  element.style.height = height + 'px';

  if (url) {
    element.append(createElement('img', { alt, src: url, width, height }));
  } else if (svg) {
    element.insertAdjacentHTML('afterbegin', svg);
  }

  return element;
};
