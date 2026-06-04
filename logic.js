function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}
function zoomImage(img) {
    const modal = document.getElementById("imageModal");
    const zoomedImage = document.getElementById("zoomedImage");

    zoomedImage.src = img.src;
    modal.style.display = "flex"; 
}

function closeImage(){
    document.getElementById("imageModal").style.display = "none";
}