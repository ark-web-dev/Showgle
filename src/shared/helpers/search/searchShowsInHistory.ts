import { ShowListItem } from '@/components/show';
import { clearElementsContent, getLocalStorage } from '@/shared/lib';
import { IShow } from '@/shared/types/types';
import { updateSingleShow } from '..';

export const searchShowsInHistory = (value: string) => {
  const searchHistoryOutput = document.getElementById(
    'search-history-output'
  ) as HTMLElement | null;

  if (!value) {
    clearElementsContent(searchHistoryOutput);
    return;
  }

  const showsHistory = getLocalStorage<IShow[]>('showsHistory');
  const foundShows: [number, IShow][] = [];

  showsHistory?.forEach((show: IShow) => {
    const firstOccurrence = show.name
      .toLowerCase()
      .indexOf(value.toLowerCase());

    if (firstOccurrence !== -1) {
      foundShows.push([firstOccurrence, show]);
    }
  });

  if (foundShows.length) {
    clearElementsContent(searchHistoryOutput);

    foundShows.sort((a, b) => a[0] - b[0]);

    for (let i = 0; i < foundShows.length && i < 5; i++) {
      const show = foundShows[i][1];

      searchHistoryOutput?.append(
        ShowListItem({
          type: 'history',
          show,
          onClick: () => {
            updateSingleShow(show);
          },
        })
      );
    }

    return true;
  }
};
