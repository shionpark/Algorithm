function solution(skill, skill_trees) {
    let count = 0;
    
    skill_trees.map(skill_tree => {
        let idx = 0;
        
        for (let i = 0; i < skill_tree.length; i++) {
            let one_skill = skill_tree[i];
            if (skill.includes(one_skill)) {
                if (skill[idx] === one_skill) {
                    idx++
                } else return false
            } 
        }
        
        count++
    })
    
    return count
}