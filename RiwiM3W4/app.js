const form = document.getElementById("Myform");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const inpt = document.getElementById("inptPh").value.trim() 
    const inpt2 = document.getElementById("inptnm").value.trim() 
    const inpt3 = document.getElementById("inptPr").value.Trim()

    if(inpt && inpt2 && inpt3 === ""){
        alert("Un campo está vacío, rellénalo.")
    }

})