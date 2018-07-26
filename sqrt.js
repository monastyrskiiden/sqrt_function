function sqrtNum(number) {
  if (!isNumeric(number)) {
    return 'Введите число';
  }
  if (number == 1) {
    return 1;
  }
  if (number < 0) {
    return 'Квадратный корень не может быть меньше 1';
  }
  if (number == 0) {
    return 0;
  }

  var result = number + 1,
    sqrt = 1,
    unWhile = 0;

  while (result > number) {
    sqrt = (sqrt + number / sqrt) / 2;

    result = sqrt * sqrt;
    if (result == unWhile) {
      break;
    }
    unWhile = result;
  }
  return sqrt;

  function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }
}
