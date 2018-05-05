let util = {
  changeSecondToMinute,
  formatTime
}

function fillZero(num) {
  return num < 10 ? "0" + num : num
}

function changeSecondToMinute(second) {
  let mm = Math.floor(second / 60)
  let ss = second % 60
  return fillZero(mm) + ":" + fillZero(ss)
}

function formatTime(time) {
  return time.split(" ")[0]
}
export default util
