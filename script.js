document.addEventListener('keydown', logKey);

function increaseProgress(progressbar, increment) {
  console.log('increasing!', progressbar.value);
  progressbar.value = progressbar.value + increment;
}

function logKey(e) {

  var p = null;
  console.log(e);
  switch(e.key) {
      
    case"Shift":
        var p = document.getElementById('shift');
      break;
      
    case "Control":
        var p = document.getElementById('control');
      break;
  }
  
  if (p) {
    increaseProgress(p, 10);
  }
}

function hoverIncrease() {
  var h = document.getElementById('hover');
  increaseProgress(h, 10);
}

function clickIncrease() {
  var c = document.getElementById('click');
  increaseProgress(c, 10);
}

function changeIncrease() {
  var c = document.getElementById('change');
  increaseProgress(c, 10);
}
