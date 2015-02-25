var Card = (function(){

  function Card(face) {
    this.face = face;
    this.$el  = $this.generateEl(face);
  }

  Card.prototype = {

    generateEl: function() {
      //declaring our variable
      var $el;

      //creating an empty div in jquery
      $el = $("<div>");
      //setting the data to face
      $el.data("face", face);
      //adding classes card and back
      $el.addClass("card back");
      //setting the text
      $el.text(face);

      return $el;
    },

    reveal: function() {
      this.$el.removeClass("back").addClass("front");
    },

    conceal: function() {
      this.$el.removeClass("front").addClass("back");
    },

    matched: function(){
      this.$el.addClass("matched");
    },
    
    //This is what is happening in Matches:
    //var card1 = new Card("A");
    //var card2 = new Card("J");
    //var card3 = new Card("A");

    //card1.matches(card2); //false
    //card2.matches(card3); //true

    matches: function(){
      // checking to make sure they didn't clcik on the same card
      if (card === this){
        return false;
      }
      //otherwise return whether I have a match
      return this.face === card.face;
    },

    render: function() {
      return this.$el;
    }
  }

  return Card;

})();