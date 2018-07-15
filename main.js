//Written by Leslie C. Bomar email: mrlesbomar@gmail.com

class Button{
    constructor(myObject, parentObject) {
        this.url = myObject.url;
        this.id = myObject.id;
        this.parent = parentObject;
        this.element = document.createElement("h2");
        this.element.innerText = myObject.display;
        this.addElement = this.addElement.bind(this);
        this.addElement();
    }
    addElement(){
        this.parent.appendChild(this.element);
        this.element.addEventListener('click', () => {
            document.getElementById('myFrame').src = this.url;
            allButtons.forEach(item => {
                item.element.classList = "";
            })
            this.element.classList = "active";
        });
    }
}

const myButtons = [
    {
        "url":"profile.html",
        "id":"profileButton",
        "display":"Profile"
    },
    {
        "url":"projects.html",
        "id":"projectsButton",
        "display":"Projects"
    }
]

let allButtons = [];

myButtons.forEach(item =>{
    allButtons.push(new Button(item, document.getElementById('NavBar')));
})

//Load first page
document.getElementById('myFrame').src = allButtons[0].url;
allButtons[0].element.classList = "active";