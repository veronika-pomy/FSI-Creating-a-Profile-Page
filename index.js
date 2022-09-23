function runMeWhenYouCallOnMe(){


let content = document.querySelector('.js-generated.content')

let header = document.createElement('h1')
header.setAttribute('class', 'dog-name')
header.append('Rizzo')
content.append(header)

let dogContent = document.createElement('div')
dogContent.setAttribute('class', 'dog-content')
content.append(dogContent)

let dogImage = document.createElement('img')
dogImage.setAttribute('class', 'dog-image')
dogImage.setAttribute('src', './assets/rizzo.jpg')
dogContent.append(dogImage)

let dogDetails = document.createElement('div')
dogDetails.setAttribute('class', 'dog-details')
dogContent.append(dogDetails)

let dogHeader = document.createElement('h3')
dogHeader.append('Description:')
dogDetails.append(dogHeader)

let dogParagraph = document.createElement('p')
dogParagraph.append('This gentle dog is aloof toward her owner, and never comes when called.She always acts as though any stranger she meets will harm her and dislikes other animals.')
dogDetails.append(dogParagraph)

let dogFeeding = document.createElement('h3')
dogFeeding.append('Feeding Times:')
dogDetails.append(dogFeeding)

//let dogList = document.createElement('ul')
// dogList.setAttribute('class', 'dog-list')
//dogDetails.append(dogList)


//let dog1E = document.createElement('li')
//dog1E.append('9:00 am')
//dogList.append(dog1E)
//
//let dog2E = document.createElement('li')
//dog2E.append('12:00 pm')
//dogList.append(dog2E)

//let dog3E = document.createElement('li')
//dog3E.append('5:00 pm')
//dogList.append(dog3E)

let ul = document.createElement("ul");
let dogTimes = ["9.00 am", "12:00 pm", "5:00 pm", "8:30 pm"];
for (i = 0; i < dogTimes.length; i++){
    let li = document.createElement("li");
    li.textContent = dogTimes[i];
    ul.append(li);
}

dogDetails.append(ul);

}

let button = document.createElement("button");
button.textContent = "Click Me!";
button.style.fontSize = "50px";
document.querySelector("body").append(button);


button.addEventListener("click",function(){
    console.log("It was clicked.");
    runMeWhenYouCallOnMe();

})



// dogBullets[i].append("dogTimes[i]")
// dogList.append("dogBullets")
//}
//
//
//
//
//

