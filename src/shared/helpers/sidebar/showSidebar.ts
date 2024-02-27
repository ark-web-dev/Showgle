export const showSidebar = () => {
  document.getElementById('history-sidebar')?.classList.add('visible');
  document.getElementById('main-content')?.classList.add('withHistory');
  document.getElementById('history-btn')?.classList.add('visible');
};
