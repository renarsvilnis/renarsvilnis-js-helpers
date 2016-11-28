import MobileDetect from 'mobile-detect';

const md = new MobileDetect(window.navigator.userAgent);
const isTablet = !!md.tablet();

export default isTablet;
