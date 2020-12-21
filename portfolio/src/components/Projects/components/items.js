import RareBirdSociety from '../../../public/images/RBSLarge.JPG';
import RareBirdSocietyThumb from '../../../public/images/RBSSmall.JPG';
import NextBoox from '../../../public/images/NetBoox.JPG';
import NextBooxThumb from '../../../public/images/NetbooxSmall2.JPG';
import Inventory from '../../../public/images/InventoryLarge.JPG';
import InventoryThumb from '../../../public/images/InventorySmall.JPG';
// import StudyBuddy from '../../../public/images/SBProjPic.PNG';
import GreenGrub from '../../../public/images/GGLarge.JPG';
import GreenGrubThumb from '../../../public/images/GGSmall.JPG';

export default [
    {
        "key": 1,
        "name": "Rare Bird Society",
        "url": "https://birdiehunter.herokuapp.com",
        "code": "https://github.com/jazznerd206/Golf_App",
        "image": RareBirdSociety,
        "thumb": RareBirdSocietyThumb,
        "techStack": ["NodeJS", "Express", "MySQL", "Sequelize", "D3JS", "React", "ContextAPI"],
        "purpose": ["Keep track of golf scores and view data driven analytics about your game", "Visual representation of how mental mistakes affect total score"],
        "contribution": ["Full stack development", "Express Node server with MySQL based Sequelize ORM", "ReactJS for front end", "Data visualizations built with D3JS"]
    },
    {
        "key": 2,
        "name": "Green Grub",
        "url": "https://enigmatic-oasis-28658.herokuapp.com/",
        "code": "https://github.com/jazznerd206/Green-Grub",
        "image": GreenGrub,
        "thumb": GreenGrubThumb,
        "techStack": ["NodeJS", "Express", "MongoDB", "Mongoose", "React", "PassportJS", "GoogleNews API", "Spoonacular API"],
        "purpose": ["A recipe curation app, using SpoonacularAPI, to provide recipes based on user diet filters. Also curates articles based on common diet types from GoogleNews API."],
        "contribution": ["Team leader of four developers to project delivery.", "Personally responsible for database design and authentication package using React Redux and PassportJS."]
    },
    // {
    //     "key": 3,
    //     "name": "Study Buddy",
    //     "url": "https://jlcoden.github.io/Study-Buddy/",
    //     "code": "https://github.com/jlcoden/Study-Buddy",
    //     "image": StudyBuddy,
    //     "techStack": ["NodeJS", "Express", "Express Handlebars", "Firebase", "PassportJS", "GoogleMaps API"],
    //     "purpose": ["StudyBuddy provides a place for students and teachers to organize study sessions.", "Select meeting time, date and location and submit to study group for approval.", "GoogleMaps API provides mapped location data for meetup location."],
    //     "contribution": ["Team leader of four developers to project delivery.", "Personally responsible for UI design."]
    // },
    {
        "key": 4,
        "name": "NetBoox",
        "url": "https://netboox.herokuapp.com/",
        "code": "https://github.com/jazznerd206/Google-Books-Search-Engine",
        "image": NextBoox,
        "thumb": NextBooxThumb,
        "techStack": ["NodeJS", "Express", "React", "MongoDB", "Mongoose", "Google Books API"],
        "purpose": ["This project exposes a search function for the Google Books API combined with a database to save a list of favorites."],
        "contribution": ["Full stack development, solo project"]
    },
    {
        "key": 5,
        "name": "Inventory Portal",
        "url": "https://materials-inventory.herokuapp.com/",
        "code": "https://github.com/jazznerd206/CH-Inventory",
        "image": Inventory,
        "thumb": InventoryThumb,
        "techStack": ["NodeJS", "Express", "Express HandleBars", "MongoDB", "Mongoose", "Passport Auth"],
        "purpose": ["Inventory system for tracking production materials inventory valued at over $1M at a glass blowing studio.", "Built to reduce labor hours spent counting materials by hand each year and increase year over year accuracy of numbers", "Overall reduction of 320 labor hours yearly."],
        "contribution": ["Full stack", "Express Node server with MongoDB based Mongoose ORM", "Express Handlebars for front end"]
    }
]