/* eslint-disable semi */
module.exports = function check (str, bracketsConfig) {
  const arr = str.split('');
  function deletePairs () {
    for (let i = 0; i < arr.length; i++) {
      bracketsConfig.forEach(bracket => {
        if (bracket[0] === arr[i] && bracket[1] === arr[i + 1]) {
          arr.splice(i, 2);
          if (arr.length > 0) {
            deletePairs();
          }
        }
      });
    }
    return arr;
  }
  deletePairs();
  if (arr.length > 0) {
    return false;
  } else {
    return true;
  }
}