import type { Page } from '../../types/router';

function render(): HTMLElement {
  const main = document.createElement('main');

  const heading = document.createElement('h1');
  heading.textContent = 'Page not found';

  const link = document.createElement('a');
  link.href = '/';
  link.textContent = 'Back to home';
  link.dataset.link = '';

  main.append(heading, link);
  return main;
}

export const notFoundPage: Page = {
  title: 'Page not found | MiniGames',
  render,
};
