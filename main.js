var date = document.getElementById("currentDay");  
var hour = moment().format('h');



date.textContent = moment().format('MMMM Do YYYY, h:mm:ss a');



setInterval(function() {

        date.textContent = moment().format('MMMM Do YYYY, h:mm:ss a');
        
  }, 1000);
  setInterval(event);

  setInterval(function() {

    console.log(hour);

    if (hour == 4){
        document.getElementById("9text").classList.add('present');
        
    }
    if (hour == 5){
        document.getElementById("10text").classList.add('present');
        document.getElementById("9text").classList.add('past');
        document.getElementById("11text").classList.add('future');
        document.getElementById("12text").classList.add('future');
        document.getElementById("1text").classList.add('future');
        document.getElementById("2text").classList.add('future');
        document.getElementById("3text").classList.add('future');
        document.getElementById("4text").classList.add('future');
        document.getElementById("5text").classList.add('future');
    }
    if (hour === 6){
        document.getElementById("11text").classList.add('present');
        document.getElementById("10text").classList.add('past');
        document.getElementById("12text").classList.add('future');
        document.getElementById("1text").classList.add('future');
        document.getElementById("2text").classList.add('future');
        document.getElementById("3text").classList.add('future');
        document.getElementById("4text").classList.add('future');
        document.getElementById("5text").classList.add('future');
        
    }
    if (hour == 7){
        document.getElementById("12text").classList.add('present');
        document.getElementById("11text").classList.add('past');
        document.getElementById("1text").classList.add('future');
        document.getElementById("2text").classList.add('future');
        document.getElementById("3text").classList.add('future');
        document.getElementById("4text").classList.add('future');
        document.getElementById("5text").classList.add('future');
    }
    if (hour == 8){
        document.getElementById("1text").classList.add('present');
        document.getElementById("12text").classList.add('past');
        document.getElementById("2text").classList.add('future');
        document.getElementById("3text").classList.add('future');
        document.getElementById("4text").classList.add('future');
        document.getElementById("5text").classList.add('future');
    }
    if (hour == 9){
        document.getElementById("2text").classList.add('present');
        document.getElementById("1text").classList.add('past');
        document.getElementById("3text").classList.add('future');
        document.getElementById("4text").classList.add('future');
        document.getElementById("5text").classList.add('future');
    }
    if (hour == 10){
        document.getElementById("3text").classList.add('present');
        document.getElementById("2text").classList.add('past');
        document.getElementById("4text").classList.add('future');
        document.getElementById("5text").classList.add('future');
    }
    if (hour == 11){
        document.getElementById("4text").classList.add('present');
        document.getElementById("3text").classList.add('past');
        document.getElementById("5text").classList.add('future');
    }
    if (hour == 12){
        document.getElementById("5text").classList.add('present');
        document.getElementById("3text").classList.add('past'); 
    }
    
}, 1000);

