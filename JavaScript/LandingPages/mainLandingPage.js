const dropdownLink = document.querySelector(".tag");
const dropdownIcon = document.querySelector(".material-icons-sharp.more");

dropdownLink.addEventListener('click', (e) => {
    e.preventDefault();
    dropdownIcon.classList.toggle("rotate");
})

dropdownLink.addEventListener('mouseover', (e) => {
    e.preventDefault();
    dropdownIcon.classList.add("rotate");
})

dropdownLink.addEventListener('mouseout', (e) => {
    e.preventDefault();
    dropdownIcon.classList.remove("rotate");
})