document.getElementById('myButton').addEventListener('click', function() {
    var secretThings = document.querySelector('.secret_things');
    var loadingMessage = document.getElementById('loadingMessage');
    var messages = ["Loading clue", "Loading clue.", "Loading clue..", "Loading clue..."];
    var messageIndex = 0;

    // Show loading message
    loadingMessage.classList.remove('hidden');
    loadingMessage.classList.add('visible');

    // Change loading message every 0.2 seconds
    var intervalId = setInterval(function() {
        loadingMessage.textContent = messages[messageIndex];
        messageIndex = (messageIndex + 1) % messages.length;
    }, 200);

    // Wait for 5 seconds (5000 milliseconds) before showing the clue
    setTimeout(function() {
        // Clear the interval
        clearInterval(intervalId);

        // Hide loading message
        loadingMessage.classList.remove('visible');
        loadingMessage.classList.add('hidden');

        // Show the hidden div by changing its class to 'visible'
        secretThings.classList.remove('hidden');
        secretThings.classList.add('visible');
    }, 9000); // 5000 milliseconds = 5 seconds
});