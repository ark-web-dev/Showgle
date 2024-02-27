import { createElement, getLocalStorage } from '@/shared/lib';
import styles from './MainContent.module.css';
import { IShow } from '@/shared/types/types';
import { SearchSection } from '@/components/search';

export const MainContent = () => {
  const isHasHistory = getLocalStorage<IShow>('showsHistory');

  return createElement(
    'main',
    {
      className: [styles.mainContent, isHasHistory ? 'withHistory' : ''].join(
        ' '
      ),
      id: 'main-content',
    },

    createElement(
      'h2',
      { className: styles.mainTitle, id: 'main-title' },
      'Showgle'
    ),

    SearchSection,

    createElement('section', {
      className: styles.singelShow,
      id: 'single-show-output',
    })
  );
};
