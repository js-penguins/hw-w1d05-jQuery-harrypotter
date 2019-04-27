var hogwarts = {
  location: 'Scotland',
  houses: [
    {
      name: 'Griffindor',
      img: 'http://images1.wikia.nocookie.net/__cb20120922143611/harrypotter/images/7/70/G_final.jpg',
      values: [
        'courage',
        'bravery',
        'nerve',
        'chivalry'
      ],
      mascot: 'lion',
      colors: [
        'scarlet',
        'gold'
      ],
      founder: 'Godric Gryffindor',
      students: [
        'Harry Potter',
        'Hermione Granger',
        'Ron Weasley'
      ]
    },
    {
      name: 'Hufflepuff',
      img: 'http://images3.wikia.nocookie.net/__cb20111027164827/harrypotter/images/3/3f/H_final.jpg',
      values: [
        'hardwork',
        'patience',
        'justice',
        'loyalty'
      ],
      mascot: 'badger',
      colors: [
        'canary yellow',
        'black'
      ],
      founder: 'Helga Hufflepuff',
      students: [
        'Cedric Diggory',
        'Susan Bones',
        'Nymphadora Tonks'
      ]
    },
    {
      name: 'Ravenclaw',
      img: 'http://images2.wikia.nocookie.net/__cb20111021043857/harrypotter/images/d/da/R_final.jpg',
      values: [
        'intelligence',
        'creativity',
        'learning',
        'wit'
      ],
      mascot: 'eagle',
      colors: [
        'blue',
        'bronze'
      ],
      founder: 'Rowena Ravenclaw',
      students: [
        'Luna Lovegood',
        'Cho Chang',
        'Padma Patil'
      ]
    },
    {
      name: 'Slytherin',
      img: 'http://images3.wikia.nocookie.net/__cb20111027165214/harrypotter/images/d/da/S_final.jpg',
      values: [
        'ambition',
        'cunning',
        'leadership',
        'resourcefulness'
      ],
      mascot: 'serpent',
      colors: [
        'green',
        'silver'
      ],
      founder: 'Salazar Slytherin',
      students: [
        'Draco Malfoy',
        'Pansy Parkinson',
        'Tom Riddle'
      ]
    }
  ]
}

$(document).ready(function(){
  /* DO YOUR CODE HERE */

  // Guidance:  (Feel free to ignore this).

  /* Look at the image of the goal in the README!  What do you see?
    You can tell that we need to create identical sections for each house that
    that has the same information inside.

    One approach could be:
    1.  Access the array that belongs to the 'Houses' key of the object.
    2.  Create a function 'renderHouse' that renders a single house.
    3.  Call that function on each house in the array.

    This is going to be a big function.  It has to go through a lot of the 
    different values in the house object, loop through some of the arrays
    inside each house objects.  For example, loop through each houses 'students',
    'colors' and 'values' to render all the elements inside their arrays.

    Optional:  we are looping through arrays three times.  Is there a way
    to make this more DRY and more scalable by turning those loops into a 
    separate function?  You would then call this function on the 
    'students', 'colors' and 'values' arrays.

    For example, a function like createList(title, array).
  */
  var $main = $('main');
  
  // loop on the houses and render each
  hogwarts.houses.forEach(renderHouse); 

  function renderHouse(house){
    // setting up html elements in variables
    // <section> contains all the others inside
    // other elements include and <img>, <h2>, two <p>s
    var $houseSection = $('<section>'),
    $houseImg = $('<img>').attr('src', house.img),
    $houseName = $('<h2>').text(house.name),
    $founder = $('<p>').text('founder: ' + house.founder),
    $mascot = $('<p>').text('mascot: ' + house.mascot);

    // appending the created elements to the <section> in order
    $houseSection.append($houseImg, $houseName, $founder, $mascot);

    // getting all the keys of the house i.e. [ name, img, values,...]
    // going to use only the [values, colors, students]
    // all of them are in even positions of the array starting from 2
    var houseKeys = Object.keys(house);

    for(var i = 2; i <  houseKeys.length; i+=2) {
      // calling create list which givin a title and array appends them to the
      // last parameter which here is the $houseSection
      createList(capitalizeFirst(houseKeys[i]), house[houseKeys[i]], $houseSection)
    }
    
    // append the finished product to the <main> element
    $main.append($houseSection);
  }

  // takes a title, array, and section appends them to the
  // section after creating appropriate elements
  function createList(title, array, $section) {
    var $title = $('<h3>').text(title);
    var $list = $('<ul>')

    array.forEach(function(element) {
      $list.append($('<li>').text(element));
    })

    $section.append($title, $list);
  }


  // this is used to capitalize the first letter of the 
  // keys when creating the list of values, colors and students.
  function capitalizeFirst(string) {
    var firstLtr = string.charAt(0).toUpperCase();
    var restOfString = string.slice(1);

    return firstLtr + restOfString;

  }
})