import { Ng2ServicesPage } from './app.po';

describe('ng2-services App', () => {
  let page: Ng2ServicesPage;

  beforeEach(() => {
    page = new Ng2ServicesPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
