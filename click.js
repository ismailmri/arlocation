AFRAME.registerComponent('change-color-on-click', {
    // Could use a schem to preserve the color! then simply change it on update
    // if clicked?
    init: function () {
    let COLORS = [
    'pink',
    //'blue',
    'yellow',
    'red',
    'peachpuff',
    '#2EAFAC',
    '#BAE'];
    this.el.addEventListener('click', function (evt) {
    let randomIndex = Math.floor(Math.random() * COLORS.length);
    let newColor = COLORS[randomIndex];
    this.setAttribute('color', newColor);
    console.log('I was clicked at: ', evt.detail.intersection.point, "and my new color is: ", newColor);
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

AFRAME.registerComponent("off", {
    init: function() {
      let el = this.el;
      this.ready = false;
        el.addEventListener("textfontset", function() {
        this.ready = true;
      }.bind(this));
    },
    tick: function() {
      let el = this.el;
      if (this.ready === false) {
          console.log(this.ready);
          el.setAttribute("value", "You Got " + Math.floor(Math.random() * 15) + "% OFF");
          return;
      }
    }
});

// tick: function() {
//     let el = this.el;
//     el.setAttribute("value", "You Got " + Math.floor(Math.random() * 15) + "% OFF")
//         if (el.setAttribute("value", "You Got " + Math.floor(Math.random() * 15) + "% OFF") > 0) {
//           return el.setAttribute("value", "You Got " + Math.floor(Math.random() * 15) + "% OFF");
//         } else {
//             return el.setAttribute("value", "Sorry, maybe next time.")
//         }      
//   }