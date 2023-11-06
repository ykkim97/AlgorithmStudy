function solution(sides) {
    var answer = 0;
    
    let arr = sides.sort((a,b) => a-b);
    let maxNum = Math.max(...sides)
    arr.pop();
    
    if (arr[0] + arr[1] > maxNum) {
        return 1
    } else {
        return 2
    }
    
}