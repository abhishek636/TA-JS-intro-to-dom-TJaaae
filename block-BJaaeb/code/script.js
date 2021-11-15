/*

Write a function named `createInputElm` that accepts two parameter (label and `type`) type
default value to be "text" and return the input element inside label. (create it using `createElement`)

*/

let createInputElm = function (labelpara, type = "text") {
  let label = document.createElement("label");
  let input = document.createElement("input");
  input.type = type;
  label.innerText = labelpara;
  label.append(input);
  return label;
};

// TEST
createInputElm('Your name'); //<label>Your name: <input type="text"></label>
createInputElm('Your age', 'number'); //<label>Your age: <input type="number"></label>

// 2. Do the same thing as above using string literal like `<h1>Hello</h1>`

let createInputElm1 = function (labelpara, type = "text") {
  let html = `<label>${labelpara}: <input type="${type}"> </label>`;
  return html;
};

// TEST
createInputElm('Your name'); //<label>Your name: <input type="text"></label>
createInputElm('Your age', 'number'); //<label>Your age: <input type="number"></label>

// 3. Create a function named `createList` that accept and array of data like ['Mango', 'Apple', 'Banana'] and returns
// the html for the link like <ul> <li>Mango</li>  <li>Apple</li>  <li>Banana</li> </ul>

let createList = function (array = []) {
  let list = document.createElement("ul");
  for (let i = 0; i < array.length; i++) {
    let li = document.createElement("li");
    li.innerText = array[i];
    list.append(li);
  }
  return list;
};

// OR

function createLists(array = []) {
  let html = `<ul>
  ${array.map((elem) => `<li>${elem}</li>`).join("")}
  </ul>`;
  return html;
}

// TEST
createList(['ALABAMA', 'ALASKA', 'HAWAII', 'KENTUCKY']);
createList(['Afghanistan', 'Antarctica', 'Congo', 'Estonia']);

// 4. Create a function named `createTodoList` that accept and array of data like [{name: "Learn DOM", isDone: false}, {name: "Learn JS", isDone: true}] and returns
// the html for single todo will look like given below
/* 
<ul>
  <li>
    <p>Learn DOM</p>
    <input type="checkbox" checked name="" id="">
    <span>X</span>
  </li>
</ul>
*/

function createTodoList(array = []) {
  let html = `<ul>
  ${array
    .map(
      (elem) => `<li><p>${elem.name}<p>
  <input type="checkbox"  ${
    elem.isDone ? "checked" : ""
  } name ="" id = ""><span>X</span></li>`
    )
    .join("")}
  </ul>`;
  return html;
}


// TEST
createTodoList([
  { name: 'Learn DOM', isDone: false },
  { name: 'Learn JS', isDone: true },
]);
createTodoList([
  { name: 'Learn DOM', isDone: false },
  { name: 'Learn React', isDone: true },
  { name: 'Learn JS', isDone: true },
]);
