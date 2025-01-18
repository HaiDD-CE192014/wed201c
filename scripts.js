function upDate(previewPic) {
  // Log details for debugging
  console.log("Mouse over image:", previewPic.src, previewPic.alt);

  // Update background image and text
  const imageDiv = document.getElementById("image");
  imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
  imageDiv.textContent = previewPic.alt;
}

function undo() {
  // Log for debugging
  console.log("Mouse left image");

  // Reset background image and text
  const imageDiv = document.getElementById("image");
  imageDiv.style.backgroundImage = "";
  imageDiv.textContent = "Hover over an image below to display here.";
}
