function bubbleSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        console.log(`Sorting... : ${arr}`);
        for(let j = 0; j < arr.length -i -1; j++) {
            // 두 값을 비교
            if(arr[j + 1] < arr[j]) {
                // 값 치환
                [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
            }
        }
    };
    return arr;
};

// let value = [1, 5, 9, 3, 2, 4, 8, 6, 7];
let value = [5, 4, 3, 2, 1];
console.log(`Original : ${value}`)
console.log(`Bubble Sorted : ${bubbleSort(value)}`);