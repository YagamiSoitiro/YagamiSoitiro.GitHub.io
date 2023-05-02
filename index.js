var inter = 0;
async onload = () => {
  setInterval(() => {
    document.querySelector('div').innerHTML = inter += 1;
  },1);
}
