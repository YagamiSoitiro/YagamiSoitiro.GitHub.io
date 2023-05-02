var inter = 0;
async onload = () => {
  alert('a');
  setInterval(() => {
    document.querySelector('div').innerHTML = inter += 1;
  },1);
}
