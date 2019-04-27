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

 
 var main =$('main')

 var sections = $('<section/>')
 var ul = $('<ul/>')
 var div = $('<div/>')
 main.append(sections)
 sections.append(div)
 div.append(ul)

 
 function renderHouse (){
 
  for (i=0 ; i<hogwarts.houses.length ; i++){
    var house = hogwarts.houses[i];
    var $img = $('<img/>').attr('src' , house.img)
    var $name = $('<h2/>').text(house.name)
    var $founder = $('<p/>').text('founder: ' + house.founder)
    var $mascot = $('<p/>').text('mascot: ' + house.mascot)
    var $values = $('<h3/>').text('Values ')
    var $valuesText = $('<p/>').text(house.values.join("\r\n"))
    var $colors = $('<h3/>').text('Colors ')
    var $colorsText =  $('<p/>').text(house.colors.join("\r\n"))
    var $students = $('<h3/>').text('Students ')
    var $studentsText = $('<p/>').text(house.students.join("\r\n"))
    
   
  ul.append($img)
  ul.append($name)
  ul.append($founder)
  ul.append($mascot)
  ul.append($values)
  ul.append($valuesText)
    ul.append($colors)
    ul.append($colorsText)
    ul.append($students)
    ul.append($studentsText)
   
  }

  }
  
  renderHouse();




});

