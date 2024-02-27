import { hideSearchDropdown } from '@/shared/helpers';
import { hideOnDocumentClick, createElement } from '@/shared/lib';
import styles from './SearchDropdown.module.css';

export const SearchDropdown = () => {
  hideOnDocumentClick('search-section', hideSearchDropdown);

  return createElement(
    'div',
    { className: styles.searchDropdownWrapper, id: 'search-dropdown' },

    createElement(
      'div',
      {
        className: styles.searchDropdownInner,
      },

      createElement('ul', {
        className: [styles.searchHistoryOutput, styles.searchList].join(' '),
        id: 'search-history-output',
      }),

      createElement('ul', {
        className: [styles.searchOutput, styles.searchList].join(' '),
        id: 'search-output',
      })
    )
  );
};
