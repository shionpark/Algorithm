function toSeconds(time) {
  const [minute, seconds] = time.split(":").map(Number);
  return minute * 60 + seconds;
}

function output(time) {
  let minute = parseInt(time / 60);
  let seconds = time % 60;
  minute = String(minute).padStart(2, 0);
  seconds = String(seconds).padStart(2, 0);
  return `${minute}:${seconds}`;
}

function next(time, video_len) {
  time += 10;
  if (time > video_len) return video_len;
  else return time;
}
function prev(time) {
  time -= 10;
  if (time < 0) return 0;
  else return time;
}
function opening(time, op_start, op_end) {
  if (time >= op_start && time <= op_end) return op_end;
  else return time;
}

function solution(video_len, pos, op_start, op_end, commands) {
  video_len = toSeconds(video_len);
  pos = toSeconds(pos);
  op_start = toSeconds(op_start);
  op_end = toSeconds(op_end);

  for (let command of commands) {
    // 오프닝 건너뛰기
    pos = opening(pos, op_start, op_end);
    // 10초 후로 이동
    if (command === "next") {
      pos = next(pos, video_len);
    } else {
      // 10초 전으로 이동
      pos = prev(pos);
    }
    pos = opening(pos, op_start, op_end);
  }
  return output(pos);
}