document.addEventListener("DOMContentLoaded", () => {
  console.log("Page loaded. Initializing gallery...");

  const preview = document.getElementById("image");
  const figures = document.querySelectorAll("#gallery figure");

  function upDate(previewPic) {
    console.log("Mouse over image:", previewPic.alt, previewPic.src);
    preview.textContent = previewPic.alt;
    preview.style.backgroundImage = `url('${previewPic.src}')`;
    preview.style.backgroundSize = "cover";
    preview.style.backgroundPosition = "center";
  }

  function undo() {
    console.log("Mouse left the image");
    preview.textContent = "Hover over an image below to display here.";
    preview.style.backgroundImage = "none";
  }

  figures.forEach((figure) => {
    const img = figure.querySelector("img");

    img.addEventListener("mouseover", () => upDate(img));
    img.addEventListener("mouseleave", undo);

    figure.addEventListener("focus", () => upDate(img));
    figure.addEventListener("blur", undo);
  });

  console.log("Gallery initialized successfully.");
});
