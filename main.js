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
 
               // Create element with HTML 

          var h2 = $('<h2>');
          var p  = $('<p>');
          var ul = $('<ul>');
          var li = ul.addClass('<li>');
          
       for ( var i=0 ; i < hogwarts.houses.length ; i ++)
        
      {
       var s = $('<section>');

        function mg(){
          var imgu= $('<img src="'+(hogwarts.houses[i].img)+'"/>');
         // s.append('<img src="'+imgu+'"/>');
         s.append(imgu)  
        }mg();
          
        function hn(){
          h2.text(hogwarts.houses[i].name.toUpperCase());
          s.append(h2.text().bold()+"<br />");
          h2.text(" ");
          s.append(h2.text()+"<br />");
        }hn();

        function hf(){
          p.text(hogwarts.houses[i].founder);
          s.append("founder : "+p.text()+"<br />");  
        }hf();

        function hm(){
          p.text(hogwarts.houses[i].mascot);
          s.append("mascot : "+p.text()+"<br />");
          p.text(" ");
          s.append(p.text()+"<br />");
        }hm();
        
        function values (){
          ul.text("values");
          s.append(ul.text().bold()+"<br />");
            
          for ( var j =0 ;  j <hogwarts.houses[i].values.length ; j++){
           
            li.text(hogwarts.houses[i].values[j++]);
            ul.append(li);
            s.append(ul.text()+"<br />");
            $('main').append(s);
          }
        }values();  
        
        function colors (){
            ul.text("    ");
            s.append(ul.text()+"<br />");
            ul.text("colors");
            s.append(ul.text().bold()+"<br />");
            for ( var k =0 ;  k<hogwarts.houses[i].colors.length ; k++){
              
              li.text(hogwarts.houses[i].colors[k]);
              ul.append(li);
              s.append(ul.text()+"<br />");
              $('main').append(s);
            }   
          }colors();
          
        function students (){
            ul.text("    ");
            s.append(ul.text()+"<br />");
            ul.text("students");
            s.append(ul.text().bold()+"<br />");
              for ( var f =0 ;  f <hogwarts.houses[i].students.length ; f++){
                
                li.text(hogwarts.houses[i].students[f]);
                ul.append(li);
                s.append(ul.text()+"<br />");
                $('main').append(s);
              }        
          }students();
         } 
         });
/*
 div1.text(“your text”)
 اي بس بدل div1= تسوين div1.text(thing you want in the div)
 div1.text(students[i]) div1.text[values[i]
 */