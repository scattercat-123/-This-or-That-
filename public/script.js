let votes = { option1: 0, option2: 0 };

function vote(option) {
  votes[option]++;
  updateResults();
}

function updateResults() {
  const totalVotes = votes.option1 + votes.option2;
  const option1Percentage = totalVotes > 0 ? (votes.option1 / totalVotes) * 100 : 50;
  const option2Percentage = totalVotes > 0 ? (votes.option2 / totalVotes) * 90 : 50;

  document.getElementById('bar1').style.width = `${option1Percentage}%`;
  document.getElementById('bar2').style.width = `${option2Percentage}%`;

  document.getElementById('bar1').innerText = `${Math.round(option1Percentage)}%`;
  document.getElementById('bar2').innerText = `${Math.round(option2Percentage)}%`;
}

    // openai functions
    async function fetchRandomWords() {
      try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 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', // Use your actual OpenAI API key here
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
              { role: "system", content: "You are a helpful assistant." },
              { role: "user", content: "Give me only 2 unique nouns, no explanations, no extra words. Provide two separate nouns separated by a comma." }
            ]
          })
        });

        if (!response.ok) {
          throw new Error(`API request failed with status: ${response.status}`);
        }

        const data = await response.json();

        if (data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content) {
          const words = data.choices[0].message.content.trim().split(',');

          if (words.length >= 2) {
            document.getElementById('option1-text').textContent = words[0];
            document.getElementById('option2-text').textContent = words[1];
            searchPexelsImages(words[0], words[1]);
          }
        } else {
          console.error("No valid words returned from API");
        }
      } catch (error) {
        console.error('Error fetching random words:', error);
      }
    }

    // pexels functions
    function searchPexelsImages(noun1, noun2) {
      //noun 1
      fetch(`https://api.pexels.com/v1/search?query=${encodeURIComponent(noun1)}&per_page=1`, {
        method: 'GET',
        headers: {
          'Authorization': 'Rj8tpmFQQJqjdAmslTs1dcaj8q0xxz1lYDsya0J6hNAvO8ooCpABJ2rH',
        },
      })
        .then(response => response.json())
        .then(data => {
          console.log('Pexels response for noun 1:', data);
          if (data.photos && data.photos.length > 0) {
            document.getElementById('option1-image').src = data.photos[0].src.original;
          } else {
            console.error('No images found for noun 1');
          }
        })
        .catch(error => console.error('Error fetching Pexels image for noun 1:', error));

      // noun 2
      fetch(`https://api.pexels.com/v1/search?query=${encodeURIComponent(noun2)}&per_page=1`, {
        method: 'GET',
        headers: {
          'Authorization': 'Rj8tpmFQQJqjdAmslTs1dcaj8q0xxz1lYDsya0J6hNAvO8ooCpABJ2rH',
        },
      })
        .then(response => response.json())
        .then(data => {
          console.log('Pexels response for noun 2:', data);
          if (data.photos && data.photos.length > 0) {
            document.getElementById('option2-image').src = data.photos[0].src.original;
          } else {
            console.error('No images found for noun 2');
          }
        })
        .catch(error => console.error('Error fetching Pexels image for noun 2:', error));
    }

    // call fetchRandomWords when the page loads
    window.onload = fetchRandomWords;
