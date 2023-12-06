process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    // console.log(data);
    // console.log(a);
    // console.log(b);
    const row = "*".repeat(a);
    const mid = row + "\n"
    const col = mid.repeat(b);
    console.log(col)
});