var minimumAbsDifference = function (arr) {
  arr.sort((a, b) => a - b);
  let resultArr = [];
  let count = Infinity;
  let j = 1;
  for (let i = 0; i < arr.length; i++) {
    if (count >= arr[j] - arr[i]) {
      resultArr.push([arr[i], arr[j]]);
      count = arr[j] - arr[i];
    }

    j++;
  }

  return resultArr;
};

console.log(minimumAbsDifference([4, 2, 1, 3])); //[[1,2],[2,3],[3,4]]
console.log(minimumAbsDifference([1, 3, 6, 10, 15])); // [[1,3]]
console.log(minimumAbsDifference([3, 8, -10, 23, 19, -4, -14, 27])); //[[-14,-10],[19,23],[23,27]]
