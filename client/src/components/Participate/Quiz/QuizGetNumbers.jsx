export function getRandomNumbers(count, max) {
  var numbers = [];

  // 1부터 max까지의 숫자를 배열에 담음
  for (var i = 1; i <= max; i++) {
    numbers.push(i);
  }

  var result = [];

  // count 개수만큼 중복되지 않는 랜덤한 숫자를 뽑음
  for (var j = 0; j < count; j++) {
    var randomIndex = Math.floor(Math.random() * numbers.length);
    var randomNumber = numbers.splice(randomIndex, 1)[0];
    result.push(randomNumber);
  }

  return result;
}
