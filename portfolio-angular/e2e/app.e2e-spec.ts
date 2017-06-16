import { PortfolioAngularPage } from './app.po';

describe('portfolio-angular App', () => {
  let page: PortfolioAngularPage;

  beforeEach(() => {
    page = new PortfolioAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
