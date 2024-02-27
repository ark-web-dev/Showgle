import { createElement } from '@/shared/lib/dom/createElement';
import styles from './ShowDescriptionBlock.module.css';

type ShowDescriptionBlockProps = {
  description: string;
};

export const ShowDescriptionBlock = ({
  description,
}: ShowDescriptionBlockProps) => {
  if (!description) return;

  const descriptionBlock = createElement('div', {
    className: styles.description,
  });

  descriptionBlock.insertAdjacentHTML('beforeend', description);

  return descriptionBlock;
};
