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
  
  function renderHouse(house) {
    
    house.houses.forEach(function(info){
      var imge = info.img ;
      var seection = $('<section>');
      var pic = $('<img/>').attr("src", imge);
      $(seection).append(pic);
      
      $('main').append(seection);
    
      var nameH = $('<h2>').append(info.name);
      $(seection).append(nameH);
  
      var founderH = $('<p>').append(info.founder);
      $(seection).append(founderH);
  
      var mascotH = $('<p>').append(info.mascot);
      $(seection).append(mascotH);
  
      var value = $('<h3>').append('Value');
      $(seection).append(value)
  
      var ul = $('<ul>');
      info.values.forEach(function(n){
      var li = $('<li>').append(n);
      $(ul).append(li);
      $(seection).append(ul);
      })
    
      var colorH = $('<h3>').append('Colors')
      $(seection).append(colorH)
      var ul = $('<ul>');
      info.colors.forEach(function(n){
      var li = $('<li>').append(n);
      $(ul).append(li);
      $(seection).append(ul);
      })
    
      var studentH = $('<h3>').append('Students')
      $(seection).append(studentH)
  
      var ul = $('<ul>');
      info.students.forEach(function(n){
      var li = $('<li>').append(n);
      $(ul).append(li);
      $(seection).append(ul);
      })
  
      })
      } renderHouse(hogwarts);
  
      })
