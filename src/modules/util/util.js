let util = {
  changeSecondToMinute,
  formatTime,
  curTab
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

//切换tab时，给当前tab添加class
function curTab(ele) {
  ele.classList.add("active")
  nextEle(ele)
  preEle(ele)
}

function nextEle(ele) {
  while (ele.nextElementSibling) {
    ele.nextElementSibling.classList.remove("active")
    ele = ele.nextElementSibling
  }
}

function preEle(ele) {
  while (ele.previousElementSibling) {
    ele.previousElementSibling.classList.remove("active")
    ele = ele.previousElementSibling
  }
}
export default util
