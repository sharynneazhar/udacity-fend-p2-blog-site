window.onscroll = (e) => {
  const header = document.getElementsByTagName('header')[0];
  let distanceScrolled = window.scrollY;
  if (distanceScrolled > 40) {
    header.style.boxShadow = '5px 0 5px rgba(20, 20, 20, 0.2)';
  } else {
    header.style.boxShadow = 'none';
  }
}