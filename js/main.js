const icons = [
    {
      name: 'cat',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'crow',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dog',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dove',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dragon',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'horse',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'hippo',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'fish',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'carrot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'apple-alt',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'lemon',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'pepper-hot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'user-astronaut',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-graduate',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-ninja',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-secret',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
];

const colors = [
  "blue",
  "orange",
  "purple"
];
  


const itemContainer = document.getElementById('item_container');
const wrap = document.getElementById('wrap');
const coloredArray = colorIcons(icons, colors);

const types = getTypes(coloredArray);
const select = document.getElementById("type");
printOptions(types, select);


// ICONE FILTRATE --- TERZA PARTE

select.onchange = function(element) {

  const filtered = filterValues(icons, element.target.value);

  print(filtered, wrap);
};


//  / ICONE FILTRATE --- TERZA PARTE




// PRIMA PARTE
// stampa icone in html
const print = (array, container) => {
  container.innerHTML = '';

  array.forEach((element) => {
    const { name, family, prefix, color } = element
    wrap.innerHTML += `
    <div id="item_container">
        <i class="${family} ${prefix + name}" style="color: ${color}"></i>
            <p>
                ${name.toUpperCase()}
            </p>
    </div>
    `;
});
};

print(coloredArray, wrap)

// / stampa icone in html
// / PRIMA PARTE


// SECONDA PARTE
function colorIcons(array, colors) {
  const types = getTypes(array);
  // console.log(types);
  const coloredArray = array.map((element) => {
    const indexType = types.indexOf(element.type);
    console.log(indexType);
    element.color = colors[indexType];
    return element;
  })

  return coloredArray;
};

function getTypes(array) {
  const types = [];
  array.forEach((element) => {
    console.log(element.type)
    if (!types.includes(element.type))
    types.push(element.type)
  })
  return types
};
// / SECONDA PARTE


// TERZA PARTE

function printOptions(array, select) {
  array.forEach((element) => {
    select.innerHTML += `<option value="${element}">${element}</option>`
  })
};

function filterValues(array, type) {
  const filteredIcons = array.filter((element) => {
    if (element.type === type) {
      return true
    }

    return false;
  });

  if (type === "") {
    return array
  }

  return filteredIcons
};

// / TERZA PARTE