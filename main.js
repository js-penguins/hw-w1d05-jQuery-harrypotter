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
var Names=[]
hogwarts.houses.forEach(function(Name){
  Names.push(Name.name)
})
console.log(Names)
    
var Images=[]
hogwarts.houses.forEach(function(Image){
  Images.push(Image.img)
})
console.log(Images)

var Values=[]
hogwarts.houses.forEach(function(Value){
  Values.push(Value.values)
})
console.log(Values)


var Mascots=[]
hogwarts.houses.forEach(function(Mascot){
  Mascots.push(Mascot.mascot)
})
console.log(Mascots)

var Colors=[]
hogwarts.houses.forEach(function(Color){
  Colors.push(Color.colors)
})
console.log(Colors)

var Founders=[]
hogwarts.houses.forEach(function(Founder){
  Founders.push(Founder.founder)
})
console.log(Founders)

var Students=[]
hogwarts.houses.forEach(function(Student){
  Students.push(Student.students)
})
console.log(Students)
var title= Object.keys(hogwarts.houses[0])

for(i=0; i<Names.length; i++){
var $Section=$("<section/>")
$("main").append($Section)
var DivHouse=$("<div/>")
$Section.append(DivHouse)
DivHouse.append($("<img/>").attr("src",Images[i]))
DivHouse.append("<h2/>").html(Names[i])
DivHouse.append("<p/>").html(title[5]+" "+Founders[i])
DivHouse.append("<p/>").html(title[3]+" "+Mascots[i])
DivHouse.append("<h3/>").html(title[2])

var $ListValue=$("<ul/>")
for(var j=0; j<Values[i].length; j++){
  $ListValue.append("<li/>").html(Values[i][j])
}
DivHouse.append($ListValue)

var listColor=$("<ul/>")
DivHouse.append("<h3/>").html(title[4])
for(var k=0; i<Colors[i].length; k++){
  listColor.append("<li/>").html(Colors[i][k])
}
DivHouse.append(listColor)

var $listStudent=$("<ul/>")
DivHouse.append("<h3/>").html(title[6])
for(var h=0; h<Students[i].length; h++){
  $listStudent.append("<li/>").html(Students[i][h])
}
DivHouse.append($listStudent)}

$('section').css('flex-direction', 'row');
$('section').parent().css({position : 'relative'});
$('section').css({ 'left': 50, position :'relative'});
  // Guidance:  (Feel free to ignore this).

  /* Look at the image of the goal in the README!  What do you see?
    You can tell that we need to create identical sections for each house that
    has the same information inside.

    

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