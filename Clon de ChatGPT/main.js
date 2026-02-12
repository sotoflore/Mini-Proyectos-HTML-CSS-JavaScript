function toggleDropdown(){
    var dropdownContent = document.getElementById("myDropdown");
    dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
}

function checkInput(){
    var input = document.getElementById("text__input");
    var icon = document.getElementById("icon__input");

    if(input.value.length > 0){
        icon.classList.add("active");
    }
    else{
        icon.classList.remove("active");
    }
}