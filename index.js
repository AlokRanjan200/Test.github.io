// Get the necessary HTML elements
const hoursInput = document.getElementById('hours');
const minutesInput = document.getElementById('minutes');
const setAlarmBtn = document.getElementById('set-alarm-btn');
const stopAlarmBtn = document.getElementById('stop-alarm-btn');
const alarmSound = document.getElementById('alarm-sound');
const alarmMessage = document.getElementById('alarm-message');

// Function to format numbers with leading zeros
function formatNumber(num) {
  return (num < 10) ? '0' + num : num;
}

// Function to play the alarm sound and display the alarm message
function playAlarmSound(message) {
  alarmSound.play();
  alarmMessage.innerText = message;
  stopAlarmBtn.disabled = false;
}

// Function to stop the alarm sound and clear the alarm message
function stopAlarmSound() {
  alarmSound.pause();
  alarmSound.currentTime = 0;
  alarmMessage.innerText = '';
  stopAlarmBtn.disabled = true;
}

// Add event listener to the "Set Alarm" button
setAlarmBtn.addEventListener('click', function() {
  // Get the selected hours and minutes
  const hours = parseInt(hoursInput.value);
  const minutes = parseInt(minutesInput.value);

  // Validate the input
  if (isNaN(hours) || isNaN(minutes) || hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
    alert('Please enter valid hours and minutes.');
    return;
  }

  // Get the current time and the alarm time in milliseconds
  const now = new Date();
  const alarmTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes).getTime();

  // Get the time remaining until the alarm time
  const timeRemaining = alarmTime - now.getTime();

  // Validate the alarm time
  if (timeRemaining <= 0) {
    alert('Please select a future time.');
    return;
  }

  // Set the alarm with a custom message
  setTimeout(function() {
    playAlarmSound(`Alarm set for ${formatNumber(hours)}:${formatNumber(minutes)}.`);
  }, timeRemaining);

  // Display a confirmation message
  alert(`Alarm set for ${formatNumber(hours)}:${formatNumber(minutes)}.`);
});

// Add event listener to the "Stop Alarm" button
stopAlarmBtn.addEventListener('click', stopAlarmSound);

// Add event listener to the alarm sound
alarmSound.addEventListener('ended', stopAlarmSound);
