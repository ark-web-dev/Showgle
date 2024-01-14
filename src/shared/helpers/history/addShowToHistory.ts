import { ShowListItem } from '@/components/show';
import { getLocalStorage, setLocalStorage } from '@/shared/lib';
import { IShow } from '@/shared/types/types';
import { showSidebar, updateSingleShow } from '..';

export const addShowToHistory = (show: IShow) => {
  const sidebarHistoryOutput = document.getElementById(
    'sidebar-history-output'
  ) as HTMLElement | null;

  const showsHistory = getLocalStorage<IShow[]>('showsHistory');

  if (!showsHistory) {
    setLocalStorage('showsHistory', [show]);
    showSidebar();
  } else if (!showsHistory.find((currShow: IShow) => currShow.id === show.id)) {
    if (showsHistory.length >= 100) {
      sidebarHistoryOutput?.lastChild?.remove();
      showsHistory.pop();
    }

    showsHistory.unshift(show);
    setLocalStorage('showsHistory', showsHistory);
  } else {
    return;
  }

  sidebarHistoryOutput?.prepend(
    ShowListItem({
      type: 'history',
      show,
      onClick: () => updateSingleShow(show),
    })
  );
};
