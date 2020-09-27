var date = document.getElementById("currentDay");  
var hour = moment().format('h');
var text = document.getElementsByTagName("textarea");

date.textContent = moment().format('MMMM Do YYYY, h:mm:ss a');



setInterval(function() {

        date.textContent = moment().format('MMMM Do YYYY, h:mm:ss a');
        
  }, 1000);
  setInterval(event);

  setInterval(function() {


    if (hour == 9){
        document.getElementById("9text").classList.add('present');
        document.getElementById("11text").classList.add('future');
        document.getElementById("12text").classList.add('future');
        document.getElementById("1text").classList.add('future');
        document.getElementById("2text").classList.add('future');
        document.getElementById("3text").classList.add('future');
        document.getElementById("4text").classList.add('future');
        document.getElementById("5text").classList.add('future');
    }
    if (hour == 10){
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
    if (hour == 11){
        document.getElementById("11text").classList.add('present');
        document.getElementById("10text").classList.add('past');
        document.getElementById("9text").classList.add('past');
        document.getElementById("12text").classList.add('future');
        document.getElementById("1text").classList.add('future');
        document.getElementById("2text").classList.add('future');
        document.getElementById("3text").classList.add('future');
        document.getElementById("4text").classList.add('future');
        document.getElementById("5text").classList.add('future');
        
    }
    if (hour == 12){
        document.getElementById("12text").classList.add('present');
        document.getElementById("11text").classList.add('past');
        document.getElementById("10text").classList.add('past');
        document.getElementById("9text").classList.add('past');
        document.getElementById("1text").classList.add('future');
        document.getElementById("2text").classList.add('future');
        document.getElementById("3text").classList.add('future');
        document.getElementById("4text").classList.add('future');
        document.getElementById("5text").classList.add('future');
    }
    if (hour == 1){
        document.getElementById("1text").classList.add('present');
        document.getElementById("12text").classList.add('past');
        document.getElementById("11text").classList.add('past');
        document.getElementById("10text").classList.add('past');
        document.getElementById("9text").classList.add('past');
        document.getElementById("2text").classList.add('future');
        document.getElementById("3text").classList.add('future');
        document.getElementById("4text").classList.add('future');
        document.getElementById("5text").classList.add('future');
    }
    if (hour == 2){
        document.getElementById("2text").classList.add('present');
        document.getElementById("1text").classList.add('past');
        document.getElementById("12text").classList.add('past');
        document.getElementById("11text").classList.add('past');
        document.getElementById("10text").classList.add('past');
        document.getElementById("9text").classList.add('past');
        document.getElementById("3text").classList.add('future');
        document.getElementById("4text").classList.add('future');
        document.getElementById("5text").classList.add('future');
    }
    if (hour == 3){
        document.getElementById("3text").classList.add('present');
        document.getElementById("2text").classList.add('past');
        document.getElementById("1text").classList.add('past');
        document.getElementById("12text").classList.add('past');
        document.getElementById("11text").classList.add('past');
        document.getElementById("10text").classList.add('past');
        document.getElementById("9text").classList.add('past');
        document.getElementById("4text").classList.add('future');
        document.getElementById("5text").classList.add('future');
    }
    if (hour == 4){
        document.getElementById("4text").classList.add('present');
        document.getElementById("3text").classList.add('past');
        document.getElementById("2text").classList.add('past');
        document.getElementById("1text").classList.add('past');
        document.getElementById("12text").classList.add('past');
        document.getElementById("11text").classList.add('past');
        document.getElementById("10text").classList.add('past');
        document.getElementById("9text").classList.add('past');
        document.getElementById("5text").classList.add('future');
    }
    if (hour == 5){
        document.getElementById("5text").classList.add('present');
        document.getElementById("4text").classList.add('past'); 
        document.getElementById("3text").classList.add('past');
        document.getElementById("2text").classList.add('past');
        document.getElementById("1text").classList.add('past');
        document.getElementById("12text").classList.add('past');
        document.getElementById("11text").classList.add('past');
        document.getElementById("10text").classList.add('past');
        document.getElementById("9text").classList.add('past');
    }
    if (hour > 5){
        document.getElementById("5text").classList.add('past'); 
        document.getElementById("4text").classList.add('past'); 
        document.getElementById("3text").classList.add('past');
        document.getElementById("2text").classList.add('past');
        document.getElementById("1text").classList.add('past');
        document.getElementById("12text").classList.add('past');
        document.getElementById("11text").classList.add('past');
        document.getElementById("10text").classList.add('past');
        document.getElementById("9text").classList.add('past');
    }
    
}, 1000);

// save.addEventListener("click", function() {
//     // console.log(event.target.textarea);
//     console.log("click");
//     // localStorage.setItem("count", count);
//   });
    

function loop(){

    var hours = ["9","10","11","12","1","2","3","4","5"];

    for (i = 0; i < hours.length; i++){
        
        var text = localStorage.getItem(hours[i]);
        var hourid = hours[i] + "text";
        document.getElementById(hourid).textContent = text;

    }
}

  $(document).ready(function() {

    loop();

   


    $( ".text" )
    .on("change", function() {
        var value = $(this).val();
        console.log(value);
    
            
       
    });
    $(".saveBtn").on("click", function (){

        var btn = this.id;
        var tag = $(this).data("target");
        var text = (document.getElementById(tag).value);
        localStorage.setItem(btn, text);
        loop();
        });

});
