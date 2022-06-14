function insertionSort(arr) {
    for(let i = 0; i < arr.length; i ++) {
        //제일 좌측 값 정렬완료
        let sorted = i;
        for(let j = i + 1; j < arr.length; j ++) {
            // 좌측의 정렬 완료시킨 값과 비교
            if(arr[j] < arr[sorted]) {
                sorted = j;
            }
        }
        // 계산된 값 치환
        if(sorted !== i) {
            [arr[i], arr[sorted]] = [arr[sorted], arr[i]];
        }
    };
    return arr;
};


let value = [5, 3, 4, 7, 2, 8, 6, 9, 1];
console.log(`Original : ${value}`)
console.log(`Insertion Sorted : ${insertionSort(value)}`);