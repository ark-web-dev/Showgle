import { IShow } from '@/shared/types/types';
import styles from './Sidebar.module.css';
import closeIcon from '@/shared/assets/icons/close-icon.svg';
import historyIcon from '@/shared/assets/icons/history-icon.svg';
import { ShowListItem } from '@/components/show';
import {
  hideSidebar,
  updateSingleShow,
  showSidebar,
  updateOnHistoryChange,
} from '@/shared/helpers';
import {
  hideOnDocumentClick,
  getLocalStorage,
  createElement,
} from '@/shared/lib';
import { Icon } from '@/shared/ui-components';

export const Sidebar = () => {
  updateOnHistoryChange();

  const windowWidth = window.innerWidth;

  if (windowWidth < 920) {
    hideOnDocumentClick('history-sidebar', hideSidebar);
  }

  const showsContainer = document.createDocumentFragment();
  const showsHistory = getLocalStorage<IShow[]>('showsHistory');

  showsHistory?.forEach((show: IShow) =>
    showsContainer.append(
      ShowListItem({
        type: 'history',
        show,
        onClick: () => updateSingleShow(show),
      })
    )
  );

  const isHasHistory = showsHistory && showsHistory.length;

  return createElement(
    'aside',
    {
      id: 'history-sidebar',
      className: [
        styles.sidebar,
        isHasHistory && windowWidth >= 920 ? 'visible' : '',
      ].join(' '),
    },

    createElement(
      'button',
      {
        id: 'history-btn',
        className: [styles.historyBtn, isHasHistory ? 'visible' : ''].join(' '),
        onClick: showSidebar,
      },
      Icon({
        url: historyIcon,
        alt: 'Hystory icon',
        width: 28,
        height: 28,
      })
    ),

    createElement(
      'div',
      { className: styles.sidebarHead },
      createElement('h2', { className: styles.title }, 'History'),
      Icon({
        url: closeIcon,
        alt: 'Close Button',
        clickable: true,
        width: 23,
        height: 23,
        onClick: hideSidebar,
        className: styles.closeIcon,
      })
    ),

    createElement(
      'ul',
      {
        className: styles.outputList,
        id: 'sidebar-history-output',
      },
      showsContainer
    )
  );
};
