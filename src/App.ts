import { Container } from './components/layout/Container/Container';
import { MainContent } from './components/layout/MainContent/MainContent';
import { Sidebar } from './components/layout/Sidebar/Sidebar';
import { createElement } from './shared/lib/dom/createElement';

export const App = () => {
  return createElement(Container, {}, MainContent, Sidebar);
};
