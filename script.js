// Selecting all required elements
const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".gallery .image");

window.onload = () => {
  // After window loaded
  filterItem.onclick = (selectedItem) => {
    // If user clicks on filterItem div
    if (selectedItem.target.classList.contains("item")) {
      // If user selected item has .item class
      filterItem.querySelector(".active").classList.remove("active"); // Remove the active class which is in the first item
      selectedItem.target.classList.add("active"); // Add that active class on user selected item
      let filterName = selectedItem.target.getAttribute("data-name"); // Getting data-name value of user selected item and storing in filterName variable
      filterImg.forEach((image) => {
        let filterImages = image.getAttribute("data-name"); // Getting image data-name value
        // If user selected item data-name value is equal to image data-name value or user selected item data-name value is "all"
        if (filterImages == filterName || filterName == "all") {
          image.classList.remove("hide"); // First remove the hide class from the image
          image.classList.add("show"); // Add show class to image
        } else {
          image.classList.add("hide"); // Add hide class to image
          image.classList.remove("show"); // Remove show class from the image
        }
      });
    }
  };

  for (let i = 0; i < filterImg.length; i++) {
    filterImg[i].setAttribute("onclick", "preview(this)"); // Adding onclick attribute to all available images
  }
};

// Fullscreen image preview function
// Selecting all required elements
const previewBox = document.querySelector(".preview-box"),
  categoryName = previewBox.querySelector(".title p"),
  previewImg = previewBox.querySelector("img"),
  closeIcon = previewBox.querySelector(".icon"),
  shadow = document.querySelector(".shadow");

function preview(element) {
  // Once user clicks on any image, remove the scroll bar of the body, so user can't scroll up or down
  document.querySelector("body").style.overflow = "hidden";
  let selectedPrevImg = element.querySelector("img").src; // Getting user clicked image source link and storing in a variable
  let selectedImgCategory = element.getAttribute("data-name"); // Getting user clicked image data-name value
  previewImg.src = selectedPrevImg; // Passing the user clicked image source to preview image source
  categoryName.textContent = selectedImgCategory; // Passing user clicked data-name value to category name
  previewBox.classList.add("show"); // Show the preview image box
  shadow.classList.add("show"); // Show the light grey background
  closeIcon.onclick = () => {
    // If user clicks on close icon of preview box
    previewBox.classList.remove("show"); // Hide the preview box
    shadow.classList.remove("show"); // Hide the light grey background
    document.querySelector("body").style.overflow = "auto"; // Show the scroll bar on body
  };
}
