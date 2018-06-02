//projectFile includes projectList and techButton

const filterPage = (tag, color, buttonId) => {
    //set location for adding and removing articles
    let masterElement = document.getElementById('articleDIV');
    
    //delete all articles
    for (let i = (masterElement.children.length - 1); i > -1; i--) {
        masterElement.removeChild(masterElement.children[i]);
    }

    let filterdArray;
    if(tag === "all"){
        filterdArray = projectList;
    } else {
        filterdArray = projectList.filter(project => {
            if(project.techTags.includes(tag)){
                return project;
            }
        });
    }
    filterdArray.forEach(project => {
        let myElement = document.createElement("div");
        myElement.classList.add("article");
        myElement.innerHTML = `<a href="${project.url}" target="_blank">
            <h2>${project.title}</h2></a>
            <p>${project.description}</p>`
        masterElement.appendChild(myElement);
    })

    //Render background color
    document.getElementsByTagName('body')[0].style.backgroundColor = color;

    //Make buttons inactive
    let tempDocument = document.getElementById('techFilter')
    for (let i = 0; i < tempDocument.children.length; i++) {
        tempDocument.children[i].style.backgroundColor = "white";
    }

    //Make clicked button active
    document.getElementById(buttonId).style.background = "black";
}

//Render tech filter buttons
techButton.forEach(button => {
    let myString = `<img id="${button.id}" src="${button.image}" onclick="${button.onClick}" alt="${button.name}"/>`
    let myElement = document.getElementById('techFilter');
    myElement.innerHTML += myString;
})

filterPage("all", 'lightgray', 'removeButton');