// wait for document to load before event listener starts
document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.getElementById('submitButton');
    const userInput = document.getElementById('userInput');
    const resultParagraph = document.getElementById('result');

    // event listener waiting for button click
    submitButton.addEventListener('click', function () {
        const userText = userInput.value.trim(); // Get and trim user input

        // checks if userText is not empty
        if (userText !== '') {
            fetch('http://20.252.65.202:80/process', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ text: userText })
            })
            .then(response => response.json())
            .then(data => {
                // Handle the response from the server
                const processedText = data.result;
                resultParagraph.textContent = processedText;
                userInput.value = ''; // Clear the input field after submission
            })
            .catch(error => {
                console.error('Error:', error);
            });
        }
    });
});

