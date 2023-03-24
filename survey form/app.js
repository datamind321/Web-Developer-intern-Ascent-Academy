const form = document.getElementById('survey-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = form.elements['name'].value;
  const email = form.elements['email'].value;
  const age = form.elements['age'].value;
  const gender = form.elements['gender'].value;
  const feedback = form.elements['feedback'].value;

  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Age: ${age}`);
  console.log(`Gender: ${gender}`);
  console.log(`Feedback: ${feedback}`);

  form.reset();
});
