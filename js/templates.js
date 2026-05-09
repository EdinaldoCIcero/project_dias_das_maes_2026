function applyTemplate(template){

    const card = document.getElementById("capture");

    card.classList.remove(
        "instagram",
        "floral",
        "elegant"
    );

    card.classList.add(template);
}