export const hideSearchDropdown = () => {
  const searchDropdown = document.getElementById(
    'search-dropdown'
  ) as HTMLElement | null;
  const searchInput = document.getElementById(
    'search-input'
  ) as HTMLInputElement | null;

  searchInput?.classList.remove('active');
  searchDropdown?.classList.remove('visible');
};
