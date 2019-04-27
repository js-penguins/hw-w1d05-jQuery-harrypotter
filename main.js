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
  

  // creating calback functions for each proprety
  var buildingName = []
  hogwarts.houses.forEach(function(building){
    buildingName.push(building.name);
  })
  var buildinFounder = []
  hogwarts.houses.forEach(function(building){
    buildinFounder.push(building.founder);
  })
  var buildinMascot = []
  hogwarts.houses.forEach(function(building){
    buildinMascot.push(building.mascot);
  })
  var buildinValue = []
  hogwarts.houses.forEach(function(building){
    buildinValue.push(building.values);
  })
  var buildinColor = []
  hogwarts.houses.forEach(function(building){
    buildinColor.push(building.colors);
  })
  var studentName = []
  hogwarts.houses.forEach(function(building){
    studentName.push(building.students);
  })
  var buildingImg = []
  hogwarts.houses.forEach(function(building){
    buildingImg.push(building.img);
  })

  // select elements, create and append (sections, divs, h2, p, h3, img)
  var title = Object.keys(hogwarts.houses[0])
  
  for (var i = 0; i < buildingName.length; i++) {
    var $htmlSection = $('<section/>');
    $('main').append($htmlSection);
    var $htmlDiv = $('<div/>');
    $($htmlSection).append($htmlDiv);
      $($htmlDiv).append($('<img/>').attr('src', buildingImg[i])); 
      $($htmlDiv).append($('<h2/>').html(buildingName[i]));
      $($htmlDiv).append($('<p/>').html(title[5] + ': ' + buildinFounder[i]))
      $($htmlDiv).append($('<p/>').html(title[3] + ': ' + buildinMascot[i]))
      $($htmlDiv).append($('<h3/>').html(title[2]));
  
      var $ulListValue = $('<ul/>')
      for (var j = 0; j < buildinValue[i].length; j++) {
        $($ulListValue).append($('<li/>').html(buildinValue[i][j]));
      }
      $($htmlDiv).append($ulListValue);
  
      var $ulListColor = $('<ul/>')
      $($htmlDiv).append($('<h3/>').html(title[4]));
      for (var t = 0; t < buildinColor[i].length; t++) {
        $($ulListColor).append($('<li/>').html(buildinColor[i][t]));
      }
      $($htmlDiv).append($ulListColor);
  
      var $ulListStudent = $('<ul/>')
      $($htmlDiv).append($('<h3/>').html(title[6]));
      for (var m = 0; m < studentName[i].length; m++) {
        $($ulListStudent).append($('<li/>').html(studentName[i][m]));
      }
      $($htmlDiv).append($ulListStudent);
  }

  //  css styleing......
  $('div').css({ 'left': 15, position :'relative'});
  $('ul').css({'background': '#F5F5F5'});
  $('p').css({'font-size': '100%'});
  $('h2').css({'font-size': '90%'});
  $('h3').css({'font-size': '90%'});
  $('li').css({'font-size': '90%'});
  $('img').css({'max-width': '65%'});
  // Guidance:  (Feel free to ignore this).

  /* Look at the image of the goal in the README!  What do you see?
    You can tell that we need to create identical sections for forEach house that
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