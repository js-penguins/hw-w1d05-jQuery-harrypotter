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
  function renderHouse(house) {
    house.houses.forEach(function(houseInfo){
      var img = houseInfo.img ;
      var seection = $('<section>');
      var image = $('<img></img>').attr("src", img);
      $(seection).append(image);
      
      //each house should be a <section> tag appended to the <main> tag in the html.
  
      $('main').append(seection);
    
                //The name of the house
  //the name of the house should be in a h2 tag
  
      var houseName = $('<h2>').append(houseInfo.name);
      $(seection).append(houseName);
  
                //The founder of the house
  //the founder and the mascot should be in p tags
  
      var founder =$('<p>').append(houseInfo.founder);
      $(seection).append(founder);
  
                //The house mascot
  
      var mascot = $('<p>').append(houseInfo.mascot);
      $(seection).append(mascot);
  
                //The values of the house
  //each title (like 'values', 'colors', 'students') are an h3 tag
  //each of the items that go with titles are li tags inside of a ul tag.
  
      var value = $('<h3>').append('Value');
      $(seection).append(value)
  
      var ul = $('<ul>');
      houseInfo.values.forEach(function(i){
            var li =  $('<li>').append(i);
            $(ul).append(li);
            $(seection).append(ul);
      })
  
                //The colors of the house
  
      var color = $('<h3>').append('Colors')
      $(seection).append(color)
      var ul = $('<ul>');
      houseInfo.colors.forEach(function(i){
        var li =  $('<li>').append(i);
        $(ul).append(li);
        $(seection).append(ul);
      })
  
                //The students of the house
  
      var student = $('<h3>').append('Students')
      $(seection).append(student)
  
      var ul = $('<ul>');
      houseInfo.students.forEach(function(i){
        var nList =  $('<li>').append(i);
        $(ul).append(nList);
        $(seection).append(ul);
      })
  
    })
  } renderHouse(hogwarts);
  
  
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