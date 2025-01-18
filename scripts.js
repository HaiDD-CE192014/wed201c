document.addEventListener("DOMContentLoaded", () => {
  console.log("Page loaded. Initializing gallery...");

  // Select the preview element
  const preview = document.getElementById("image");

  // Select all images within the gallery
  const images = document.querySelectorAll("#gallery img");

  // Define the upDate function to handle mouseover events
  function upDate(previewPic) {
    console.log("Mouse over image:", previewPic.alt, previewPic.src);

    // Update the preview text with the alt text of the hovered image
    preview.textContent = previewPic.alt;

    // Update the background image of the preview div
    preview.style.backgroundImage = `url('${previewPic.src}')`;
    preview.style.backgroundSize = "cover";
    preview.style.backgroundPosition = "center";
  }

  // Define the undo function to handle mouseleave events
  function undo() {
    console.log("Mouse left the image");

    // Reset the preview text to the default message
    preview.textContent = "Hover over an image below to display here.";

    // Reset the background image of the preview div
    preview.style.backgroundImage = "none";
  }

  // Add event listeners to each image in the gallery
  images.forEach((img) => {
    // Bind the upDate function to the mouseover event
    img.addEventListener("mouseover", () => upDate(img));

    // Bind the undo function to the mouseleave event
    img.addEventListener("mouseleave", undo);
  });

  console.log("Gallery initialized successfully.");
});
