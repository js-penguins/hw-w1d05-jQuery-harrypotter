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
    */

    
  //  $('body').append('<ul/>');

  //  for (var i=0; i<hogwarts.houses.length ; i++)
  //  {
  //   $('ul').append('<li/>');
  //  }
  //  for (var i=0; i<hogwarts.houses.length ; i++)
  //  {
  //   //$('li')[i].append(hogwarts.houses[i].img);
  //   $('li')[i].append(hogwarts.houses[i].name);
  //   $('li')[i].append(hogwarts.houses[i].founder);
  //   $('li')[i].append(hogwarts.houses[i].mascot);
  //  }
  //  for ( var i=0; i<hogwarts.houses.values.length; i++){
  //   $('li')[i].append(hogwarts.houses[i].values);
  //  }
  
  var createH2 = $('<h2>');
  
  var createP = $('<p>');
  for(var i=0; i<hogwarts.houses.length; i++){
    var createSection = $('<section>'); 
    $('main').append(createSection);
    var houseImg = $('<img src="'+(hogwarts.houses[i].img)+'"/>');
    createSection.append(houseImg);
      var houseName = createH2.text(hogwarts.houses[i].name.toLocaleUpperCase());
      createSection.append(houseName.text());
      var houseFounder = createP.text("<br/> founder: "+hogwarts.houses[i].founder);
      createSection.append(houseFounder.text());
      var houseMascot = createP.text("<br/> mascot: "+hogwarts.houses[i].mascot);
      createSection.append(houseMascot.text());
      var createH3 = $('<h3>');
      createH3.text("values ");
      createSection.append(createH3);
      for(var M=0; M<hogwarts.houses[i].values.length; M++){
        var houseValues = createP.text(hogwarts.houses[i].values[M]);
        createSection.append(" <br/>"+houseValues.text());
      }
      var createH3 = $('<h3>');
      createH3.text("Colors ");
      createSection.append(createH3);
      for(var j=0; j<hogwarts.houses[i].colors.length; j++){
        var houseColors = createP.text(hogwarts.houses[i].colors[j]);
        createSection.append(" <br/>"+houseColors.text());
      }
      var createH3 = $('<h3>');
      createH3.text("Students ");
      createSection.append(createH3);
      for(var k=0;k<hogwarts.houses[i].students.length; k++){
        var houseStudents = createP.text(hogwarts.houses[i].students[k]);
        createSection.append(" <br/>"+houseStudents.text());
      }
  } 
  // for(var i=0; i<hogwarts.houses.colors.length; i++){
  //   var housColors = createP.text(hogwarts.houses.colors[i]);
  //   console.log(housColors);
  // }
  // for (var i=0; i<hogwarts.houses.length ; i++)
  //  {
  //   //$('li')[i].append(hogwarts.houses[i].img);
  //   var createSection = $('main').append('<section></section>');
  //   createSection.append(hogwarts.houses[i].name);
  //   createSection.append(hogwarts.houses[i].founder);
  //   createSection.append(hogwarts.houses[i].mascot);
   

   
    /*
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