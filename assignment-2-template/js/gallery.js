document.addEventListener("DOMContentLoaded", function() {
  // Got references to the featured image, image title, thumbnail list, and thumbnails
  var featuredImage = document.getElementById("featured-image");
  var imageTitle = document.getElementById("image-title");
  var thumbnailList = document.getElementById("thumbnail-list");
  var thumbnails = thumbnailList.getElementsByTagName("img");

  // Added click event listeners to the thumbnail images
  for (var i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener("click", function(event) {
      // Got the clicked thumbnail image and the URL and alt text of the corresponding large image
      var thumbnail = event.target;
      var largeImageSrc = thumbnail.src.replace("-small", "-large");
      var imageAlt = thumbnail.alt;

      // Updated the featured image and image title with the new image and alt text
      featuredImage.src = largeImageSrc;
      imageTitle.textContent = imageAlt;

      // Removed the "active" class from all thumbnail images
      for (var j = 0; j < thumbnails.length; j++) {
        thumbnails[j].classList.remove("active");
      }

      // Added the "active" class to the clicked thumbnail image
      thumbnail.classList.add("active");
    });
  }
});
