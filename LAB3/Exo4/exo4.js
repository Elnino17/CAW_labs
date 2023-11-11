
const fs = require('fs');
const textToSave = process.argv[2];
const fileName = process.argv[3] || 'f.txt';

if (!textToSave) {
  console.error('Please provide text to save.');
  process.exit(1);
}

fs.writeFile(fileName, textToSave, (err) => {
  if (err) {
    console.error(`Error writing to file: ${err.message}`);
    process.exit(1);
  }

  console.log('The file has been saved!');
});

// Add code to display the contents of the file
fs.readFile(fileName, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading file: ${err.message}`);
    process.exit(1);
  }

  console.log(`File contents:\n${data}`);
});
