/**
 * Helper functions for finding the path of currently executing script
 * @source http://stackoverflow.com/a/27369985/1378261
 */

function getCurrentScript () {
  if (document.currentScript) {
    return document.currentScript.src;
  } else {
    const scripts = document.getElementsByTagName('script');
    return scripts[scripts.length - 1].src;
  }
}

export default function getCurrentScriptPath () {
  const script = getCurrentScript();
  const path = script.substring(0, script.lastIndexOf('/'));
  return path;
}
