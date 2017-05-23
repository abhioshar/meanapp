import { AngularSrcPage } from './app.po';
import { element, by, browser } from 'protractor';

describe('angular-src App', function() {
  let page: AngularSrcPage;

  beforeEach(() => {
    page = new AngularSrcPage();
  });

  it('should display message saying MEAN App', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('MEAN App');
  });
});

describe('login page', function() {
  let page: AngularSrcPage;

  beforeEach(() => {
    page = new AngularSrcPage();
  });

  it('should display header saying Login', () => {
    browser.get('/login');
    let header = element(by.tagName('h2')).getText();
    expect(header).toEqual('Login');
  });
});

describe('register page', function() {
  let page: AngularSrcPage;

  beforeEach(() => {
    page = new AngularSrcPage();
  });

  it('should display header saying Register', () => {
    browser.get('/register');
    let header = element(by.tagName('h2')).getText();
    expect(header).toEqual('Register');
  });
});

describe('dashboard page', function() {
  let page: AngularSrcPage;

  beforeEach(() => {
    page = new AngularSrcPage();
  });

  it('should redirect dashboard to login saying Login', () => {
    browser.get('/dashboard');
    let header = element(by.tagName('h2')).getText();
    expect(header).toEqual('Login');
  });
});

describe('profile page', function() {
  let page: AngularSrcPage;

  beforeEach(() => {
    page = new AngularSrcPage();
  });

  it('should redirect profile to login saying Login', () => {
    browser.get('/profile');
    let header = element(by.tagName('h2')).getText();
    expect(header).toEqual('Login');
  });
});
