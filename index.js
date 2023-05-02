var of = true;
onload = () => {
  safari.alarms.create("onof", { "periodInMinutes": 0.0017 });
  setInterval(() => {
    of = true;
  }, 0.1);
  safari.alarms.onAlarm.addListener(function (alarm) {
    document.querySelector('div').innerHTML = '<div>' + of + '</div>';
    if(of == true) of = false
  });
}
