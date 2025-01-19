document.addEventListener("DOMContentLoaded", () => {
  console.log("Page loaded. Initializing gallery...");

  const preview = document.getElementById("image");
  const figures = document.querySelectorAll("#gallery figure");

  function updatePreview(previewPic) {
    console.log("Hover or focus on image:", previewPic.alt);
    preview.textContent = previewPic.alt;
    preview.style.backgroundImage = `url('${previewPic.src}')`;
    preview.style.transform = "scale(1.05)";
  }

  function resetPreview() {
    console.log("Mouse left or focus lost");
    preview.textContent = "Hover over an image below to display here.";
    preview.style.backgroundImage = "none";
    preview.style.transform = "scale(1)";
  }

  figures.forEach((figure) => {
    const img = figure.querySelector("img");

    img.addEventListener("mouseover", () => updatePreview(img));
    img.addEventListener("mouseleave", resetPreview);

    figure.addEventListener("focus", () => updatePreview(img));
    figure.addEventListener("blur", resetPreview);
  });

  console.log("Gallery initialized successfully.");
});
