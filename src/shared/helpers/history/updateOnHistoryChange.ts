import { ShowListItem } from '@/components/show';
import { updateSingleShow } from '..';

export const updateOnHistoryChange = () => {
  window.addEventListener('storage', ({ key, oldValue, newValue }) => {
    if (key === 'showsHistory' && oldValue !== newValue && newValue?.length) {
      const sidebarHistoryOutput = document.getElementById(
        'sidebar-history-output'
      ) as HTMLElement | null;
      const show = JSON.parse(newValue)[0];

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
