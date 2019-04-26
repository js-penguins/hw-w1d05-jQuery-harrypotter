var hogwarts = {
  location: 'Scotland',
  houses: [{
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

$(document).ready(function() {
  /* DO YOUR CODE HERE */
  // var $section = $('<section/>');

  // $('main').append($section);
  // $($name).text(hogwarts.houses.find(house => house.name == 'Hufflepuff').name)
  // $($title).text(Object.keys(hogwarts.houses.find(house => house.name == 'Hufflepuff')))
  // $($text).text(hogwarts.houses.find(house => house.name == 'Hufflepuff').colors)


  // var houses = hogwarts.houses.find(function(house) {
  //     return house.name === 'Griffindor';
  // });

  var houseName = []
  hogwarts.houses.forEach(function(house) {
      houseName.push(house.name);
  })
  console.log(houseName)

  var houseColor = []
  hogwarts.houses.forEach(function(house) {
      houseColor.push(house.colors);
  })
  console.log(houseColor)

  var houseValues = []
  hogwarts.houses.forEach(function(house) {
      houseValues.push(house.values);
  })
  console.log(houseValues)

  var houseMascot = []
  hogwarts.houses.forEach(function(house) {
      houseMascot.push(house.mascot);
  })
  console.log(houseMascot)

  var houseFounder = []
  hogwarts.houses.forEach(function(house) {
      houseFounder.push(house.founder);
  })
  console.log(houseFounder)

  var houseStudent = []
  hogwarts.houses.forEach(function(house) {
      houseStudent.push(house.students);
  })
  console.log(houseStudent)

  var houseImg = []
  hogwarts.houses.forEach(function(house) {
      houseImg.push(house.img);
  })
  var title = Object.keys(hogwarts.houses[0])




      // $($section).append($('<img/>').attr('src', houseImg[0]));
      // $($name).text(houseName[0])
      // $($title).text(title[2])
      // $($text).text(houseValues[0].forEach())

  console.log(houseImg)

  for (var i = 0; i < houseName.length; i++) {
      var $section = $('<section/>');
      $('main').append($section);
      var $houseDiv = $('<div/>');
     
      $($section).append($houseDiv);
      $($houseDiv).append($('<img/>').attr('src', houseImg[i]));
      $($houseDiv).append($('<h2/>').html(houseName[i]));
      $($houseDiv).append($('<p/>').html(title[5] + ': ' + houseFounder[i]))
      $($houseDiv).append($('<p/>').html(title[3] + ': ' + houseMascot[i]))
      $($houseDiv).append($('<h3/>').html(title[2]));
      
      var $ulListValue = $('<ul/>')
      for (var j = 0; j < houseValues[i].length; j++) {
        $($ulListValue).append($('<li/>').html(houseValues[i][j]));
      }
      $($houseDiv).append($ulListValue);

      var $ulListColor = $('<ul/>')
      $($houseDiv).append($('<h3/>').html(title[4]));
      for (var k = 0; k < houseColor[i].length; k++) {
        $($ulListColor).append($('<li/>').html(houseColor[i][k]));
      }
      $($houseDiv).append($ulListColor);

      var $ulListStudent = $('<ul/>')
      $($houseDiv).append($('<h3/>').html(title[6]));
      for (var c = 0; c < houseStudent[i].length; c++) {
        $($ulListStudent).append($('<li/>').html(houseStudent[i][c]));
      }
      $($houseDiv).append($ulListStudent);
  }
  $('section').css('flex-direction', 'row');
  $('section').parent().css({position : 'relative'});
  $('section').css({ 'left': 50, position :'relative'});
  // $('section').css('margin', '100');



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
})