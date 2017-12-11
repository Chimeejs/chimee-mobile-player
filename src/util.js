export function uiIsAvailable (defaultDisableUA, ua) {
  return defaultDisableUA.every(item => {
    return item !== ua.browser.name;
  });
}
