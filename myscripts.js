var petCount = document.getElementById("petCount")
var catStatus = document.getElementById("catStatus")
var counter = 0
var catButton = document.getElementById("catButton")



function petCat(){
    counter++
    petCount.innerHTML = counter;
    if(counter > 5){
        catStatus.innerHTML="rawwr"
    } 
    if(counter == 9){
       catStatus.innerHTML="Scratch"
    }
    if(counter == 10){
        catStatus.innerHTML="Cat ran away"
        catButton.disabled = true;
        catPic.src=""
    }
}

function reset(){
    petCount.innerHTML = counter
    catStatus.innerHTML = "Purrrr"
    catButton.disabled = false
    catPic.src="cat.png"
}



