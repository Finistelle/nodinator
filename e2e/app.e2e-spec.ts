import { NodinatorPage } from './app.po';

describe('nodinator App', function() {
  let page: NodinatorPage;

  beforeEach(() => {
    page = new NodinatorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
