import './style.css';
import { App } from './App.ts';

document.querySelector<HTMLDivElement>('#app')?.prepend(App());
