export default function getCurrentScript () {
  if (document.currentScript) {
    return document.currentScript.src;
  } else {
    // If browser hasnt support, script get url of last executed script tag.
    // When used for Webpack this function would be called at the start of the
    // entry file thus the last script tag in document references to current file,
    // as the files execute in a top-down manner synchronously
    const scripts = document.getElementsByTagName('script');
    return scripts[scripts.length - 1].src;
  }
}
