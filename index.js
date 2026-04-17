//calculator program


 const display=document.getElementById("display");
 
 function appendToDisplay(input){
           display.value=display.value+input;
 }
 
 function clearDisplay(){

    display.value="";
 }
 function deleteLast(){
    display.value = display.value.slice(0, -1);
    
 }
 function calculate(){
     try {
        let expression = display.value.replaceAll('^', '**'); // ✅ convert ^ to **
        display.value = eval(expression);
    } catch (error) {
        display.value = "Error";
    }

 }
 function squareRoot() {
    try {
        if (display.value === "") 
            {return;}
        display.value = Math.sqrt(eval(display.value));
        
    } 
    catch (error) {
        display.value = "Error";
    }
}
function log(){
    try{
        if(display.value===""){
            return;
        }
        display.value=Math.log(eval(display.value));

    }
    catch(error){
        display.value="Error";
        
    }
}