function Fungsi() {
    var input, filter, cards, cardContainer, title, i;
    input = document.getElementById("Input");
    filter = input.value.toUpperCase();
    cardContainer = document.getElementsByClassName("CardMemberBox")[0];
    cards = cardContainer.getElementsByClassName("CardMember");
    for (i = 0; i < cards.length; i++) {
      title = cards[i].querySelector(".CardProfile");
      if (title.innerText.toUpperCase().indexOf(filter) > -1) {
        cards[i].style.display = "";
      } else {
        cards[i].style.display = "none";
      }
    }
}

// function Fungsi() {
//     var input, filter, cards, cardContainer, title, i;
//     input = document.getElementById("Input");
//     filter = input.value.toUpperCase();
//     cardContainer = document.getElementsByClassName("CardMemberBox")[0];
//     cards = cardContainer.getElementsByClassName("CardMember");
//     cards = Array.prototype.slice.call(cards); // ubah elemen cards menjadi array
//     cards.sort(function(a, b) {
//         var aTitle = a.querySelector(".CardProfile").innerText.toUpperCase();
//         var bTitle = b.querySelector(".CardProfile").innerText.toUpperCase();
//         if (aTitle < bTitle) return -1;
//         if (aTitle > bTitle) return 1;
//         return 0;
//     });
//     for (i = 0; i < cards.length; i++) {
//       title = cards[i].querySelector(".CardProfile");
//       if (title.innerText.toUpperCase().indexOf(filter) > -1) {
//         cards[i].style.display = "";
//       } else {
//         cards[i].style.display = "none";
//       }
//     }
// }
