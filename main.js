var hogwarts = {
 location: 'Scotland',
 houses: [{
         name: 'Griffindor',
         img: 'http://images1.wikia.nocookie.net/__cb20120922143611/harrypotter/images/7/70/G_final.jpg
http://images1.wikia.nocookie.net/__cb20120922143611/harrypotter/images/7/70/G_final.jpg
',
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
         img: 'http://images3.wikia.nocookie.net/__cb20111027164827/harrypotter/images/3/3f/H_final.jpg
http://images3.wikia.nocookie.net/__cb20111027164827/harrypotter/images/3/3f/H_final.jpg
',
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
         img: 'http://images2.wikia.nocookie.net/__cb20111021043857/harrypotter/images/d/da/R_final.jpg
http://images2.wikia.nocookie.net/__cb20111021043857/harrypotter/images/d/da/R_final.jpg
',
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
         img: 'http://images3.wikia.nocookie.net/__cb20111027165214/harrypotter/images/d/da/S_final.jpg
http://images3.wikia.nocookie.net/__cb20111027165214/harrypotter/images/d/da/S_final.jpg
',
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
    var houseName =[];
           var mainDiv = $( "<div> <div/>" );
           mainDiv.addClass("row");
           var main = $("main");
          
 hogwarts.houses.forEach(function(house) {
      
      houseName.push(house.name);
       var sectionDiv = $( "<div> </div>" );
       sectionDiv.addClass("block");
       var sec = $( "<SECTION> </SECTION>" );
      // sec.setAttribute("id", "Sec"+i);
       sectionDiv.append(sec);
      mainDiv.append(sectionDiv);
 var img =  $( "<img src='"+house.img+"' alt='jQuery' width='100' height='140'>  </img> " );    
sec.append(img)  
 var heading = $( "<H1>"+ house.name + "</H1>" );
 sec.append(heading);
 var i =0;
  for(i=0 ; i< house.values.length ; i++) {
 var para = $( "<P>"+ house.values[i] + "</P>" );
sec.append(para);
  }

 heading = $( "<H1>"+ house.mascot + "</H1>" );
 sec.append(heading);
 var i =0;
  for(i=0 ; i< house.colors.length ; i++) {
 var para = $( "<P>"+ house.colors[i] + "</P>" );
sec.append(para);
  }
 
    heading = $( "<H1>"+ house.founder + "</H1>" );
 sec.append(heading);
 var i =0;
  for(i=0 ; i< house.students.length ; i++) {
 var para = $( "<P>"+ house.students[i] + "</P>" );
sec.append(para);
  }
 
 });
  main.append(mainDiv);
});