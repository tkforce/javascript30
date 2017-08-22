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





