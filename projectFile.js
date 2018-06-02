let projectList = [
    {
        "title": "TicTacToe",
        "techTags": ["html","css","js"],
        "url": "TicTacToe.html",
        "description": "A simple application experimenting in Javascript logic with minimal DOM manipulation. The key feature being the ability for the computer to compete against the player using a random sequence."
    },
    {
        "title": "Background Generator",
        "techTags": ["html","css","js"],
        "url": "backgroundGenerator.html",
        "description": "A tool for generating gradients and providing the CSS code used to create it."
    },
    {
        "title": "Driver Performance Database",
        "techTags": ["html", "outlook", "css", "google", "access", "vba"],
        "url": "",
        "description": "Collection of tools for improving driver performance, identifying waste, automating reporting, generating form emails, bar code labels, and automated text messages."
    },
    {
        "title": "Purchasing Tools",
        "techTags": ["access", "vba"],
        "url": "",
        "description": "Collection of tools for automated raw material ordering, MRO requisition and approval system, materials staging, discrepancy tracking and investigation, and MSDS storage and retrieval."
    }
]

let techButton = [
    {
        "name": "Remove",
        "id": "removeButton",
        "tag": "all",
        "onClick": `filterPage('all', 'lightgray', 'removeButton')`,
        "image": "remove.png",
    },
    {
        "name": "HTML 5",
        "id": "htmlButton",
        "tag": "html",
        "onClick": `filterPage('html', 'rgb(241,101,41)', 'htmlButton')`,
        "image": "HTML5.png",
    },
    {
        "name": "CSS 3",
        "id": "cssButton",
        "tag": "css",
        "onClick": `filterPage('css', 'rgb(55,154,214)', 'cssButton')`,
        "image": "CSS3.png"
    },
    {
        "name": "JavaScript",
        "id": "jsButton",
        "tag": "js",
        "onClick": `filterPage('js', 'rgb(247,223,30)', 'jsButton')`,
        "image": "jslogo.png"
    },
    {
        "name": "Bootstrap",
        "id": "bootstrapButton",
        "tag": "bootstrap",
        "onClick": `filterPage('bootstrap', 'rgb(134,81,211)', 'bootstrapButton')`,
        "image": "bootstrap.png"
    },
    {
        "name": "Microsoft Access",
        "id": "accessButton",
        "tag": "access",
        "onClick": `filterPage('access', 'rgb(160,53,55)', 'accessButton')`,
        "image": "MSAccess.png"
    },

]
