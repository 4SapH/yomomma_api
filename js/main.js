// Basic:
//
// fetch(url)
// .then(function(data) {
//
// })
// .catch(function (error) {
//
// });

const $trigger = document.getElementById('trigger');
const $modal = document.getElementsByClassName('modal');
const $jokeText = document.getElementById('joke-text');

const url = 'http://api.yomomma.info';

let delay = 0;

function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

function handleJoke(data) {
  let joke = data.joke;
  // h1.innerHTML = `"${data.joke.charAt(0)}`;
  // h2.innerHTML = data.joke.slice(1);
  // append($modal[0], h1);
  // append($modal[0], h2);
  $jokeText.style.opacity = 0;
  setTimeout(() => {
    $jokeText.innerHTML = `"${joke}"`;
    $jokeText.style.opacity = 1;
    delay = 500;
  }, delay);
}

function getJoke() {
  fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {
    handleJoke(data);
  })
  .catch(function(error) {
    console.log(`Error:${error}`);
  });
}

$trigger.innerHTML = $trigger.innerHTML.toUpperCase();

getJoke();

$trigger.addEventListener('click', () => {getJoke()});
