import getCurrentScript from './getCurrentScript';

/**
 * Helper functions for finding the path of currently executing script
 * @source http://stackoverflow.com/a/27369985/1378261
 */
export default function getCurrentScriptPath () {
  const scriptPath = getCurrentScript();

  return scriptPath.substring(0, scriptPath.lastIndexOf('/'));
}
