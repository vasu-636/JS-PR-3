 $(document).ready(function () {
      for (let i = 1; i <= 10; i++) {
        $("#box-container").append(`<input type="number" id="box${i}" class="input-box">`);
      }

      $("#random").on("click", function () {
        $(".input-box").removeClass("highlight");
        for (let i = 1; i <= 10; i++) {
          let randomValue = Math.floor(Math.random() * 100);
          $(`#box${i}`).val(randomValue);
        }
      });

      $("#clear").on("click", function () {
        for (let i = 1; i <= 10; i++) {
          $(`#box${i}`).val('');
        }
       
      });

      $("#max").on("click", function () {
        let max = -Infinity;
        let maxId = null;
      $(".input-box").removeClass("highlight");
        for (let i = 1; i <= 10; i++) {
          let val = parseInt($(`#box${i}`).val());
          if ( val > max) {
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
        for (let i = 1; i <= 10; i++) {
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