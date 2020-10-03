
exports.min = function min (arr) {
  if (!arr || !arr.length) {
    return 0;
  }
  return arr.reduce((acc, i) => {
    if (!acc) {
      acc = i;
    }

    if (i < acc) {
      acc = i
    }

    return acc;
  }, null);
}

exports.max = function max (arr) {
  if (!arr || !arr.length) {
    return 0;
  }
  return arr.reduce((acc, i) => {
    if (!acc) {
      acc = i;
    }

    if (i > acc) {
      acc = i
    }

    return acc;
  }, null);
}

exports.avg = function avg (arr) {
  if (!arr || !arr.length) {
    return 0;
  }
  const sum = arr.reduce((acc, i) => acc + i);
  return sum / arr.length;
}
