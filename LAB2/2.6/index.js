var table = [
  [1, "a", "i", "j", "q", "y"],
  [2, "b", "k", "r"],
  [3, "c", "g", "l", "s"],
  [4, "d", "m", "t"],
  [5, "e", "h", "n", "x"],
  [6, "u", "v", "w"],
  [7, "o", "z"],
  [8, "f", "p"],
];

$(document).ready(function () {
  $("#submitbtn").click(function () {
    var name1 = $("#textbox").val();
    //    console.log(namef);
    name1 = name1.toLowerCase();
    const namef = name1.split("");
    console.log(namef);
    var sum = 0;
    namef.forEach(function (chr) {
      table.forEach(function (element) {
        element.forEach(function (row) {
          if (row === chr) {
            sum += parseInt(element[0]);
          }
        });
      });
    });

    var sum3 = 0;
    if (sum === 11 || sum === 22 || sum === 33) {
      sum3 = sum;
    } else {
      var sum2 = sum;
      sum2 = sum2.toString();
      sum2 = sum2.split("");
      console.log(sum2);

      sum2.forEach(function (element) {
        sum3 += parseInt(element);
      });
    }

    console.log(sum);

    console.log(sum3);

    var finalStr = "";

    switch (sum3) {
      case 1:
        finalStr = "You radiate with a dynamic and efficient energy";
        break;
      case 2:
        finalStr = "You appear friendly and unpretentious";
        break;
      case 3:
        finalStr = "You are uplifting, inspiring and charming";
        break;
      case 4:
        finalStr =
          "You love the intimacy, consistency, and the security a family provides";
        break;
      case 5:
        finalStr = "Your a stimulating person";
        break;
      case 6:
        finalStr = "You radiate understanding and compassion";
        break;
      case 7:
        finalStr = "You seem mysterious and different";
        break;
      case 8:
        finalStr = "You appear strong and powerful.";
        break;
      case 9:
        finalStr = "You have an impressive and aristocratic bearing.";
        break;
      case 11:
        finalStr =
          "You have worked hard to gain confidence and overcome, at least to some extent, an in-born shyness";
        break;
      case 22:
        finalStr = "You radiate reliability and consistency";
        break;
      case 33:
        finalStr = "You inspire confidence";
        break;
      default:
        break;
    }

    $(".box").html("<h4>" + finalStr + "</h4>");
    $(".box").slideDown();

    return false;
  });
});
