import styles from './Container.module.css';
import { createElement } from '@/shared/lib/dom/createElement';

export const Container = () => {
  return createElement('div', { className: styles.container });
};
