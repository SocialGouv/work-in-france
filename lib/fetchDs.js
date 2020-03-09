import memoize from "memoizee";

const memoFetch = memoize(url =>
  fetch(url, {})
    .then(r => r.json())
    .then(json => {
      if (!json.success) {
        throw new Error(`fetch error ${url}`);
      }
      return json.result;
    }),
);

export default memoFetch;
