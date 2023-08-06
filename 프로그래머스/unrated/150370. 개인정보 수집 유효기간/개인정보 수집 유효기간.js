function solution(today, terms, privacies) {
	// 1. today 연/월/일 분해하고 숫자로
	const [todayYear, todayMonth, todayDay] = today.split(".").map(Number);
    
    const answer = [];
    
    // 2. terms = ["Z 3", "D 5"] 객체로 만들자
    const termsMap = {};
    terms.forEach(item => {
        const [data, termsMonth] = item.split(" ");
        termsMap[data] = Number(termsMonth);
    })
    
    console.log(termsMap) // termsMap = { Z: 3, D: 5 }
    
    // 3. privacies 배열에 termsMap의 key가 있다. (value)
    privacies.forEach((item, idx) => {
        const [date, value] = item.split(" ");
        const [year, month, day] = date.split(".").map(Number); // 개인정보 수집 날짜에
        
		// 개인정보 수집 기간 + 약관 기간 = 보관 가능 기한
        let newMonth = month + termsMap[value]; 
        let newYear = year;
        
		// 12개월 넘으면 1년 추가
        if (newMonth > 12) {
          newYear += Math.floor(newMonth / 12); // 월을 12로 나눈 몫만큼 연도에 추가
          newMonth = newMonth % 12 + 1; // 월을 12로 나눈 나머지만 남김
        }

        console.log(`보관 가능 기한은 ${idx} : ${newYear}.${newMonth}.${day}`);
        
        // 오늘 날짜와 비교한다. 보관가능일자 지난 경우 -> 파기
        if ((newYear > todayYear) || (newYear === todayYear && newMonth > todayMonth) || (newYear === todayYear && newMonth === todayMonth && day > todayDay)) {
            answer.push(idx);
        }
    });
    
    return answer;
}