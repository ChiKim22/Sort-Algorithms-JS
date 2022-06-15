function selectionSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        //최솟값
        let min = i;
        console.log(`Sorting... : ${arr} , minValue: ${min}`);
        for(let j = i + 1; j < arr.length; j++) {
            // 최솟값 보다 크고 작은지를 비교
            if(arr[j] < arr[min]) {
                // 값 치환
                [arr[j], arr[min]] = [arr[min], arr[j]]
            }
        }
    };
    return arr;
};

let value = [6, 1, 7, 8, 9, 3, 5, 4, 2];
// let value = [1, 2, 3, 4, 5];
console.log(`Original : ${value}`)
console.log(`Selection Sorted : ${selectionSort(value)}`);