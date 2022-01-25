(function (window) {
   var names = ["Yogesh", "Jony", "Jack", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  
   for (var i in names) {
   
     var firstLetter = ((names[i]).charAt(0)).toLowerCase();
     if (firstLetter == 'j') {
        window.byeSpeaker.speak(names[i]);
     } else {
        window.helloSpeaker.speak(names[i]);
     }
   }
   })(window);