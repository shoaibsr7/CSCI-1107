/* 
    Style background Property
    Author: -
    URL: https://www.w3schools.com/jsref/prop_style_background.asp
    Date accessed: 09 March 2021
*/
// implementing dark mode trough styles
var button = document.body;
function darkModeFunction(){
    if(button.style.backgroundColor=="black"){
        button.style.backgroundColor="white"
        button.style.color="black"
    }
    else{
        button.style.backgroundColor="black"
        button.style.color="white"
    }
}