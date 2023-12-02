async function fetchData() {
      const apiUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
      const wordInput = document.getElementById('wordInput');
      const word = wordInput.value.trim();

      if (!word) {
        alert('Please enter a word.');
        return;
      }

      try {
        const response = await fetch(`${apiUrl}${word}`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        // Assuming the API response has a specific structure
        const wordDefinition = data[0]?.meanings[0]?.definitions[0]?.definition;

        if (wordDefinition) {
          document.getElementById('result').innerText = `Definition of ${word}: ${wordDefinition}`;
        } else {
          document.getElementById('result').innerText = `No definition found for ${word}.`;
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        document.getElementById('result').innerText = 'Error fetching data. Please try again later.';
      }
    }
    