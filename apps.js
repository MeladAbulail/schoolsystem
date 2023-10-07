document.addEventListener('DOMContentLoaded', function () {
  const navbarToggler = document.getElementById('navbarToggler');
  const navbarRight = document.querySelector('.navbar-right');

  navbarToggler.addEventListener('click', function () {
    navbarRight.classList.toggle('show');
  });

  
  function Student(fullName, dob, gender, major, phoneNumber, imageUrl) {
    this.fullName = fullName;
    this.dob = dob;
    this.gender = gender;
    this.major = major;
    this.phoneNumber = phoneNumber;
    this.imageUrl = imageUrl;
  }

  const studentForm = document.getElementById('studentForm');
  const mainContainer = document.getElementById('mainContainer');

  
  let students = JSON.parse(localStorage.getItem('students')) || [];

  
  function renderStudentInMain(student) {
    const card = document.createElement('div');
    card.classList.add('student-card');

    card.innerHTML = `
        <img src="${student.imageUrl}" alt="${student.fullName}">
        <div class="card-content">
            <h3>${student.fullName}</h3>
            <p>Date of Birth: ${student.dob}</p>
            <p>Gender: ${student.gender}</p>
            <p>Major: ${student.major}</p>
            <p>Phone Number: ${student.phoneNumber}</p>
        </div>
    `;

    mainContainer.appendChild(card);
  }

  
  function saveStudentsToLocal() {
    localStorage.setItem('students', JSON.stringify(students));
  }

  studentForm.addEventListener('submit', function (event) {
    event.preventDefault();
    
    const fullName = document.getElementById('fullName').value;
    const dob = document.getElementById('dob').value;
    const gender = document.getElementById('gender').value;
    const major = document.getElementById('major').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const imageUrl = document.getElementById('imageUrl').value;

    const newStudent = new Student(fullName, dob, gender, major, phoneNumber, imageUrl);
    students.push(newStudent);
    renderStudentInMain(newStudent);
    saveStudentsToLocal();
    studentForm.reset();
  });

  
  students.forEach(renderStudentInMain);
});
