function solution(files) {
    function splitFile(file) {
        const match = file.match(/^([a-zA-Z\s.-]+)(\d{1,5})(.*)$/);
        if (match) {
            return {
                head: match[1],
                number: match[2],
                tail: match[3]
            };
        }
        return { head: file, number: '0', tail: '' };
    }

    function sortFiles(files) {
        const splitFiles = files.map(file => splitFile(file));
        splitFiles.sort((a, b) => {
            const headA = a.head.toLowerCase();
            const headB = b.head.toLowerCase();
            if (headA < headB) return -1;
            if (headA > headB) return 1;

            const numberA = parseInt(a.number, 10);
            const numberB = parseInt(b.number, 10);
            if (numberA < numberB) return -1;
            if (numberA > numberB) return 1;

            return 0;
        });
        return splitFiles.map(file => file.head + file.number + file.tail);
    }
    
    return sortFiles(files)
}