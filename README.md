# Test.github.io
JS Coad Explanation

1. The code starts by getting references to various HTML elements using `document.getElementById()`. These elements are identified by their respective IDs: `hours`, `minutes`, `set-alarm-btn`, `stop-alarm-btn`, `alarm-sound`, and `alarm-message`. These elements are assumed to exist in the HTML markup.

2. The `formatNumber(num)` function is defined. This function takes a number (`num`) as input and returns a formatted string with a leading zero if the number is less than 10. For example, `formatNumber(9)` will return `'09'`.

3. The `playAlarmSound(message)` function is defined. This function plays an alarm sound, sets the `innerText` property of the `alarm-message` element with the provided message, and enables the `stopAlarmBtn`. It uses the `play()` method of the `alarmSound` element to play the sound.

4. The `stopAlarmSound()` function is defined. This function stops the alarm sound, sets the `currentTime` property of the `alarmSound` element to 0 to reset the playback position, clears the `innerText` property of the `alarm-message` element, and disables the `stopAlarmBtn`.

5. An event listener is added to the "Set Alarm" button (`setAlarmBtn`). When the button is clicked, the code inside the callback function is executed. 

6. Inside the callback function for the "Set Alarm" button, the selected hours and minutes are obtained from the `hoursInput` and `minutesInput` elements, respectively. They are parsed as integers using `parseInt()`.

7. The input values are validated using an `if` statement. If any of the conditions are true (e.g., hours or minutes are not valid numbers, or they are outside the acceptable range), an alert is shown and the function returns, preventing further execution.

8. The current time (`now`) and the alarm time (`alarmTime`) are calculated using the `Date` object. The `alarmTime` is set to the current date with the specified hours and minutes. Both `now` and `alarmTime` are represented in milliseconds.

9. The time remaining until the alarm time (`timeRemaining`) is calculated by subtracting the current time (`now.getTime()`) from the alarm time (`alarmTime`).

10. The alarm time is validated using an `if` statement. If the `timeRemaining` is less than or equal to 0, it means the selected time is in the past or the current time is already equal to the alarm time. In this case, an alert is shown, and the function returns.

11. A `setTimeout()` function is used to set a timer. It calls an anonymous function after the `timeRemaining` milliseconds have passed. Inside this function, the `playAlarmSound()` function is called, passing a custom message as an argument. The custom message includes the formatted hours and minutes.

12. An alert is displayed to confirm that the alarm is set.

13. An event listener is added to the "Stop Alarm" button (`stopAlarmBtn`). When the button is clicked, the `stopAlarmSound()` function is called.

14. An event listener is added to the `alarmSound` element, listening for the "ended" event. When the sound finishes playing, the `stopAlarmSound()` function is called.
