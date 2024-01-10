import { createElement } from '@/shared/lib/dom/createElement';
import styles from './ShowDetailed.module.css';
import { IShow } from '@/shared/types/types';
import { ShowImageBlock, ShowInfoBlock } from '..';

type ShowDetailedProps = {
  show: IShow;
};

export const ShowDetailed = ({ show }: ShowDetailedProps) => {
  if (!show) return '';

  return createElement(
    'article',
    { className: styles.showDetailed },

    ShowImageBlock({ imageUrl: show.image?.original, altText: show.name }),
    ShowInfoBlock({ show })
  );
};
