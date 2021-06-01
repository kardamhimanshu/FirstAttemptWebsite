
var tempValue = null;

function myFunction() {

    if  (tempValue == null)
    {
        tempValue = document.getElementById("jadu").innerHTML;
        document.getElementById("jadu").innerHTML =
            "Hello previously i am using a visual studio code property to fill my website space. because i dont have any content to insert in it. and now i am using a function to change it using through java script.";
    }
};

function changefunction () {
    document.getElementById("jadu").innerHTML = tempValue;
    tempValue = null;

}
function alertfunction(){
    alert("dont worry everything is working fine")
}
var x=5;
function jfunction(){
    document.getElementById("lul").innerHTML = x * 9; 
}







