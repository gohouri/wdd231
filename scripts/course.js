// navigation menu

const hamMenuButton = document.querySelector('#menu');
const navigation = document.querySelector('.nav')

hamMenuButton.addEventListener('click', () => {
    navigation.classList.toggle('open')
    hamMenuButton.classList.toggle('open')
}
)
// courses array
const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]
function createCourseCard(course) {
    const button = document.createElement("button");
    button.className = "course";
    button.innerHTML = `<h3>${course.subject} ${course.number}</h3>`;
    button.addEventListener("click", () => {
        displayCourseDetails(course)
    })
    return button
}
function displayCourses(courses) {
    const container = document.querySelector(".classesTaken");
    container.innerHTML = "";
    courses.forEach(course => {
        const courseCard = createCourseCard(course);
        container.appendChild(courseCard);
        // Check if the course is completed
        if (course.completed === true) {
            // Select the last added course card
            courseCard.style.backgroundColor = 'var(--classTakenColor)';
        }

    });
}
// Call the function to display the courses
displayCourses(courses);


// if statement to only show courses based upon button click
const buttonPress = document.querySelectorAll("button");
buttonPress.forEach(button => {
    button.addEventListener("click", () => {
        if (button.id === "All") {
            console.log("All button pressed");
            displayCourses(courses);
        } else if (button.id === "CSE") {
            console.log("CSE button pressed");
            // Logic for CSE button
            const filteredCourse = courses.filter(course => course.subject === "CSE")
            displayCourses(filteredCourse)
        } else if (button.id === "WDD") {
            console.log("WDD button pressed");
            // Logic for WDD button
            const filteredCourse = courses.filter(course => course.subject === "WDD")
            displayCourses(filteredCourse)
        }
    });
});
// click on courses to display dialog
const courseDetails = document.querySelector('.courseDetails')
const closeModal = document.querySelector("button")


function displayCourseDetails(course) {
    courseDetails.innerHTML = ''; 
    closeModal.innerHTML = "❌";
    closeModal.id = 'closeModal';
    closeModal.addEventListener("click", () => {
      courseDetails.close();
    });
    courseDetails.appendChild(closeModal)
    courseDetails.innerHTML += `
      <button id="closeModal"></button>
      <h2>${course.subject} ${course.number}</h2>
      <h3>${course.title}</h3>
      <p><strong>Credits</strong>: ${course.credits}</p>
      <p><strong>Certificate</strong>: ${course.certificate}</p>
      <p>${course.description}</p>
      <p><strong>Technologies</strong>: ${course.technology.join(', ')}</p>
    `;
    courseDetails.showModal();
  }
// footer year and last modified
// todays date
const date = new Date();

//find current year
const currentyear = document.querySelector("#currentyear");
currentyear.textContent = `${date.getFullYear()}`;

//find last modified
const lastModified = document.querySelector("#lastModified")
const lastMod = document.lastModified;
lastModified.innerHTML = `Last Updated: ${lastMod}`;