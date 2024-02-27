import styles from './ShowListItem.module.css';
import { createElement } from '@/shared/lib/dom/createElement';
import { Icon } from '@/shared/ui-components/Icon/Icon';
import { IShow } from '@/shared/types/types';
import imagePlaceholderMedium from '@/shared/assets/images/istockphoto-medium.jpg';
import searchIcon from '@/shared/assets/icons/search-icon-gray.svg';
import historyIcon from '@/shared/assets/icons/history-icon.svg';
import { ShowListItemInfo } from '..';

type ShowListItemProps = {
  type: 'search' | 'history';
  show: IShow;
  onClick?: () => void;
};

export const ShowListItem = ({ type, show, onClick }: ShowListItemProps) => {
  let icon = '';

  switch (type) {
    case 'search':
      icon = searchIcon;
      break;
    case 'history':
      icon = historyIcon;
      break;
  }

  return createElement(
    'li',
    {
      className: styles.showListItem,
      onClick: (e: MouseEvent) => {
        e.stopPropagation();
        onClick?.();
      },
    },

    icon &&
      Icon({
        url: icon,
        alt: `${type} icon`,
      }),

    createElement('img', {
      className: styles.showListItemImg,
      src: show.image?.medium || imagePlaceholderMedium,
      alt: show.name,
    }),

    ShowListItemInfo({
      rating: show.rating.average,
      showName: show.name,
      showCountry: show.network?.country.name,
      showYear: show.premiered,
    })
  );
};
