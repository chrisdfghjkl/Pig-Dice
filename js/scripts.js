//Business Logic --------------------
function Player() {
  this.totalScore = 0;
  this.roundScore = 0;
  this.currentRoll = 0;
};

Player.prototype.diceRoll = function() {
  this.currentRoll = Math.floor(Math.random() * 6) + 1;
  if (this.currentRoll === 1) {
    this.roundScore = 0;
    alert("you rolled 1, sorry :(");
  
  } else if (this.currentRoll !== 1) {
    this.roundScore += this.currentRoll
  }
  console.log("You rolled:" + this.currentRoll)
};

Player.prototype.bankScore = function() {
  this.totalScore = this.totalScore + this.roundScore;
  this.roundScore = 0;
};

//User Interface Logic -----------------

$(document).ready(function() {
  let player1 = new Player();
  let player2 = new Player();

  $("button#start-game").click(function() {
    $(".col-md-5").slideDown();
    $("#start-game").fadeOut();
  });

  $("button#new-game").click(function() {
    location.reload();
  });

  //player 1 roll --------
  
  $("button#player1-roll").click(function() {
    player1.diceRoll();
    $("#player1-current").html(player1.currentRoll);
    $("#player1-round").html(player1.roundScore);
    if (player1.currentRoll === 1) {
      $(".player1-turn").hide();
      $(".player2-turn").show();
    }
  });

  //player 1 hold -------
  
  $("button#player1-hold").click(function() {
    player1.bankScore();
    $("#player1-total").html(player1.totalScore);
    $("#player1-round").html("0");

    $(".player1-turn").hide();
    $(".player2-turn").show();

    if (player1.totalScore >= 100) {
      $("#players").fadeOut();
      $("#banner-p1").fadeIn();
      $("#new-game").fadeIn();
    }
  });

  //player 2 roll------------
  $("button#player2-roll").click(function() {
    player2.diceRoll();
    $("#player2-current").html(player2.currentRoll);
    $("#player2-round").html(player2.roundScore);
    if (player2.currentRoll === 1) {
      $(".player2-turn").hide();
      $(".player1-turn").show();
    }
  });

  //player 2 hold -------------

  $("button#player2-hold").click(function() {
    player2.bankScore();
    $("#player2-total").html(player2.totalScore);
    $("#player2-round").html("0");

    $(".player2-turn").hide();
    $(".player1-turn").show();

    if (player2.totalScore >= 100) {
      $("#players").fadeOut();
      $("#banner-p2").fadeIn();
      $("#new-game").fadeIn();
    }
  });

});