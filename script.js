document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var searchWord = document.getElementById('searchInput').value; // Get the word from the input field
    searchAPI(searchWord);
});

function searchAPI(word) {
    var url = 'https://api.api-ninjas.com/v1/dictionary?word=' + word;
    var apiKey = 'zvLdJkPoxZL9IPcdolxfOA==jCth4pLi2m11Jv2x'; 

    fetch(url, {
        headers: {
            'X-Api-Key': apiKey
        }
    })
    .then(response => response.json())
    .then(data => {
        displayResult(data);
    })
    .catch(error => console.error('Error:', error));
}

function displayResult(data) {
    var resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = ''; // Clear previous results

    if (data.error) {
        // If there is an error, display it
        resultContainer.textContent = 'Error: ' + data.error;
    } else {
        // If no error, display definition and example
        var definition = data.definition;
        var example = data.example;

        var definitionElement = document.createElement('p');
        definitionElement.textContent = 'Definition: ' + definition;
        resultContainer.appendChild(definitionElement);

        var exampleElement = document.createElement('p');
        exampleElement.textContent = 'Example: ' + example;
        resultContainer.appendChild(exampleElement);
    }
}
