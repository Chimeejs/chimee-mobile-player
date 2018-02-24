import {isArray} from 'chimee-helper';

export function uiIsAvailable (defaultDisableUA, ua) {
  return defaultDisableUA.every(item => {
    return item !== ua.browser.name;
  });
}

export function reduceArray (arr1, arr2) {
  if(!isArray(arr2)) return arr1;
  const result = [];
  arr1.map((item, index) => {
    if(arr2.indexOf(item) === -1) result.push(item);
  });
  return result;
}
