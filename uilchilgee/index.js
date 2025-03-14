function openModal(title, content) {
    document.getElementById("garchig").innerText = title;
    document.getElementById("medeelel").innerText = content;
    document.getElementById("modalDavharga").classList.add("active");
}

function closeModal() {
    document.getElementById("modalDavharga").classList.remove("active");
}