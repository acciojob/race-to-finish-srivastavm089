window.promises = [];

const promises = Array.from({ length: 5 }, () => {
  const randomTime = Math.floor(Math.random() * 5) + 1;
  return new Promise((resolve) => setTimeout(resolve, randomTime * 1000, randomTime));
});

Promise.any(promises)
  .then((result) => {
    const outputDiv = document.getElementById('output');
    outputDiv.innerText = `The first promise to resolve with ${result} seconds`;
  })
  .catch((error) => {
    console.log(error);
  });
