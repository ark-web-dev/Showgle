import { IShow } from '@/shared/types/types';
import { createElement } from '@/shared/lib/dom/createElement';
import styles from './ShowInfoTable.module.css';
import { ShowInfoItem } from '..';

type ShowInfoTableProps = {
  show: IShow;
};

export const ShowInfoTable = ({ show }: ShowInfoTableProps) => {
  const sheduleDays = show.schedule.days.join(', ');
  const sheduleTime = show.schedule.time ? ` at ${show.schedule.time}` : '';
  const sheduleRunTime = show.runtime ? ` (${show.runtime} min)` : '';
  const listItems = [];

  for (const key in show) {
    switch (key) {
      case 'language':
      case 'ended':
      case 'status':
      case 'premiered':
        if (show[key] !== undefined || show[key] !== null) {
          listItems.push(
            ShowInfoItem({
              key: key[0].toUpperCase() + key.slice(1),
              value: show[key],
            })
          );
        }
        break;
    }
  }

  return createElement(
    'ul',
    {
      className: styles.infoList,
    },

    ShowInfoItem({ key: 'Country', value: show.network?.country.name }),

    show.network?.officialSite &&
      ShowInfoItem({
        key: 'Network',
        value: createElement(
          'a',
          { href: show.network?.officialSite },
          show.network?.name
        ),
      }),

    ShowInfoItem({
      key: 'Schedule',
      value: sheduleDays + sheduleTime + sheduleRunTime,
    }),

    ShowInfoItem({
      key: 'Genres',
      value: show.genres.join(', '),
    }),

    ...listItems
  );
};
