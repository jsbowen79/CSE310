const fs = require("fs"); 
const path = require("path"); 

//read image file
const imagePath = path.join(__dirname, "../images", "testImage.png"); 
const imageBuffer = fs.readFileSync(imagePath); 

//Convert to base64
const base64Image = imageBuffer.toString("base64");



const profileData = {
    professionalName: "Joseph Bowen", 
    base64Image: base64Image,
    nameLink: {
        firstName: "Joseph",
        url: "https://www.google.com/"  
    }, 
    primaryDescription: "Primary Description",
    workDescription1: "work description 1", 
    workDescription2: "work description 2", 
    linkTitleText: "Link Title Text", 
    linkedInLink: {
        text: "LinkedIn ", 
        link: "https://www.linkedin.com/in/joseph-bowen-01b596233/"
    }, 
    githubLink: {
        text: "GitHub", 
        link: "https://github.com/jsbowen79/CSE310.git" 
    }
        
}

module.exports = profileData; 