let studentName;
let personalMessage;
let courseName;

document.addEventListener('DOMContentLoaded', function () {
  const cardForm = document.getElementById('cardForm');
  const modal = document.getElementById('modal');
  const certificateContent = document.getElementById('certificateContent');
  const closeModal = document.querySelector('.close');

  // Hide the modal initially
  modal.style.display = 'none';

  cardForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // 🚨 Get input values
    const studentNameInput = document.getElementById('studentName');
    const personalMessageInput = document.getElementById('personalMessage');
    const courseNameInput = document.getElementById('courseName');

    studentName = studentNameInput.value;
    const personalMessage = personalMessageInput.value;
    const courseName = courseNameInput ? courseNameInput.value : "a course"; // Fallback to "a course" if no input

    if (studentName.trim() === '' || personalMessage.trim() === '') {
      alert('Please fill in all fields');
      return;
    }

    // 🚨 Generate certificate content dynamically
    function generateCertificatecontent() {
      studentNameCertificate = document.getElementById('studentName').value.trim();
      personalMessage = document.getElementById('personalMessage').value.trim();
      courseName = document.getElementById('courseName').value.trim();


      //Making sure the fields are filled.
      if (!studentName || !personalMessage || !courseName) { alert('Please fill in all fields'); return; }

      //Creating a certificate template
      const certificateTemplate = `
    <h3> ${studentNameCertificate} </h3>
     <p> ${personalMessage} </p>
    <p> ${courseName} </p>`
        ;

      return certificateTemplate


    }
    //Display the generated certificate content.

    const certificateContent = document.getElementById('certificateContent');
    certificateContent.innerHTML = generateCertificatecontent();
    modal.style.display = 'block';


    studentNameInput.value = '';
    personalMessageInput.value = '';
    if (courseNameInput) courseNameInput.value = '';
  }



    /** certificateContent.innerHTML = 
      /** <h3>${studentName}</h3> **/




    // Display the modal
    /** modal.style.display = 'none';**/

    // Clear the form inputs

  );

  //  🚨 Close the modal when the close button is clicked
  closeModal.addEventListener('click', function () {
    modal.style.display = 'none';

  });
});
