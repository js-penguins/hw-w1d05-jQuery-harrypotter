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
 $(document).ready(function(){

$(document).ready(function() {
 
  var HName = []
  hogwarts.houses.forEach(function(house) {
      HName.push(house.name);})
  console.log(HName)

  var HColor = []
  hogwarts.houses.forEach(function(house) {
      HColor.push(house.colors);})
  console.log(HColor)

  var HColor = []
  hogwarts.houses.forEach(function(house) {
      HColor.push(house.values);})
  console.log(HColor)

  var HMascot = []
  hogwarts.houses.forEach(function(house) {
      HMascot.push(house.mascot);})
  console.log(HMascot)

  var HFounder = []
  hogwarts.houses.forEach(function(house) {
      HFounder.push(house.founder);})
  console.log(HFounder)

  var HStudent = []
  hogwarts.houses.forEach(function(house) {
      HStudent.push(house.students);})
  console.log(HStudent)

  var HImg = []
  hogwarts.houses.forEach(function(house) {
      HImg.push(house.img);})
  var title = Object.keys(hogwarts.houses[0]) 
  console.log(HImg)

  for (var i = 0; i < HName.length; i++) {
      var $section = $('<section/>');
      $('main').append($section);
      var $houseDiv = $('<div/>');

      $($section).append($houseDiv);
      $($houseDiv).append($('<img/>').attr('src', HImg[i]));
      $($houseDiv).append($('<h2/>').html(HName[i]));
      $($houseDiv).append($('<p/>').html(title[5] + ': ' + HFounder[i]))
      $($houseDiv).append($('<p/>').html(title[3] + ': ' + HMascot[i]))
      $($houseDiv).append($('<h3/>').html(title[2]));

      var $ulListValue = $('<ul/>')
      for (var j = 0; j < HColor[i].length; j++) {
        $($ulListValue).append($('<li/>').html(HColor[i][j]));}
      $($houseDiv).append($ulListValue);

      var $ulListColor = $('<ul/>')
      $($houseDiv).append($('<h3/>').html(title[4]));
      for (var k = 0; k < HColor[i].length; k++) {
        $($ulListColor).append($('<li/>').html(HColor[i][k]));}
      $($houseDiv).append($ulListColor);

      var $ulListStudent = $('<ul/>')
      $($houseDiv).append($('<h3/>').html(title[6]));
      for (var c = 0; c < HStudent[i].length; c++) {
        $($ulListStudent).append($('<li/>').html(HStudent[i][c]));}
      $($houseDiv).append($ulListStudent);}

  $('section').css('flex-direction', 'row');
  $('section').parent().css({position : 'relative'});
  $('section').css({ 'left': 50, position :'relative'});  
 })
})