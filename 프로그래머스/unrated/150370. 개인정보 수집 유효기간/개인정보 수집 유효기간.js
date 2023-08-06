function solution(today, terms, privacies) {
    const answer = [];
	const [todayYear, todayMonth, todayDay] = today.split(".").map(Number); 
        
    const termsMap = {};
    terms.forEach(item => {
        const [data, termsMonth] = item.split(" ");
        termsMap[data] = Number(termsMonth);
    })
        
    privacies.forEach((item, idx) => { 
        const [date, value] = item.split(" ");
        const [year, month, day] = date.split(".").map(Number);
        		
        let endMonth = month + termsMap[value]; 
        let endYear = year;
        		
        if (endMonth > 12) {
          endYear += Math.floor((endMonth -1) / 12); 
          endMonth = ((endMonth -1) % 12) + 1; 
        }

        const todayTotalDays = todayYear * 12 * 28 + todayMonth * 28 + todayDay;
        const endTotalDays = endYear * 12 * 28 + endMonth * 28 + day;
        
        if (endTotalDays <= todayTotalDays) {
            answer.push(idx + 1); 
        }
    });
    
    return answer;
}