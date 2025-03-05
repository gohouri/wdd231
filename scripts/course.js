// course.js
document.addEventListener('DOMContentLoaded', function() {
  const courses = [
    { code: 'CSE 110', name: 'Programming Building Blocks', category: 'CSE' },
    { code: 'WDD 130', name: 'Web Fundamentals', category: 'WDD' },
    { code: 'CSE 111', name: 'Programming with Functions', category: 'CSE' },
    { code: 'CSE 210', name: 'Programming with Classes', category: 'CSE' },
    { code: 'WDD 131', name: 'Dynamic Web Development', category: 'WDD' },
    { code: 'WDD 231', name: 'Advanced Web Development', category: 'WDD' }
  ];

  const courseCardsContainer = document.getElementById('course-cards');
  const courseListContainer = document.getElementById('course-list');

  function createCourseCard(course) {
    const card = document.createElement('div');
    card.className = 'course-card';
    card.innerHTML = `
      <h3>${course.code}</h3>
      <p>${course.name}</p>
    `;
    return card;
  }

  function createCourseListItem(course) {
    const listItem = document.createElement('div');
    listItem.className = 'course-item';
    listItem.innerHTML = `
      <span>${course.code}</span>
      <span>${course.name}</span>
    `;
    return listItem;
  }

  function displayCourses(category = 'all') {
    courseCardsContainer.innerHTML = '';
    courseListContainer.innerHTML = '';

    const filteredCourses = category === 'all' ? courses : courses.filter(course => course.category === category);

    filteredCourses.forEach(course => {
      courseCardsContainer.appendChild(createCourseCard(course));
      courseListContainer.appendChild(createCourseListItem(course));
    });
  }

  displayCourses(); // Display all courses by default

  // Add event listeners to filter buttons
  document.querySelectorAll('#filter-buttons button').forEach(button => {
    button.addEventListener('click', function() {
      displayCourses(this.textContent);
    });
  });
});