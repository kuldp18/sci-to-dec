const scientificToDecimalBtn = document.getElementById(
  'scientificToDecimalBtn'
);
const decimalToScientificBtn = document.getElementById(
  'decimalToScientificBtn'
);
const scientificInput = document.getElementById('scientificInput');
const decimalInput = document.getElementById('decimalInput');
const decimalOutput = document.getElementById('decimalOutput');
const scientificOutput = document.getElementById('scientificOutput');
const darkModeToggleBtn = document.getElementById('darkModeToggleBtn');

// Add event listeners
scientificToDecimalBtn.addEventListener('click', convertScientificToDecimal);
decimalToScientificBtn.addEventListener('click', convertDecimalToScientific);
darkModeToggleBtn.addEventListener('click', toggleDarkMode);

function convertScientificToDecimal() {
  const scientificNotation = scientificInput.value;
  const decimalNumber = parseFloat(scientificNotation);
  decimalOutput.textContent = decimalNumber.toString();
}

function convertDecimalToScientific() {
  const decimalNumber = parseFloat(decimalInput.value);
  scientificOutput.textContent = decimalNumber.toExponential();
}

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');

  // Update button icon color
  const darkModeToggleBtn = document.getElementById('darkModeToggleBtn');
  const isDarkMode = body.classList.contains('dark-mode');
  if (isDarkMode) {
    darkModeToggleBtn.classList.add('text-yellow-300');
  } else {
    darkModeToggleBtn.classList.remove('text-yellow-300');
  }
}
