import { sortedInputLeft as leftArr, sortedInputRight as rightArr} from "./day_01";

const rightObj = {}

for (let nums of rightArr){
    if (rightObj[nums]){
        rightObj[nums] += 1
    }
    else {
        rightObj[nums] = 1
    }
}
console.log(rightObj)
let score = 0
for (let i = 0; i < leftArr.length; i++){
    if (rightObj[leftArr[i]]){
        score += leftArr[i] * rightObj[leftArr[i]]
    }
}
console.log(score)