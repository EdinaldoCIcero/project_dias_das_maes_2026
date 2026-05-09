async function exportImage(){

    const card = document.querySelector( ".card[style*='block']");

    const canvas = await html2canvas(card);

    const link = document.createElement("a");

    link.download = "dia-das-maes.png";

    link.href = canvas.toDataURL();

    link.click();
}