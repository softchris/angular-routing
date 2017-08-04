import { Chapter7Page } from './app.po';

describe('chapter7 App', () => {
  let page: Chapter7Page;

  beforeEach(() => {
    page = new Chapter7Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
