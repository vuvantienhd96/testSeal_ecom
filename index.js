

// Cho một dãy số [1, 25, 7, -7, -3, 12, -22, 0]

// 1.	Sử dụng JavaScript để sắp xếp dãy số theo thứ tự tăng dần.
// 	Kết quả: [-22, -7, -3, 0, 1, 7, 12, 25]

let newArr = [1, 25, 7, -7, -3, 12, -22, 0];

function SortArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = arr.length - 1; j > i; j--) {
      if (arr[j] < arr[j - 1]) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      }
    }
  }
}

SortArr(newArr);
console.log(newArr);

// 3.	Sắp xếp tất cả các số dương trước, tất cả các số âm sau, hiển thị theo chiều tăng dần
// 	Kết quả: [0, 1, 7, 12, 25, -22, -7, -3 ]

let newArrPart3 = [1, 25, 7, -7, -3, 12, -22, 0];

function SortArrIndex(arr) {
  let positiveArr = [];
  let negativeArr = [];
  let concatArr = [];

  arr.map(x => {
    if (x >= 0) {
      positiveArr.push(x);
      SortArr(positiveArr);
    } else {
      negativeArr.push(x);
      SortArr(negativeArr);
    }
  });
  // console.log(positiveArr, negativeArr);
  return (concatArr = [...positiveArr, ...negativeArr]);
}

 SortArrIndex(newArrPart3)
console.log(SortArrIndex(newArrPart3));

// 2.	Sắp xếp dãy số tăng dần theo giá trị tuyệt đối (trong trường hợp số 2 số bằng nhau thì số âm được ưu tiên đứng trước)
// 	Kết quả: [0, 1, -3, -7, 7, 12, -22, 25]
let newArrPart2 = [1, 25, 7, -7, -3, 12, -22, 0];



function absSortArray(arr) {

  for (let i = 0; i < arr.length; i++) {

    for (let j = arr.length - 1; j > i; j--) {

      let a = arr[j] < 0 ? arr[j] * -1 : arr[j];
      let b = arr[j - 1] < 0 ? arr[j - 1] * -1 : arr[j - 1];
      if (a < b) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;

      }

    }

  }
  return arr;
  // SortArr(concatArr);

  // console.log(concatArr);
}

absSortArray(newArrPart2);
console.log('ádasd', newArrPart2);


// Việt chương trình đệ quy tính tổng các số từ 1 với n, với n là một số cho trước.
// 	n=0 -> 0
// 	n=1 -> 1
// 	n=3 -> 6
// n=10 -> 55


function sumWithN3(n) {
  if (n > 1)
    n = n + sumWithN3(n - 1)
  else if (n < 0) return;
  return n;
}

console.log(sumWithN3(4));
