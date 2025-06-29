var pageHtml = `
    <div id = "header">
      <a href = "../" class = "medFont link headLink" id = "nameLink">Daniel Lief</a>
      <a href = "../#work" class = "medFont link headLink" id = "workLink">Work</a>
      <a href = "../about" class = "medFont link headLink" id = "aboutLink">About</a>
      <a target="_blank" href = "../resume.pdf" class = "medFont link headLink" id = "resumeLink">Resume</a>
    </div>
    <div id = "sidebar">

    </div>
    <img src = "banner.png" class = "banner bannerblur">
    <img src = "banner.png" class = "banner">
    <div id = "details">
        
    </div>
    <a href = "../#work" class = "fCen buttonFont" id = "backButton" style = "opacity:0;">View More Work</a>
    <div id = "footer" style = "opacity:0">
      <a target="_blank" href = "mailto:daniel_lief@berkeley.edu" class = "medFont link footLink" id = "emailLink">daniel_lief@berkeley.edu</a>
      <a target="_blank" href = "https://www.linkedin.com/in/daniellief/" class = "medFont footLink link" id = "linkedinLink">LinkedIn</a>
    </div>
`;
document.body.insertAdjacentHTML('beforeend', pageHtml);
const script = document.createElement('script');
script.src = '../global/details.js';
document.body.appendChild(script);