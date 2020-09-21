document.addEventListener("DOMContentLoaded", () => {
  alert(
    "hello welcome to the game\ngame rules:\n1.flip two cards\n2.if its a match then you get +1"
  );

  cardArray = [
    {
      name: "cheeseburger",
      img: "images/cheeseburger.png",
    },
    {
      name: "fries",
      img: "images/fries.png",
    },
    {
      name: "hotdog",
      img: "images/hotdog.png",
    },
    {
      name: "icecream",
      img: "images/ice-cream.png",
    },
    {
      name: "milkshake",
      img: "images/milkshake.png",
    },
    {
      name: "pizza",
      img: "images/pizza.png",
    },

    {
      name: "cheeseburger",
      img: "images/cheeseburger.png",
    },
    {
      name: "fries",
      img: "images/fries.png",
    },
    {
      name: "hotdog",
      img: "images/hotdog.png",
    },
    {
      name: "icecream",
      img: "images/ice-cream.png",
    },
    {
      name: "milkshake",
      img: "images/milkshake.png",
    },
    {
      name: "pizza",
      img: "images/pizza.png",
    },
  ];

  grid = document.querySelector(".grid");
  var cardChosen = [];
  var cardChosenId = [];
  var cardMatched = [];
  var score = 0;
  function checkForMatch() {
    if (cardChosen[0] === cardChosen[1]) {
      alert("its a match");
      ++score;
      cardMatched.push(cardChosenId[0]);
      cardMatched.push(cardChosenId[1]);
      console.log(cardMatched);
      if (cardMatched.length === 12) {
        alert("GAME OVER");
      }

      var sc = document.getElementById("result");
      sc.innerHTML = score;
      var card1 = document.querySelectorAll("img");
      card1[cardChosenId[0]].setAttribute("src", "images/white.png");
      card1[cardChosenId[1]].setAttribute("src", "images/white.png");

      //   while (cardChosen.length != 0) {
      //     cardChosen.pop();
      //     cardChosenId.pop();
      //   }
    } else {
      var card1 = document.querySelectorAll("img");
      card1[cardChosenId[0]].setAttribute("src", "images/blank.png");
      card1[cardChosenId[1]].setAttribute("src", "images/blank.png");
      //   while (cardChosen.length != 0) {
      //     cardChosen.pop();
      //     cardChosenId.pop();
      //   }
    }
    cardChosen = [];
    cardChosenId = [];
  }
  function flipCard() {
    var cardId = this.getAttribute("data-id");
    if (cardMatched.indexOf(cardId) != -1) {
      return;
    } else {
      cardChosenId.push(cardId);
      cardChosen.push(cardArray[cardId].name);
      this.setAttribute("src", cardArray[cardId].img);
      if (cardChosen.length === 2) {
        setTimeout(checkForMatch, 500);
      }
    }
  }
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement("img");

      card.setAttribute("src", "images/blank.png");
      card.setAttribute("data-id", i);

      grid.appendChild(card);
      card.addEventListener("click", flipCard);
    }
  }
  createBoard();
});
