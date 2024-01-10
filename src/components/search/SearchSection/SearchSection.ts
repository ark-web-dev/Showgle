import { Input } from '@/shared/ui-components/Input/Input';
import styles from './SearchSection.module.css';
import { searchShows, showSearchDropdown } from '@/shared/helpers';
import { createElement, debounce } from '@/shared/lib';
import { SearchDropdown } from '..';

export const SearchSection = () => {
  return createElement(
    'section',
    { className: styles.searchSection, id: 'search-section' },

    Input({
      onInput: debounce(searchShows, 600),
      onFocus: (value: string) => {
        if (!value) return;
        showSearchDropdown();
      },
      id: 'search-input',
      className: styles.searchInput,
      placeholder: 'Search Shows',
      title: 'Search any TV Shows. For example: Friends, Game of Thrones, ...',
    }),
    SearchDropdown
  );
};
