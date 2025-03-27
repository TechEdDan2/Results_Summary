const sum_nums = document.getElementsByClassName('bold_num');
// spread operator to convert HTMLCollection to Array
[...sum_nums].forEach(element => {
  console.log(element.innerHTML);  
});

// The data.json file contains an array of objects

// Fetch the JSON file
fetch('data.json')
  .then(response => response.json()) // Parse the JSON data
  .then(data => {
    // Iterate through the array and log the score values
    data.forEach(item => {
      console.log(item.score); // Access the score property
    });
  })
  .catch(error => console.error('Error fetching JSON:', error));