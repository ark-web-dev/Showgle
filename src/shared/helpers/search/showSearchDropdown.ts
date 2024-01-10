export const showSearchDropdown = () => {
  const searchDropdown = document.getElementById(
    'search-dropdown'
  ) as HTMLElement | null;
  const searchInput = document.getElementById(
    'search-input'
  ) as HTMLInputElement | null;

  searchInput?.classList.add('active');
  searchDropdown?.classList.add('visible');
};
