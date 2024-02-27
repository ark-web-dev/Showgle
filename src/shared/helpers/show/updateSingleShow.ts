import { ShowDetailed } from '@/components/show';
import { clearElementsContent, setLocalStorage } from '@/shared/lib';
import { IShow } from '@/shared/types/types';
import { hideSearchDropdown, hideSidebar } from '..';

export const updateSingleShow = (show: IShow) => {
  const singleShowOutput = document.getElementById(
    'single-show-output'
  ) as HTMLElement | null;
  const mainContent = document.getElementById(
    'main-content'
  ) as HTMLElement | null;

  clearElementsContent(singleShowOutput);
  hideSearchDropdown();

  if (window.innerWidth < 920) hideSidebar();

  if (singleShowOutput?.classList.contains('visible')) {
    singleShowOutput?.classList.remove('visible');
    setTimeout(() => singleShowOutput?.classList.add('visible'), 600);
  } else {
    singleShowOutput?.classList.add('visible');
  }

  mainContent?.classList.add('withSingleShow');
  singleShowOutput?.append(ShowDetailed({ show }));
  setLocalStorage('currentShow', show);
};
