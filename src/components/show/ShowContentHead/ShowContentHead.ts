import { getShowRatingColor } from '@/shared/helpers/show/getShowRatingColor';
import { createElement } from '@/shared/lib/dom/createElement';
import styles from './ShowContentHead.module.css';

type ShowContentHeadProps = {
  name: string;
  rating: number;
};

export const ShowContentHead = ({ name, rating }: ShowContentHeadProps) => {
  let ratingColor = getShowRatingColor(rating);

  return createElement(
    'div',
    { className: styles.head },

    createElement('h1', { className: styles.title }, name),

    rating &&
      createElement(
        'div',
        { className: styles.rating },
        'Rating: ',
        createElement(
          'span',
          { className: [styles.ratingNumber, ratingColor].join(' ') },
          rating
        )
      )
  );
};
