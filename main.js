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
 console.log('JS CONNECTED')
// thought process {Date:4/25/2019} {Time:9:36pm} { need a function that gets all the values of each house passed through.} Cant think of anything else right now.  
// function getHouse(hogwarts)
function getHouse(harryHousePoter) {
  harryHousePoter.houses.forEach(function(HousePoter){
    var imges = HousePoter.img ;
    // console.log(imges)
     var seection = $('<section>');
    var pTagPic = $('<img></img>').attr("src", imges);
    $(seection).append(pTagPic);
    $('main').append(seection);
    
    
    var pTagName = $('<h2>').append(HousePoter.name);
    $(seection).append(pTagName);

    var pTagFounder =$('<p>').append('founder: '+HousePoter.founder);
    $(seection).append(pTagFounder);
    // console.log(i.name)
    var pTageMascot = $('<p>').append('Mascot: ' + HousePoter.mascot);
    $(seection).append(pTageMascot);
    
    var pTagValue = $('<h3>').append('Value');
    $(seection).append(pTagValue)
    // var pTagValues = $('')
    console.log(HousePoter.values)
    var ulListValues = $('<ul>');
    HousePoter.values.forEach(function(i){
          var nList =  $('<li>').append(i);
          $(ulListValues).append(nList);
          $(seection).append(ulListValues);
    })
    var pTageColor = $('<h3>').append('Colors')
    $(seection).append(pTageColor)
    var ulListColors = $('<ul>');
    HousePoter.colors.forEach(function(i){
      var nList =  $('<li>').append(i);
      $(ulListColors).append(nList);
      $(seection).append(ulListColors);
    })

    var pTageStudent = $('<h3>').append('Students')
    $(seection).append(pTageStudent)

    var ulListStudent = $('<ul>');
    HousePoter.students.forEach(function(i){
      var nList =  $('<li>').append(i);
      $(ulListStudent).append(nList);
      $(seection).append(ulListStudent);
    })

  })
}
getHouse(hogwarts);
// console.log(hogwarts.houses)



})