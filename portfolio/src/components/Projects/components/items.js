// import RareBirdSociety from '../../../public/images/RBSLarge.JPG';
// import RareBirdSocietyThumb from '../../../public/images/RBSSmall.JPG';
import NextBoox from '../../../public/images/NetBooxLarge.JPG';
import NextBooxThumb from '../../../public/images/NetBooxSmall.JPG';
import Inventory from '../../../public/images/InventoryLarge.JPG';
import InventoryThumb from '../../../public/images/InventorySmall.JPG';
import StudyBuddy from '../../../public/images/StudyBuddyLarge.JPG';
import StudyBuddyThumb from '../../../public/images/StudyBuddySmall.JPG';
import GreenGrub from '../../../public/images/GGLarge.JPG';
import GreenGrubThumb from '../../../public/images/GGSmall.JPG';

export default [
    // {
    //     "key": 1,
    //     "name": "Rare Bird Society",
    //     "url": "https://birdiehunter.herokuapp.com",
    //     "code": "https://github.com/jazznerd206/Golf_App",
    //     "image": RareBirdSociety,
    //     "thumb": RareBirdSocietyThumb,
    //     "techStack": ["NodeJS", "Express", "MySQL", "Sequelize", "D3JS", "React", "ContextAPI"],
    //     "purpose": ["Keep track of golf scores and view data driven analytics about your game", "Visual representation of how mental mistakes affect total score"],
    //     "contribution": ["Full stack development", "Express Node server with MySQL based Sequelize ORM", "ReactJS for front end", "Data visualizations built with D3JS"]
    // },
    {
        "key": 2,
        "name": "Green Grub",
        "url": "https://enigmatic-oasis-28658.herokuapp.com/",
        "code": "https://github.com/jazznerd206/Green-Grub",
        "image": GreenGrub,
        "thumb": GreenGrubThumb,
        "techStack": ["NodeJS", "Express", "MongoDB", "Mongoose", "React", "PassportJS", "GoogleNews API", "Spoonacular API"],
        "purpose": ["A recipe finder using SpoonacularAPI, providing recipes based on user diet filters.", "Curates articles filtered by common diet types from Google News API."],
        "contribution": ["Implemented full authentication and authorization flow with Redux, bcrypt, PassportJS and JWT", "Database schema built using Mongoose and MongoDB, hosted via Heroku and MongoDB Atlas"]
    },
    {
        "key": 3,
        "name": "Study Buddy",
        "url": "https://jlcoden.github.io/Study-Buddy/",
        "code": "https://github.com/jlcoden/Study-Buddy",
        "image": StudyBuddy,
        "thumb": StudyBuddyThumb,
        "techStack": ["NodeJS", "Express", "Express Handlebars", "Firebase", "PassportJS", "GoogleMaps API"],
        "purpose": ["Led full stack development of scheduling application for students and teachers to arrange study sessions by date, location and availability.", "GoogleMaps API provides mapped location data for meetup location."],
        "contribution": ["Styled with Materialize UI and custom CSS to refine client-side interaction and user experience"]
    },
    {
        "key": 4,
        "name": "NetBoox",
        "url": "https://netboox.herokuapp.com/",
        "code": "https://github.com/jazznerd206/Google-Books-Search-Engine",
        "image": NextBoox,
        "thumb": NextBooxThumb,
        "techStack": ["NodeJS", "Express", "React", "MongoDB", "Mongoose", "Google Books API"],
        "purpose": ["This project exposes a search function for the Google Books API combined with a database to save a list of favorites."],
        "contribution": ["ReactJS based web application exposing Google Books API, following RESTful API principles and design.", "Utilized component based architecture to develop features while maintaining a single design aesthetic."]
    },
    {
        "key": 5,
        "name": "Inventory Portal",
        "url": "https://materials-inventory.herokuapp.com/",
        "code": "https://github.com/jazznerd206/CH-Inventory",
        "image": Inventory,
        "thumb": InventoryThumb,
        "techStack": ["NodeJS", "Express", "Express HandleBars", "MongoDB", "Mongoose", "Passport Auth"],
        "purpose": ["Inventory system for tracking production materials inventory valued at over $1M at a glass blowing studio.", "Built to reduce labor hours spent counting materials by hand each year and increase year over year accuracy of numbers"],
        "contribution": ["Passport JS Local Strategy authentication to allow users access to CRUD protocol.", "Generated a scalable database by designing RESTful APIs service with NodeJS and Mongoose."]
    }
]