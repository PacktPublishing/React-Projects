function arrayContainsArray(superset, subset) {
  if (0 === subset.length || superset.length < subset.length) {
    return false;
  }
  for (var i = 0; i < subset.length; i++) {
    if (superset.indexOf(subset[i]) === -1) return false;
  }
  return true;
}

export default arrayContainsArray;
