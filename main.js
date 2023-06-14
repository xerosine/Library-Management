class Book {
    constructor(title, author, shortDesc, longDesc, genres, firstPubl, format, published, isbn) {
        this.title = title;
        this.author = author;
        this.shortDesc = shortDesc;
        this.longDesc = longDesc;
        this.genres = genres;
        this.firstPubl = firstPubl;
        this.format = format;
        this.published = published;
        this.isbn = isbn;
    }
}

const app = Vue.createApp({
    data() {
        return {
            signUp: false,
            role: 'student',
            recommendedBooks: [{
                image: "images/Engravings.png",
                tags: ['Medicine'],
                shortDesc: "Engravings of the Bones, Muscles, and Joints",
                author: "John Bell"
            },
            {
                image: "images/Western Philosophy.png",
                tags: ['Philosophy', 'History'],
                shortDesc: "A History of Western Philosophy",
                author: "Bertrand Russell"
            },
            {
                image: "images/Orthopaedics.png",
                tags: ['Physiotherapy'],
                shortDesc: "Essentials of Orthopaedics and Applied Physiotherapy ",
                author: "Jayant Joshi"
            }],
            requestedBooks: [{
                image: "images/Obstetrics.png",
                title: "Basic Sciences for Obstetrics and Gynaecology",
                author: "Tim Chard"
            },{
                image: "images/Operations Research.png",
                title: "Operation research: An Introduction",
                author: "Hamdy A.Taha"
            },{
                image: "images/Statistical Learning.png",
                title: "The Elements of Statistical Learning",
                author: "Robert Fri"
            },{
                image: "images/Mathematical Programming.png",
                title: "Introduction to Mathematical Programming",
                author: "Wayne Winston"
            },{
                image: "images/UML.png",
                title: "An Introduction to Object-Oriented Modeling",
                author: "Martina Seidl"
            }],
            libraryBooks: [{
                image: "images/Engravings.png",
                tags: ['Medicine'],
                shortDesc: "Engravings of the Bones, Muscles, and Joints",
                author: "John Bell"
            },
            {
                image: "images/Western Philosophy.png",
                tags: ['Philosophy', 'History'],
                shortDesc: "A History of Western Philosophy",
                author: "Bertrand Russell"
            },
            {
                image: "images/Orthopaedics.png",
                tags: ['Physiotherapy'],
                shortDesc: "Essentials of Orthopaedics and Applied Physiotherapy ",
                author: "Jayant Joshi"
            },
            {
                image: "images/Operations Research.png",
                tags: ['Science', 'Mathematics'],
                shortDesc: "Operation research: An Introduction",
                author: "Hamdy A.Taha"
            },
            {
                image: "images/Statistical Learning.png",
                tags: ['Computer', 'Mathematics'],
                shortDesc: "The Elements of Statistical Learning",
                author: "Robert Fri"
            },
            {
                image: "images/Mathematical Programming.png",
                tags: ['Engineering'],
                shortDesc: "Introduction to Mathematical Programming",
                author: "Wayne Winston"
            },
            {
                image: "images/Database MD.png",
                tags: ['Computer'],
                shortDesc: "Database Management and Design",
                author: "Gary W. Hansen"
            },
            {
                image: "images/Probability.png",
                tags: ['Mathematics', 'Computer'],
                shortDesc: "A First Course in probability",
                author: "Sheldon M.Ross"
            },
            {
                image: "images/UML.png",
                tags: ['Computer'],
                shortDesc: "An Introduction to Object-Oriented Modeling",
                author: "Martina Seidl"
            }],
            borrowedBooks: [{
                image: "images/Engravings.png",
                tags: ['Medicine'],
                shortDesc: "Engravings of the Bones, Muscles, and Joints",
                author: "John Bell"
            },
            {
                image: "images/Statistical Learning.png",
                tags: ['Computer', 'Mathematics'],
                shortDesc: "The Elements of Statistical Learning",
                author: "Robert Fri"
            },
            {
                image: "images/Western Philosophy.png",
                tags: ['Philosophy', 'History'],
                shortDesc: "A History of Western Philosophy",
                author: "Bertrand Russell"
            },
            {
                image: "images/Orthopaedics.png",
                tags: ['Physiotherapy'],
                shortDesc: "Essentials of Orthopaedics and Applied Physiotherapy ",
                author: "Jayant Joshi"
            },
            {
                image: "images/Database MD.png",
                tags: ['Computer'],
                shortDesc: "Database Management and Design",
                author: "Gary W. Hansen"
            },
            {
                image: "images/UML.png",
                tags: ['Computer'],
                shortDesc: "An Introduction to Object-Oriented Modeling",
                author: "Martina Seidl"
            }],
            overdueBooks: [{
                image: "images/Engravings.png",
                tags: ['Medicine'],
                shortDesc: "Engravings of the Bones, Muscles, and Joints",
                author: "John Bell"
            },
            {
                image: "images/Statistical Learning.png",
                tags: ['Computer', 'Mathematics'],
                shortDesc: "The Elements of Statistical Learning",
                author: "Robert Fri"
            },
            {
                image: "images/Western Philosophy.png",
                tags: ['Philosophy', 'History'],
                shortDesc: "A History of Western Philosophy",
                author: "Bertrand Russell"
            },
            {
                image: "images/Orthopaedics.png",
                tags: ['Physiotherapy'],
                shortDesc: "Essentials of Orthopaedics and Applied Physiotherapy ",
                author: "Jayant Joshi"
            }]
        }
    },
    methods: {
        switchComp(index) {
            console.log(index);
            let compsList = document.getElementById('core-comps-list').children;
            for(let i = 0; i < compsList.length; i++){
                if (compsList[i].classList.contains("active-comp")){
                    compsList[i].classList.remove("active-comp");
                    break;
                }
            }
            if (compsList[index]){
                compsList[index].classList.add('active-comp');
            }
        }
    },
})
