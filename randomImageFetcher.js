const randomImage = document.querySelector(".img");

// Declarations
const imageGenerator = document.querySelector("#new-image");

imageGenerator.addEventListener("click", generateImage);

// Image generated on load
generateImage();

// A function declaration so it can be called by an event listener. This way, just the image can be reset if the person likes the quote
function generateImage() {
  fetch("https://source.unsplash.com/random")
    .then(function(response) {
      if (!response.ok) {
        console.log(response);
        return new Error(response);
      }
      return response.blob();
    })
    .then(function(photoBlob) {
      var objectURL = URL.createObjectURL(photoBlob);
      randomImage.src = objectURL;
    })
    .catch(function(err) {
      console.log(err);
    });
}
