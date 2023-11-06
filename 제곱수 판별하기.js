function solution(n) {
    var answer = 0;
    
    return Math.sqrt(n) % 1 === 0 ? 1 : 2;
    //제곱근을 1로 나눈 나머지가 0이면? 제곱수이다.
}