  # Javascript30

This is a vanilla javascript coding challenge from [JavaScript30](https://javascript30.com/) created by [Wes Bos](https://github.com/wesbos).

[My Demo Site](https://tkforce.github.io/javascript30/)

#Day1
  - HTML: data attribute, audio
  - CSS: calc, flex, vertical/horizontal alignemnt, box-sizing, justify-content
    - JS: document.querySelector


#Day2
  - CSS: transform-origin, transition-timing-function


#Day3
  - HTML: dataset is an object that contain all the attributes with "data-" prefix on that element
  - CSS: 
  set css variable on the root pseudo-class    
  ```css
  :root {
      --base: #ffc600;
      --spacing: 10px;
      --blur: 10px;
  }
  ```
  use var() to obtain the value
  ```css
  img {
      width: 60%;
      padding: var(--spacing);
      background: var(--base);
      filter: blur(var(--blur));
    }
  ```
  alter the value of the css variable by setting style properties
  ```javascript
  document.documentElement.style.setProperty("--base", "#ffffff");
  ```
  - JS: querySelectorAll return a node list instead of an array

#Day4
  - Array.prototype.sort
    Syntax
    ```javascript 
    arr.sort([compareFunction])
    ```
    - If compareFunction is not supplied, elements are sorted by converting them to strings and comparing strings in Unicode code point order
    - If compareFunction(a, b) returns < 0, sort a to an index lower than b, i.e. a comes first.
    - If compareFunction(a, b) returns 0, leave a and b unchanged with respect to each other
    - If compareFunction(a, b) returns > 0, sort b to a lower index than a.

    Example
    ```javascript
    function compare(a, b) {
      if (a is less than b by some ordering criterion) {
        return -1;
      }
      if (a is greater than b by the ordering criterion) {
        return 1;
      }
      // a must be equal to b
      return 0;
    }
    ```
    
    
  - Array.prototype.map 
  - Array.prototype.filter 
  - Array.prototype.reduce




