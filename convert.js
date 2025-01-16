const mmInput = document.getElementById('mm-input');
const feetInput = document.getElementById('feet-input');

function mmToFeet(mm) {
  return mm / 304.8;
}

function feetToMm(feet) {
  return feet * 304.8;
}

mmInput.addEventListener('input', () => {
  const mm = parseFloat(mmInput.value);
  if (!isNaN(mm)) {
    feetInput.value = mmToFeet(mm).toFixed(2);
  } else {
    feetInput.value = '';
  }
});

feetInput.addEventListener('input', () => {
  const feet = parseFloat(feetInput.value);
  if (!isNaN(feet)) {
    mmInput.value = feetToMm(feet).toFixed(2);
  } else {
    mmInput.value = '';
  }
});

