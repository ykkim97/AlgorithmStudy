function solution(s1, s2) {
    var answer = 0;
    
    s1.forEach((left) => {
        if (s2.includes(left)) {
            answer++;
        }
    })
    
    return answer;
}