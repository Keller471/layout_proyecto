function toggleDropdown() {
    var dropdownContent = document.getElementById("dropdown-content");
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
    }
}
function toggleDropdown1() {
    var dropdownContent = document.getElementById("dropdown-content1");
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
    }
}
setTimeout(() => {
    const tarjetas = document.querySelectorAll(".rest");
    tarjetas.forEach(function (tarjeta) {
        tarjeta.addEventListener('click', function () {
            const url = tarjeta.getAttribute('id');
            localStorage.setItem("titulo", url);
            window.location.href = "restaurante.html";
        });
    });
}, 500);