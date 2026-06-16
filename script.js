function toggleLang() {
  const pt = document.getElementById('pt');
  const en = document.getElementById('en');

  if (pt.style.display === "none") {
    pt.style.display = "block";
    en.style.display = "none";
  } else {
    pt.style.display = "none";
    en.style.display = "block";
  }
}
