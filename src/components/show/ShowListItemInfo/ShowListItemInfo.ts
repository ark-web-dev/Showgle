import { createElement } from '@/shared/lib/dom/createElement';
import { getShowRatingColor } from '@/shared/helpers/show/getShowRatingColor';
import styles from './ShowListItemInfo.module.css';

type ShowListItemInfoProps = {
  showName: string;
  showYear: string;
  showCountry: string;
  rating: number;
};

export const ShowListItemInfo = ({
  showName,
  showYear,
  showCountry,
  rating,
}: ShowListItemInfoProps) => {
  let ratingColor = getShowRatingColor(rating);

  return createElement(
    'div',
    { className: styles.infoWrapper },

    createElement('h4', { className: styles.name }, showName),
    createElement(
      'div',
      { className: styles.info },

      createElement(
        'span',
        {
          className: [styles.infoItem, styles.rating, ratingColor].join(' '),
        },
        rating
      ),
      createElement('span', { className: styles.infoItem }, showCountry),
      createElement(
        'span',
        { className: styles.infoItem },
        showYear ? `${showYear.slice(0, 4)}` : ''
      )
    )
  );
};
