function solution(array, height) {
    let count = 0;    

    array.forEach((num) => {
        if (num > height) {
            count++;
        }
    })
    
    return count;
}