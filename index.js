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
    const courseNameInput = ;

    const studentName = studentNameInput.value;
    const personalMessage = personalMessageInput.value;
    const courseName = courseNameInput ? courseNameInput.value : "a course"; // Fallback to "a course" if no input

    if (studentName.trim() === '' || personalMessage.trim() === '') {
      alert('Please fill in all fields');
      return;
    }

    // 🚨 Generate certificate content dynamically
    function generateCertificatecontent() {
      const name = document.getElementById('studentName').value;
      const message = document.getElementById('personalMessage').value;
    }
    /** certificateContent.innerHTML = 
      /** <h3>${studentName}</h3> **/

    //Display the generated certificate content

    const certificateContent = document.getElementById('certificateContent');
    certificateContent.innerHTML = generateCertificatecontent;


    // Display the modal
    /** modal.style.display = 'none';**/

    // Clear the form inputs
    studentNameInput.value = '';
    personalMessageInput.value = '';
    if (courseNameInput) courseNameInput.value = '';
  });

  //  🚨 Close the modal when the close button is clicked
  function closeModal() {
    document.getElementById("certificateContent").style.display = "none";

  });
;
