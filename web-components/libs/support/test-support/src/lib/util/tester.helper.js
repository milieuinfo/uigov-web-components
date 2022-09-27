// Source: https://stackoverflow.com/questions/38241480/detect-macos-ios-windows-android-and-linux-os-with-js
export const getOS = async (driver) => {
  const windowUserAgent = await driver.executeScript('return navigator.userAgent');
  const windowPlatform = await driver.executeScript('return navigator.platform');
  const windowUserAgentData = await driver.executeScript('return navigator.userAgentData');

  const platform = windowUserAgentData?.platform ?? windowPlatform;
  let os = null;

  if (['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'].indexOf(platform) !== -1) {
    os = 'Mac OS';
  } else if (['iPhone', 'iPad', 'iPod'].indexOf(platform) !== -1) {
    os = 'iOS';
  } else if (['Win32', 'Win64', 'Windows', 'WinCE'].indexOf(platform) !== -1) {
    os = 'Windows';
  } else if (/Android/.test(windowUserAgent)) {
    os = 'Android';
  } else if (!os && /Linux/.test(platform)) {
    os = 'Linux';
  }

  return os || 'Windows';
};
