function toggleDropdown(boxNumber) {
    const dropdownButton = document.querySelector(`#dropdown-button${boxNumber}`);
    const dropdownContent = document.querySelector(`#dropdown-content${boxNumber}`);

    dropdownButton.addEventListener("click", function(event) {
        event.stopPropagation();
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
}


for (let i = 1; i <= 8; i++) {
    toggleDropdown(i);
}


document.addEventListener("click", function(event) {
    const dropdownContents = document.querySelectorAll("[id^='dropdown-content']");
    dropdownContents.forEach(function (dropdownContent) {
        if (dropdownContent.style.display === "block" && !event.target.matches(`#dropdown-button${dropdownContent.id.slice(-1)}`)) {
            dropdownContent.style.display = "none";
        }
    });
});
