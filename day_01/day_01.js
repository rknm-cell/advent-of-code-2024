import * as input from "./numbers";

const inputArr = input.input.split(/\n/);
console.log(typeof input);
const leftInput = [];
const rightInput = [];

for (const nums of inputArr) {
  const tempArr = nums.split("   ");
  leftInput.push(tempArr[0]);
  rightInput.push(tempArr[1]);
}
leftInput.splice(0, 1);
leftInput.splice(-1, 1);
rightInput.splice(0, 1);
rightInput.splice(-1, 1);

function Merge(leftArr, rightArr) {
  const mergedArr = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      mergedArr.push(leftArr[leftIndex]);
      leftIndex++;
    } else if (leftArr[leftIndex] > rightArr[rightIndex]) {
      mergedArr.push(rightArr[rightIndex]);
      rightIndex++;
    } else {
      mergedArr.push(leftArr[leftIndex]);
      leftIndex++;
    }
  }
  while (leftIndex < leftArr.length) {
    mergedArr.push(leftArr[leftIndex]);
    leftIndex++;
  }
  while (rightIndex < rightArr.length) {
    mergedArr.push(rightArr[rightIndex]);
    rightIndex++;
  }
  return mergedArr;
}

function MergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  const sortedLeft = MergeSort(left);
  const sortedRight = MergeSort(right);

  return Merge(sortedLeft, sortedRight);
}

export const sortedInputLeft = MergeSort(leftInput);
export const sortedInputRight = MergeSort(rightInput);
console.log(sortedInputLeft);
console.log(sortedInputRight);
let number = 0;

for (let i = 0; i < sortedInputLeft.length; i++) {
  let tempNum = 0;
  const tempLeft = Number(sortedInputLeft[i]);
  const tempRight = Number(sortedInputRight[i]);
  if (tempLeft < tempRight) {
    tempNum = tempRight - tempLeft;
    number += tempNum;
  } else if (tempLeft > tempRight) {
    tempNum = tempLeft - tempRight;
    number += tempNum;
  } else {
    number += tempNum;
  }
}
console.log("total number: ", number);
