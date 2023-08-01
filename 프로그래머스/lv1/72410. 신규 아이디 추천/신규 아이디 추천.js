function solution(new_id) {
    let id = new_id.toLowerCase().replace(/[^\w\d-_.]/g, ""); // 1단계, 2단계
    id = id.replace(/\.{2,}/g, ".").replace(/^\./, "").replace(/\.$/, ""); // 3단계, 4단계
    if (id === "") { // 5단계
        id = "a"
    }
    if (id.length >= 16) { // 6단계
        id = id.slice(0, 15);
        if (id[id.length - 1] === ".") {
            id = id.slice(0, id.length - 1);
        }
    }
    if (id.length <= 2) { // 7단계
        for (let i = id.length; i < 3; i++) {
           id += id[id.length - 1]; 
        }    
    }
    return id;
}