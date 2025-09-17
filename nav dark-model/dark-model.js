const icon = document.getElementById("icon");
icon.onclick = () => {
document.body.classList.toggle("dark");
icon.classList.toggle("fa-sun");
icon.classList.toggle("fa-moon");
};