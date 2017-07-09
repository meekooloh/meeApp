import { MeeAppPage } from './app.po';

describe('mee-app App', () => {
  let page: MeeAppPage;

  beforeEach(() => {
    page = new MeeAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
