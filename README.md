  # Javascript30

This is a vanilla javascript coding challenge from [JavaScript30](https://javascript30.com/) created by [Wes Bos](https://github.com/wesbos).

[My Demo Site](https://tkforce.github.io/javascript30/)

### Day1
  - HTML: data attribute, audio
  - CSS: calc, flex, vertical/horizontal alignemnt, box-sizing, justify-content
    - JS: document.querySelector


### Day2
  - CSS: transform-origin, transition-timing-function


### Day3
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

### Day4
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
    //compare non-number
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
    
    // compare number
    function compareNumbers(a, b) {
      //ascending order
      return a - b;
    }
    ```
    
    
  - Array.prototype.map 
  - Array.prototype.filter 
  - Array.prototype.reduce

### Day5
  - CSS: Flexbox usage, transition, transform,
  - JS: use element.classList.toggle('className')to add/remove class on the element.


### Day6
  - CSS: use element.inlineHTML to replace dom.
  - JS: regExp() usage, spread expression usage, 'keyup' eventlistener
  

### Day7
  - Array.prototype.some 
  - Array.prototype.every 
  - Array.prototype.find
  - Array.prototype.findIndex
  - Array.prototype.slice: copy a new array
  - Array.prototype.splice: manipulate the original array

### Day8
  - html canvas usage

### Day14 Object and Array copy
  - Array shallow copy:  
    - Array.slice()
    ```javascript
      const team2 = players.slice();
    ```
    - Array.concat()
    ```javascript
      const team2 = [].concat(players);
    ```   
    - Spread opearator (ES6)
    ```javascript
      const team2 = [...players];
    ```
    - Array.from (ES6)
    ```javascript
      const team5 = Array.from(players);
     ```
  - Object shallow copy:
    - Object.assign()
    ```javascript
      const cap2 = Object.assign({}, person, { number: 99, age: 12 });
    ```
  - Object deep copy:
    - JSON.parse(), JSON.stringify()
    ```javascript
      const dev2 = JSON.parse(JSON.stringify(wes));
    ```
    
### Day15 Local Storage and Event delegation
  - localstorage usage
  ```javascript
    localStorage.setItem("item", JSON.stringify(items));
    JSON.parse(localStorage.getItem('item')
  ```
  - Event Delegation: listen to parent dom and react using e.target to distinguish which child is triggered  
  ```javascript
      function toggleDone(e){
        //skip this unless its a input 
        if(!e.target.matches('input')) return;
        // do something
      }  
      itemsList.addEventListener('click', toggleDone);
  ```

### Day16 Event Delegation
```javascript 
    function shadow(){   
      if(this !== e.target){
        //'this' will always be hero, but 'e.target' will change depends on which element(child) is being hoverd
      }
    }
    hero.addEventListener('mousemove', shadow);
```


