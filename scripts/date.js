// date.js
document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;
  
    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = `Last Update: ${lastModified}`;
  });