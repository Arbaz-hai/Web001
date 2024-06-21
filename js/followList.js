function toggleFollow(button) {
    if (button.classList.contains("followed")) {
        button.classList.remove("followed");
        button.textContent = "Follow";
    } else {
        button.classList.add("followed");
        button.textContent = "Followed";
    }
}