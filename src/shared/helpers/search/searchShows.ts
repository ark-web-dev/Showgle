import { ShowListItem } from '@/components/show';
import { searchShowByTitle } from '@/shared/API/searchShowByTitle';
import { clearElementsContent } from '@/shared/lib';
import { ShowData } from '@/shared/types/types';
import {
  searchShowsInHistory,
  hideSearchDropdown,
  showSearchDropdown,
  showSearchMessage,
  updateSingleShow,
  addShowToHistory,
} from '..';

export const searchShows = async (value: string) => {
  const searchOutput = document.getElementById(
    'search-output'
  ) as HTMLElement | null;

  if (!searchOutput) {
    throw new Error('Error: Required element not found on page');
  }

  const isHasHistory = searchShowsInHistory(value);

  if (!value) {
    hideSearchDropdown();
    clearElementsContent(searchOutput);
    return;
  }

  showSearchDropdown();
  showSearchMessage(searchOutput, 'Serching Shows ...');

  let showsData: ShowData[];

  try {
    showsData = await searchShowByTitle(value);
  } catch (error) {
    showSearchMessage(
      searchOutput,
      'Something went wrong with the search. Please try again later.'
    );
    return;
  }

  if (!showsData.length && !isHasHistory) {
    showSearchMessage(
      searchOutput,
      'Nothing found! Please try another request.'
    );
    return;
  }

  clearElementsContent(searchOutput);

  showsData?.forEach(({ show }: ShowData) => {
    searchOutput?.append(
      ShowListItem({
        type: 'search',
        show,
        onClick: () => {
          updateSingleShow(show);
          addShowToHistory(show);
        },
      })
    );
  });
};
