# Pavel Vasinsky
## Contacts
* e-mail: vpa05@mail.ru
* telegram: @PavelVasinsky

## About me:
I live in Russia in a small town of Primorsky Krai. I have a higher education and I want to become a web developer.

## Skills:
Basic knowledge:
- HTML
- CSS
- JavaScript
- Git

## Sample code:
````
const apiUrl = "https://api.chucknorris.io/jokes/random";
const jokeEl = document.getElementById("joke");

async function getJoke() {
    const joke = await fetch(apiUrl).then(response => response.json()).then(data => data.value);
    console.log(joke);
    jokeEl.textContent = joke;
}

getJoke() 
````
## Work experience:
I have no experience in web development, so I want to get it in a RSSchool.

## Education
- Higher education: Vladivostok State University Of Economics And Service
- freeCodeCamp

## English level
At the moment my level is A2 and I continue to improve it.