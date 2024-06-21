const groupButton = document.getElementById('groupButton');
let isJoining = true;

function toggleGroupStatus() {
    if (isJoining) {
        groupButton.innerHTML = 'Leave Group <i class="fa-solid fa-arrow-right-from-bracket"></i>';
        groupButton.classList.add('leave');
    } else {
        groupButton.innerHTML = '<i class="fa-sharp fa-solid fa-user-plus"></i> Join Group';
        groupButton.classList.remove('leave');
    }

    isJoining = !isJoining;
}

function toggleJoin(button) {
    if (button.classList.contains("joined")) {
        button.classList.remove("joined");
        button.textContent = "Join Group";
    } else {
        button.classList.add("joined");
        button.textContent = "Leave Group";
    }
}