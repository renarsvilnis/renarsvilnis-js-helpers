/**
 * Fix for normalizing font weight renderning in windows chrome and osx safari
 * @reference http://davidlesches.com/blog/making-browsers-play-nice-with-thin-fonts
 */
export default function normaliseFontRendering () {
  const isChrome = navigator.userAgent.indexOf('Chrome') > -1;
  // const isExplorer = navigator.userAgent.indexOf('MSIE') > -1;
  // const isFirefox = navigator.userAgent.indexOf('Firefox') > -1;
  let isSafari = navigator.userAgent.indexOf('Safari') > -1;
  // const isOpera = navigator.userAgent.indexOf('Presto') > -1;
  // const isMac = navigator.userAgent.indexOf('Mac OS') !== -1;

  // TODO: write check for windows
  // const isWindows = !isMac;
  const isWindows = false;

  if (isChrome && isSafari) {
    isSafari = false;
  }

  if (isSafari || isWindows) {
    document.body.style.webkitTextStroke = '0.5px';
  }
}
