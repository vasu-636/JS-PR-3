$(document).ready(function () {
  let boxCount = parseInt(prompt("✨ How many input boxes do you want?", "10"));

  if (isNaN(boxCount) || boxCount <= 0) {
    alert("Invalid number! Defaulting to 10 boxes.");
    boxCount = 10;
  }

  for (let i = 1; i <= boxCount; i++) {
    $("#box-container").append(`<input type="number" id="box${i}" class="input-box">`);
  }

  $("#random").on("click", function () {
    $(".input-box").removeClass("highlight");
    for (let i = 1; i <= boxCount; i++) {
      let randomValue = Math.floor(Math.random() * 100);
      $(`#box${i}`).val(randomValue);
    }
  });

  $("#clear").on("click", function () {
    for (let i = 1; i <= boxCount; i++) {
      $(`#box${i}`).val('');
    }
    $(".input-box").removeClass("highlight");
  });

  $("#max").on("click", function () {
    let max = -Infinity;
    let maxId = null;
    $(".input-box").removeClass("highlight");
    for (let i = 1; i <= boxCount; i++) {
      let val = parseInt($(`#box${i}`).val());
      if (val > max) {
        max = val;
        maxId = `#box${i}`;
      }
    }
    if (maxId) {
      $(maxId).addClass("highlight");
    }
  });

  $("#min").on("click", function () {
    let min = Infinity;
    let minId = null;
    $(".input-box").removeClass("highlight");
    for (let i = 1; i <= boxCount; i++) {
      let val = parseInt($(`#box${i}`).val());
      if (!isNaN(val) && val < min) {
        min = val;
        minId = `#box${i}`;
      }
    }
    if (minId) {
      $(minId).addClass("highlight");
    }
  });
});
