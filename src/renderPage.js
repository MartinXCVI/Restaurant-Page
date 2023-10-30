import makeUpMyPage from './restaurant'
import createHeaderWithNav from './headerAndNav';
import createFooter from './footer';

function initialRender() {
  createHeaderWithNav();
  makeUpMyPage();
  createFooter();
}

export default initialRender;