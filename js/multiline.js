const fruitList =
  "<ul>" +
    "<li>Kiwi</li>" +
    "<li>Lime</li>" +
    "<li>Pineapple</li>" +
  "</ul>";

// you can wrap everything in one set of backticks
const vegetableList = `
<ul>
  <li>Potato</li>
  <li>Onion</li>
  <li>Broccoli</li>
</ul>
`;

document.querySelector('.fruits').innerHTML = fruitList;
document.querySelector('.vegetables').innerHTML = vegetableList;
