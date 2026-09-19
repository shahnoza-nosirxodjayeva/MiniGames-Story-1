import type { Page, Route } from '../types/router';

const ROOT_PATH = '/';
const PRIMARY_MOUSE_BUTTON = 0;

function normalizePath(path: string): string {
  if (path.length > ROOT_PATH.length && path.endsWith(ROOT_PATH)) {
    return path.slice(0, -1);
  }
  return path;
}

export class Router {
  private readonly outlet: HTMLElement;
  private readonly routes: Route[];
  private readonly notFound: Page;

  constructor(outlet: HTMLElement, routes: Route[], notFound: Page) {
    this.outlet = outlet;
    this.routes = routes;
    this.notFound = notFound;
  }

  public start(): void {
    window.addEventListener('popstate', () => {
      this.render();
    });
    document.addEventListener('click', (event) => {
      this.handleLinkClick(event);
    });
    this.render();
  }

  public navigate(path: string): void {
    if (normalizePath(path) === normalizePath(window.location.pathname)) {
      return;
    }
    window.history.pushState(null, '', path);
    this.render();
  }

  private handleLinkClick(event: MouseEvent): void {
    const isModified = event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
    if (event.defaultPrevented || event.button !== PRIMARY_MOUSE_BUTTON || isModified) {
      return;
    }

    if (!(event.target instanceof Element)) {
      return;
    }

    const link = event.target.closest<HTMLAnchorElement>('a[data-link]');
    if (!link) {
      return;
    }

    const url = new URL(link.href);
    if (url.origin !== window.location.origin) {
      return;
    }

    event.preventDefault();
    this.navigate(url.pathname);
  }

  private render(): void {
    const currentPath = normalizePath(window.location.pathname);
    const page = this.routes.find((route) => route.path === currentPath) ?? this.notFound;

    document.title = page.title;
    this.outlet.replaceChildren(page.render());
    window.scrollTo(0, 0);
  }
}
