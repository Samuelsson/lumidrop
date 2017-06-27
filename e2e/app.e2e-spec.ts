import { LumidropPage } from './app.po';

describe('lumidrop App', () => {
  let page: LumidropPage;

  beforeEach(() => {
    page = new LumidropPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
