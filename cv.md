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
function indexEqualsValue(arr) {
  let left = 0;
  let rigth = arr.length - 1;
  let mid;

  let result = -1;

  while (left <= rigth) {

    mid = Math.round((rigth - left) / 2) + left;

    if (arr[mid] === mid) {
      result = arr[mid];
      rigth = mid - 1;
    } else if (arr[mid] > mid) {
      rigth = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  
  return result;
}
````
## Work experience:
I have no experience in web development, so I want to get it in a RSSchool.

## Education
- Higher education: Vladivostok State University Of Economics And Service
- freeCodeCamp

## English level
At the moment my level is A2 and I continue to improve it.