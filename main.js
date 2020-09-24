var date = document.getElementById("currentDay"); 
date.textContent = moment().format('MMMM Do YYYY, h:mm:ss a');

setInterval(function() {

        
        date.textContent = moment().format('MMMM Do YYYY, h:mm:ss a');
        

  }, 1000);
  setInterval();

  


