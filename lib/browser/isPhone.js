import MobileDetect from 'mobile-detect';

const md = new MobileDetect(window.navigator.userAgent);
const isPhone = !!md.phone();

export default isPhone;
