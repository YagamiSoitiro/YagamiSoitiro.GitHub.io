var inter = 0;
async function start() {
  alert('a');
  setInterval(() => {
    document.querySelector('div').innerHTML = inter += 1;
  },1);
}
onload = () => {
  start();
}
