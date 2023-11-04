function enumeration (aintervalStart,aintervalEnd) {
let i = setInterval(() => {
  console.log(aintervalStart++);
if (aintervalStart > aintervalEnd) clearInterval(i);
  }, 1000)
}
enumeration(8, 18);
