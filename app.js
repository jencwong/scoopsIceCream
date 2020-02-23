console.log("Scoops Ahoy connected to app.js!");

$(() => {
  let currentImgIndex = 0;
  let highestIndex = $(".carousel-images").children().length - 1;

  //   next arrow button
  $(".next").on("click", () => {
    // on click, hide the first img
    $(".carousel-images")
      .children()
      .eq(currentImgIndex)
      .css("display", "none");

    // set the conditions, to increment to the next image or else reset
    if (currentImgIndex < highestIndex) {
      currentImgIndex++;
    } else {
      currentImgIndex = 0;
    }
    // display the next image
    $(".carousel-images")
      .children()
      .eq(currentImgIndex)
      .css("display", "block");
  });

  //   previous arrow button
  $(".previous").on("click", () => {
    // on click, hide the first img
    $(".carousel-images")
      .children()
      .eq(currentImgIndex)
      .css("display", "none");

    // set the condition, to decrement to the next image or else reset
    if (currentImgIndex > 0) {
      currentImgIndex--;
    } else {
      currentImgIndex = highestIndex;
    }
    // on click, hide the first img
    $(".carousel-images")
      .children()
      .eq(currentImgIndex)
      .css("display", "block");
  });
});
