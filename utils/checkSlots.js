import arrayContainsArray from './arrayContainsArray';

function checkSlots(slots) {
  function checkColumns() {
    if (
      arrayContainsArray(slots, [0, 3, 6]) ||
      arrayContainsArray(slots, [1, 4, 7]) ||
      arrayContainsArray(slots, [2, 5, 8])
    ) {
      return true;
    }

    return false;
  }

  function checkLines() {
    if (
      arrayContainsArray(slots, [0, 1, 2]) ||
      arrayContainsArray(slots, [3, 4, 5]) ||
      arrayContainsArray(slots, [6, 7, 8])
    ) {
      return true;
    }

    return false;
  }

  function checkDiagonals() {
    if (
      arrayContainsArray(slots, [0, 4, 8]) ||
      arrayContainsArray(slots, [2, 4, 6])
    ) {
      return true;
    }

    return false;
  }

  if (checkColumns() || checkLines() || checkDiagonals()) {
    return true;
  }

  return false;
}

export default checkSlots;
