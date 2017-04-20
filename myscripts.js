var cats = [{
    id: 1,
    name: "Whiskers",
    imgURL: "cat2.png",
    happyStatus: "meow?",
    grumpyStatus: "grrrrrrrr",
    feralStatus: "bark",
    goneStatus: "Whiskers has fleed",
    petCount: 0
}, {
    id: 2,
    name: "Mr. Fluffy",
    imgURL: "cat.png",
    happyStatus: "purrrrr",
    grumpyStatus: "rawrrrrr",
    feralStatus: "hhhhiiisssssss",
    goneStatus: "Mr Fluffy is gone",
    petCount: 0
}, {
    id: 3,
    name: "Mean Kitty",
    imgURL: "cat1.png",
    happyStatus: "Mehhh",
    grumpyStatus: "grumble grumble grumble",
    feralStatus: "squeeeee",
    goneStatus: "Mean Kitty went home",
    petCount: 0
}, {
    id: 4,
    name: "Kitty Baby",
    imgURL: "cat3.png",
    happyStatus: "meow meow",
    grumpyStatus: "MEOW MEOW!!!",
    feralStatus: "SQUEEK",
    goneStatus: "Kitty Baby is crying in a corner now",
    petCount: 0
}

]


function petCat(catId) {
    var petCount = document.getElementById("petCount"+catId)
    var catStatus = document.getElementById("catStatus"+catId)
    var counter = 0
    var catButton = document.getElementById("catButton"+catId)
    var catPic = document.getElementById("catPic"+catId)
    
    var targetCat = getCatById(catId)

    targetCat.petCount++
    petCount.innerHTML = targetCat.petCount
    if (targetCat.petCount > 5) {
        catStatus.innerHTML = targetCat.grumpyStatus
    }
    if (targetCat.petCount == 9) {
        catStatus.innerHTML = targetCat.feralStatus
    }
    if (targetCat.petCount == 10) {
        catStatus.innerHTML = targetCat.goneStatus
        catButton.disabled = true;
        catPic.src = ""
    }
}

function getCatById(catId){
 for (var i = 0; i < cats.length; i++) {
     var cat = cats[i];
     if (cat.id == catId) {
         return cat
     }
 }
}


function reset(catId) {
    var petCount = document.getElementById("petCount"+catId)
    var catStatus = document.getElementById("catStatus"+catId)
    var counter = 0
    var catButton = document.getElementById("catButton"+catId)
    var catPic = document.getElementById("catPic"+catId)
    
    var targetCat = getCatById(catId)
    var targetCat = getCatById(catId)
    petCount.innerHTML = targetCat.petCount
    catButton.disabled = false
    catStatus.innerHTML = targetCat.happyStatus
    catPic.src = targetCat.imgURL
}

function drawCats(listOfCats) {
    var template = ""
    for (var i = 0; i < listOfCats.length; i++) {
        var cat = listOfCats[i]
        template += `
        <div>
            <img id= "catPic${cat.id}" 
            src= ${cat.imgURL}
            alt= "cat">
                <button type="button" onclick="petCat(${cat.id})" id="catButton${cat.id}">Pet</button>
                <button type="button" onclick="reset(${cat.id})">reset</button>
                    <h1 id="petCount${cat.id}">
                        ${cat.petCount}
                    </h1>
                    <h2 id="catStatus${cat.id}">
                        ${cat.happyStatus}
                    </h2>
                </div>
                `
    }
    document.getElementById("cat-list").innerHTML = template
}

drawCats(cats)























