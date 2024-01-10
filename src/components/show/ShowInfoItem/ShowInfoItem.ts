import { createElement } from '@/shared/lib/dom/createElement';
import styles from './ShowInfoItem.module.css';

type ShowInfoItemProps = {
  key: string;
  value: HTMLElement | string | number;
};

export const ShowInfoItem = ({ key, value }: ShowInfoItemProps) => {
  if (!value || (typeof value === 'object' && value?.textContent === ''))
    return;

  return createElement(
    'li',
    { className: styles.showInfoItem },

    createElement('span', { className: styles.key }, key, ': '),
    createElement('span', { className: styles.value }, value)
  );
};
