import type { Page } from '../../types/router';

function render(): HTMLElement {
  const main = document.createElement('main');
  const heading = document.createElement('h1');
  heading.textContent = 'MiniGames';
  main.append(heading);
  return main;
}

export const homePage: Page = {
  title: 'MiniGames',
  render,
};
