console.log("Scoops Ahoy connected to app.js!");

const displayModal = () => {
  $("#myModal").css("display", "flex");
};

const closeModal = () => {
  $(".close").on("click", event => {
    $("#chat-message").text("");
    $("#myModal").css("display", "none");
    $("#input-box1").val("");
  });
};

// const resetInput = () => {
//   $("#chat-message").text("");
// };

let arrKid = [
  "Turns out I'm a pretty damn good babysitter",
  "Man, kids are the worst! Who needs 'em, anyway?",
  "I will turn your monster kids into angels!",
  "Kids know they can't mess with me!"
];

var isValidZip = function(value) {
  /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(value);
};

const endpoint = "https://project.wnyc.org/ice-cream/data/places.json";

let zipCode = "";
let ans = [];
let html = "";

const callAPI = async () => {
  try {
    console.log(endpoint);
    const iceCreamNear = await fetch(endpoint);
    console.log(iceCreamNear);
    const data = await iceCreamNear.json();
    console.log(data);
    const filterZip = function() {
      ans = data.filter(data => data.address.includes(zipCode));
      return ans;
    };
    console.log(filterZip());
    displayApi();
  } catch (err) {
    console.log(err);
  }
};

const displayApi = () => {
  html = "<ul>";
  // callAPI();
  console.log(ans);
  for (let i = 0; i < ans.length; i++) {
    // html += "<li>something</li>";
    html += `<li>${ans[i].name} address: ${ans[i].address}</li>`;
  }
  html += "</ul>";
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
      closeModal();
      resetInput();
    } else if (question.includes("where " || "located" || "found" || "find")) {
      //   $("#myModal").css("display", "flex");
      displayModal();

      $("#chat-message").text("Starcourt mall, Hawkins Indiana");
      closeModal();
    } else if (question.includes("kid")) {
      displayModal();
      $("#chat-message").text(arrKid[Math.floor(Math.random() * 3) + 1]);
      closeModal();
    } else if (question.includes("zip")) {
      zipCode = question.slice(-6, -1);
      console.log(typeof zipCode);
      // let html = "<ul>";
      // callAPI();
      callAPI();
      // for (let i = 0; i < ans.length; i++) {
      //   html += `<li>${ans[i].name}</li>`;
      // }
      // html += "</ul>";
      $("#chat-message").append(html);
      setTimeout(displayModal(), 3000);
      closeModal();
    } else {
      displayModal();
      $("#chat-message").text("Yeah, that's a no.");
      closeModal();
    }
  });
});
