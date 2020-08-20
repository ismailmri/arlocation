AFRAME.registerComponent("model", {
    init: function () {
    this.el.addEventListener("click", function (e) {
    
      console.log("I was clicked at: ");
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