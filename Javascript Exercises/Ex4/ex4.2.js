//Esercizi-4 js
//fill in the blanks to make the program work:

(function() {
  var favorite_album = function( collection ) {
    // do nothing if got an empty collection
    if ( collection.length === 0 ) {
     return;
    }

    // define two variables and initialize them
    var max_played = collection[0].played,
    max_index  = 0;

    for ( var i=0, len = collection.length; i < len; i++ ) {
      if ( collection[i].played > max_played ) {
        max_played = collection[i].played;
        max_index  = i;
      }
    }

    return { play: max_played, index: max_index };
  };

  var music = [{played:4},{played:7},{played:5}];

  var fav = favorite_album( music );

  console.log( "Your favorite album was played " + fav.play + " times" );

  // Bonus: Write code here to make the following line print the above line
  var favorite_album = function( collection ) {
    // do nothing if got an empty collection
    if ( collection.length === 0 ) {
      return;
    }

    // define two variables and initialize them
    var max_played = collection[0].played,
      max_index  = 0;

    for ( var i=0, len = collection.length; i < len; i++ ) {
      if ( collection[i].played > max_played ) {
        max_played = collection[i].played;
        max_index  = i;
      }
    }
    return "Your favorite album was played " + max_played + " times" ;
  };

  fav = favorite_album(music);

  console.log(fav);
}());