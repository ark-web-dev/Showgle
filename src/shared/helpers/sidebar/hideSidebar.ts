export const hideSidebar = () => {
  document.getElementById('history-sidebar')?.classList.remove('visible');
  document.getElementById('main-content')?.classList.remove('withHistory');
};
