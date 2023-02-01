var resultbar = document.getElementById('resultbar').placeholder;
let additionalNumbers = resultbar.placeholder ;
let inputNumbers = resultbar.value;

$(".number").click( evt => {
   var buttonValue = $(evt.currentTarget).text() 
   var resultbar = document.getElementById('resultbar').value += buttonValue;

});

$(".evaluate").click( evt => {
    var buttonValue = $(evt.currentTarget).text() 
    var resultbar = document.getElementById('resultbar').value += buttonValue;
 
 });


    let inputValue1 = [];

    function makeZero () {
        var resultbar = document.getElementById('resultbar').value="";
        resultbar.textContent = '';
        inputValue1 = [];
        }
        
        acbutton.addEventListener("click", makeZero, false);

    
    
    $("#equal").click( ()=> {
        var inputVal = document.getElementById('resultbar').value;
        let y = eval(inputVal);
      
     document.getElementById("resultbar").value = y
    
        
        



        
    }
    );


