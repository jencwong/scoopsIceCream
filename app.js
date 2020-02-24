console.log("Scoops Ahoy connected to app.js!");

const displayModal = () => {
  $("#myModal").css("display", "flex");
};

let arrKid = [
  "Turns out I'm a pretty damn good babysitter",
  "Man, kids are the worst! Who needs 'em, anyway?",
  "I will turn your monster kids into angels!",
  "Kids know they can't mess with me!"
];

var isValidZip = function(value) {
  /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(value);
};

const endpoint = "https://project.wnyc.org/ice-cream/data/places.json​";

const callAPI = async () => {
  try {
    const iceCreamNear = await fetch(endpoint);
    console.log(iceCreamNear);
    const data = await iceCreamNear.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

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

  $("#button1").on("click", event => {
    event.preventDefault();
    question = $("#input-box1")
      .val()
      .toLowerCase();
    console.log(question);

    if (question.includes("scoops ahoy")) {
      //   $("#myModal").css("display", "flex");
      displayModal();

      $("#chat-message").text("Scoops Ahoy!");
    } else if (question.includes("where " || "located" || "found" || "find")) {
      //   $("#myModal").css("display", "flex");
      displayModal();

      $("#chat-message").text("Starcourt mall, Hawkins Indiana");
    } else if (question.includes("kid")) {
      displayModal();
      $("#chat-message").text(arrKid[Math.floor(Math.random() * 3) + 1]);
    } else if (question.includes("zip")) {
      let zipCode = question.slice(-6, -1);
      console.log(typeof zipCode);
      callAPI();
    }
  });
});
