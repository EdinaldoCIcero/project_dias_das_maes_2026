const modal = document.getElementById("modal");

const editBtn = document.getElementById("editBtn");

const saveBtn = document.getElementById("saveBtn");

const saveImageBtn =
document.getElementById("saveImageBtn");

const motherName =
document.getElementById("motherName");

const captionName =
document.getElementById("captionName");

const motherText =
document.getElementById("motherText");

const profileImage =
document.getElementById("profileImage");

const mainImage =
document.getElementById("mainImage");

const inputName =
document.getElementById("inputName");

const inputText =
document.getElementById("inputText");

const inputImage =
document.getElementById("inputImage");

const templateSelect =
document.getElementById("templateSelect");

/* ABRIR MODAL */

editBtn.addEventListener("click", () => {
    modal.classList.remove("hidden");
});

/* SALVAR */

saveBtn.addEventListener("click", () => {

    const file = inputImage.files[0];

    if(file){

        const reader = new FileReader();

        reader.onload = function(e){

            const imageBase64 = e.target.result;

            updateCard(imageBase64);

        };

        reader.readAsDataURL(file);

    }else{

        updateCard(profileImage.src);

    }

});

/* UPDATE */

function updateCard(image){

    const data = {

        name: inputName.value,
        text: inputText.value,
        image: image,
        template: templateSelect.value

    };

    saveData(data);

    renderData(data);

    modal.classList.add("hidden");
}

/* RENDER */

function renderData(data){

    /* ESCONDER TODOS */

    document
    .getElementById("capture")
    .style.display = "none";

    document
    .getElementById("floralCard")
    .style.display = "none";

    document
    .getElementById("elegantCard")
    .style.display = "none";

    document
    .getElementById("whatsappCard")
    .style.display = "none";

    document
    .getElementById("spotifyCard")
    .style.display = "none";

    
    /* INSTAGRAM */

    if(data.template === "instagram"){

        const card =
        document.getElementById("capture");

        card.style.display = "block";

        motherName.textContent = data.name;

        captionName.textContent = data.name;

        motherText.textContent = data.text;

        profileImage.src = data.image;

        mainImage.src = data.image;
    }

    /* FLORAL */

    else if(data.template === "floral"){

        const floral =
        document.getElementById("floralCard");

        floral.style.display = "block";

        document
        .getElementById("floralProfile")
        .src = data.image;

        document
        .getElementById("floralMainImage")
        .src = data.image;

        document
        .getElementById("floralName")
        .textContent = data.name;

        document
        .getElementById("floralText")
        .textContent = data.text;
    }

    /* ELEGANT */

    else if(data.template === "elegant"){

        const elegant =
        document.getElementById("elegantCard");

        elegant.style.display = "block";

        document
        .getElementById("elegantImage")
        .src = data.image;

        document
        .getElementById("elegantProfile")
        .src = data.image;

        document
        .getElementById("elegantName")
        .textContent = data.name;

        document
        .getElementById("elegantText")
        .textContent = data.text;
    }


    /* whatsapp */
    else if(data.template === "whatsapp"){

        const whatsapp =
        document.getElementById("whatsappCard");

        whatsapp.style.display = "block";

        document
        .getElementById("waProfile")
        .src = data.image;

        document
        .getElementById("waName")
        .textContent = data.name;

        document
        .getElementById("waText")
        .textContent = data.text;
    }

    /* spotify */
    else if(data.template === "spotify"){

        const spotify =
        document.getElementById("spotifyCard");

        spotify.style.display = "block";

        document
        .getElementById("spotifyImage")
        .src = data.image;

        document
        .getElementById("spotifyName")
        .textContent = data.name;

        document
        .getElementById("spotifyText")
        .textContent = data.text;
    }

    

    
}
/* LOAD */

window.addEventListener("load", () => {

    const data = loadData();

    if(data){

        renderData(data);

    }

});

/* EXPORT */

saveImageBtn.addEventListener(
    "click",
    exportImage
);