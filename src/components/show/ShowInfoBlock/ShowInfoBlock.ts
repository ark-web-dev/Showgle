import { createElement } from '@/shared/lib/dom/createElement';
import styles from './ShowInfoBlock.module.css';
import { IShow } from '@/shared/types/types';
import { ShowContentHead, ShowInfoTable, ShowDescriptionBlock } from '..';

type ShowInfoBlockProps = {
  show: IShow;
};

export const ShowInfoBlock = ({ show }: ShowInfoBlockProps) => {
  return createElement(
    'div',
    {
      className: styles.showContent,
    },

    ShowContentHead({ name: show.name, rating: show.rating.average }),

    ShowInfoTable({ show }),

    show.officialSite &&
      createElement(
        'a',
        {
          className: styles.showSiteBtn,
          href: show.officialSite,
          target: '_blank',
        },
        'Official Site'
      ),

    ShowDescriptionBlock({ description: show.summary })
  );
};
