const openForm = () => {
  document.getElementsByClassName('contact-section')[0].style.width = '100%';
  document.getElementsByClassName('contact-form')[0].style.visibility =
    'visible';
  document.getElementsByClassName('closer')[0].style.visibility = 'visible';
  document.getElementById('contact-header').style.visibility = 'visible';
};

const closeForm = () => {
  document.getElementsByClassName('contact-section')[0].style.width = '0%';
  document.getElementsByClassName('contact-form')[0].style.visibility =
    'hidden';
  document.getElementById('contact-header').style.visibility = 'hidden';
  document.getElementsByClassName('closer')[0].style.visibility = 'hidden';
};
