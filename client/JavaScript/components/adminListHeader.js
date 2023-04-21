const filterButton = document.getElementById("filterButton");
const overlayArray = document.getElementsByClassName("overlay")
const filterModalArray = document.getElementsByClassName("filter__modal");
const selectAll = document.getElementById("selectAll");
const allCheckBox = document.getElementsByClassName("message-checkbox");


const overlay = overlayArray[0]
const filterModal = filterModalArray[0]

filterButton.addEventListener('click', () => {
    overlay.classList.toggle('no-show');
    filterModal.classList.toggle('no-show');
})

const closeModal = () => {
    overlay.classList.toggle('no-show');
    filterModal.classList.toggle('no-show');
};

selectAll.addEventListener('click', () => {
    if(selectAll.checked) {
        for(let i = 0; i < allCheckBox.length; i++) {
            allCheckBox[i].checked = true;
        }
    } else {
        for(let i = 0; i < allCheckBox.length; i++) {
            allCheckBox[i].checked = false;
        }
    }
})