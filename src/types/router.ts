export type PageRenderer = () => HTMLElement;

export interface Page {
  title: string;
  render: PageRenderer;
}

export interface Route extends Page {
  path: string;
}
