document.addEventListener("DOMContentLoaded", () => {
  console.log("Page loaded. Initializing gallery...");

  // Select all figures
  const figures = document.querySelectorAll("figure");

  // Add tabindex and event listeners
  figures.forEach((figure, index) => {
    figure.setAttribute("tabindex", "0"); // Make figure focusable

    // onmouseover and onmouseleave
    figure.addEventListener("mouseover", () => {
      figure.style.transform = "scale(1.1)";
    });
    figure.addEventListener("mouseleave", () => {
      figure.style.transform = "scale(1)";
    });

    // onfocus and onblur
    figure.addEventListener("focus", () => {
      figure.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.3)";
    });
    figure.addEventListener("blur", () => {
      figure.style.boxShadow = "none";
    });

    // Log events for debugging
    console.log(`Tabindex added to figure ${index + 1}`);
  });
});
