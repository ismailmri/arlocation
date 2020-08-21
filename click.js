AFRAME.registerComponent('change-color-on-click', {
    // Could use a schem to preserve the color! then simply change it on update
    // if clicked?
    init: function () {
    let COLORS = [
    'pink',
    'blue',
    'yellow',
    'red',
    'peachpuff',
    '#2EAFAC',
    '#BAE'];
    this.el.addEventListener('textfontset', function (evt) {
    let randomIndex = Math.floor(Math.random() * COLORS.length);
    let newColor = COLORS[randomIndex];
    this.setAttribute('color', newColor);
    // console.log('I was clicked at: ', evt.detail.intersection.point, "and my new color is: ", newColor);
    });
    }
    });






AFRAME.registerComponent("model", {
    init: function () {
    this.el.addEventListener("click", function (e) {
      console.log("I was clicked at: ", e.detail.intersection.point);
     });
    }
});

// AFRAME.registerComponent("off", {
//     init: function() {
//       let el = this.el;
//       this.ready = false;
//         el.addEventListener("textfontset", function() {
//         this.ready = true;
//       }.bind(this));
//     },
//     tick: function() {
//       let el = this.el;
//       if ( this.ready === false) {
//         el.setAttribute("value", Math.floor(Math.random() * 15) + "% OFF YOUR ORDER!");
//         // console.log(el);
//           console.log(this.ready);
//           return;
//       } 
//     }
// });



AFRAME.registerComponent("off", {
    init: function() {
    
        let OFFERS = [
            "You Get FREE Shisha!",
            "Sorry maybe next time.",
            "A FREE Piece Of Cake!",
            "Sorry maybe next time.",
            "You Got A FREE Drink!",
            "5% OFF YOUR MEAL!",
            "Sorry maybe next time.",
            "Sorry maybe next time.",
            "You Got A FREE side dish!",
            "Sorry maybe next time.",
            "FREE Piece Of Cake!"
        ];
      let el = this.el;
        el.addEventListener("textfontset", function() {
            let randomIndex = Math.floor(Math.random() * OFFERS.length);
            let newOFFER = OFFERS[randomIndex];
                el.setAttribute("value", newOFFER);
                  console.log(newOFFER);
      }.bind(this));
    },
});