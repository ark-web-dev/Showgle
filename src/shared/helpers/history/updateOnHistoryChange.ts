import { ShowListItem } from '@/components/show';
import { updateSingleShow } from '..';
import { IShow } from '@/shared/types/types';

export const updateOnHistoryChange = () => {
  window.addEventListener('storage', ({ key, oldValue, newValue }) => {
    if (key === 'showsHistory' && oldValue !== newValue && newValue?.length) {
      const sidebarHistoryOutput = document.getElementById(
        'sidebar-history-output'
      ) as HTMLElement | null;
      let show: IShow;

      try {
        show = JSON.parse(newValue)[0];
      } catch (error) {
        console.log(`Parsing Error ${error}`);
        return;
      }

      if (!show) return;

      sidebarHistoryOutput?.prepend(
        ShowListItem({
          type: 'history',
          show,
          onClick: () => updateSingleShow(show),
        })
      );
    }
  });
};
