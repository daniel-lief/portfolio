var positions = null;
var sidebarY = null;
function injectGoogleDocs(doc){
  const headElements = doc.head.querySelectorAll('style, link[rel="stylesheet"]');
  headElements.forEach(el => {
    document.head.appendChild(el.cloneNode(true));
  });
  document.getElementById('details').innerHTML = doc.body.innerHTML;
}
function waitForImagesToLoad(container, callback) {
  let images = container.querySelectorAll("img");
  let loadedCount = 0;

  if (images.length === 0) {
    callback();
    return;
  }

  images.forEach(img => {
    if (img.complete) {
      loadedCount++;
    } else {
      img.addEventListener("load", () => {
        loadedCount++;
        if (loadedCount === images.length) {
          callback();
        }
      });
      img.addEventListener("error", () => {
        loadedCount++;
        if (loadedCount === images.length) {
          callback();
        }
      });
    }
  });

  if (loadedCount === images.length) {
    callback();
  }
}
function fixImages(){
  document.querySelectorAll('#details span').forEach(span => {
    const img = span.querySelector('img');
    if (img) {
      img.removeAttribute('style');
      img.removeAttribute('width');
      img.removeAttribute('height');

      img.style.maxWidth = '100%';
      img.style.height = 'auto';
      img.style.display = 'block';
      span.replaceWith(img);
    }
  });
}
function fixImages2(){
  document.querySelectorAll('#details p').forEach(p => {
    const img = p.querySelector('img');
    if (img) {
      img.removeAttribute('style');
      img.removeAttribute('width');
      img.removeAttribute('height');

      img.style.maxWidth = '100%';
      img.style.height = 'auto';
      img.style.display = 'block';
      img.style.margin = '1rem 0';

      p.parentNode.insertBefore(img, p);

      if (p.textContent.trim() === '') {
        p.remove();
      }
    }
  });
}
function fixText(){
  document.querySelectorAll('#details span').forEach(p => {
    const fontWeight = window.getComputedStyle(p).fontWeight;
    const fontSize = parseFloat(window.getComputedStyle(p).fontSize) * 0.75;
    if(fontSize >= 25){
      p.classList.add("title");
    }
    else if (fontSize >= 17) {
      p.classList.add('largeText');
    }else if(fontSize >= 11){
      p.classList.add('text');
    }else{
      p.classList.add('smallText')
    }
  });
  document.querySelectorAll('#details li').forEach(p => {
    const fontWeight = window.getComputedStyle(p).fontWeight;
    const fontSize = parseFloat(window.getComputedStyle(p).fontSize) * 0.75;
    p.classList.add('text');
  });
  document.querySelectorAll('#details p').forEach(p => {
    if (p.textContent.trim() === '') {
      p.classList.add('empty-line');
    }
  });
}
fetch('CaseStudy.html').then(response => response.text()).then(htmlText => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlText, 'text/html');
  injectGoogleDocs(doc);
  fixImages();
  fixImages2();
  fixText();
  computeHeaders();
  waitForImagesToLoad(document.getElementById('details'), () => {
    document.getElementById("backButton").style.opacity = "1";
    document.getElementById("backButton").style.top = (document.getElementById("details").offsetTop + document.getElementById("details").offsetHeight + (1 * window.innerWidth) / 100) + "px";
    document.getElementById("footer").style.opacity = "1";
    document.getElementById("footer").style.top = (document.getElementById("details").offsetTop + document.getElementById("details").offsetHeight + parseFloat(window.getComputedStyle(document.getElementById("backButton")).height) + (7 * window.innerWidth) / 100) + "px";
  });
});
function computeHeaders(){
  const headers = document.querySelectorAll('.largeText');
  headers.forEach(header => {
    var sectionHeader = document.createElement("div");
    sectionHeader.classList.add("sectionHeader");
    sectionHeader.innerHTML = header.innerHTML;
    sectionHeader.addEventListener("click", function() {
      let targetY = header.getBoundingClientRect();;
      window.scrollBy({
        top: targetY.top - document.getElementById('header').offsetHeight,
        behavior: "smooth"
      });
    });
    document.getElementById("sidebar").appendChild(sectionHeader);
  });
}
sidebarY = window.getComputedStyle(document.getElementById("sidebar")).top;
sidebarY = parseInt(sidebarY.substring(0, sidebarY.length - 2));
sidebarY = (sidebarY / window.innerWidth) * 100;
window.addEventListener('scroll', () => {
  const topbarHeight = document.getElementById('header').offsetHeight;
  const headers = document.querySelectorAll('.largeText');
  let currentSectionId = 0;
  let minDistance = Infinity;
  let count = 0;
  headers.forEach(header => {
    const sectionTop = header.getBoundingClientRect().top;

    if (sectionTop < topbarHeight + 20 && (topbarHeight + 20 - sectionTop) < minDistance) {
      currentSectionId = count;
      minDistance = topbarHeight + 20 - sectionTop;
    }
    count += 1;
  });
  var sectionHeaders = document.getElementsByClassName("sectionHeader");
  for(var i = 0; i < sectionHeaders.length; i++){
    if(i == currentSectionId){
      sectionHeaders[i].style.opacity = "1";
    }else{
      sectionHeaders[i].style.opacity = "0.4";
    }
  }
  var vwValue = (window.scrollY / window.innerWidth) * 100;
  if(vwValue < sidebarY - 9){
    document.getElementById("sidebar").style.position = "absolute";
    document.getElementById("sidebar").style.top = sidebarY + "vw";
  }else{
    document.getElementById("sidebar").style.position = "fixed";
    document.getElementById("sidebar").style.top = "9vw";
  }
});
