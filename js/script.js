// Button click on function 
function butonClick(num) {
     document.getElementById('display-screen').value += num ;
}

// clear Input On display screen 
function clearValue() {
    document.getElementById('display-screen').value = " ";
   
}

// Calculate the counting
function calculate() {
   let inputValue =   document.getElementById('display-screen').value ;
     let equal = eval(inputValue);
     document.getElementById('display-screen').value = equal;
}