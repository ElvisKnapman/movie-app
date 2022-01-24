export function debounceSearch(fn, delay) {
  let timer;
  // take in searchString parameter to pass to callback
  return function (searchString) {
    // clear existing timeout
    clearTimeout(timer);
    //set and track new timeout
    timer = setTimeout(() => {
      fn(searchString);
    }, delay);
  };
}
