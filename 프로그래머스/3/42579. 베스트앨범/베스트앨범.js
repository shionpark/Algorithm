function solution(genres, plays) {
    // 각 장르별 노래 재생횟수 합산
    const genrePlayCount = genres.reduce((acc, genre, idx) => {
        if (!acc[genre]) {
            acc[genre] = { totalPlay: 0, songs: [] }
        }
        acc[genre].totalPlay += plays[idx]
        acc[genre].songs.push({ index:idx, play: plays[idx] })
        return acc;
    }, {})

    // 재생 횟수 많은 순으로 정렬
    const sortedGenres = Object.keys(genrePlayCount).sort((a, b) => genrePlayCount[b].totalPlay - genrePlayCount[a].totalPlay);
    
    // 각 장르 내에서 재생 횟수가 많은 노래 순으로 정렬, 최대 2개씩
    const result = []
    sortedGenres.forEach((genre) => {
        const sortedSongs = genrePlayCount[genre].songs.sort((a, b) => (b.play !== a.play) ? b.play - a.play : a.index - b.index);
        result.push(sortedSongs[0].index);
        if (sortedSongs.length > 1) result.push(sortedSongs[1].index)        
    })
    return result
}
