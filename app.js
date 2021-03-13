new Vue({
    el: "#vue-app",
    data: {
        sr: "Start",
        isHidden:true,
        width: 100,
        ended: false,
        decHealth: function(){
            this.width -= 5;
            if(this.width <= 0){
                this.ended = true;
                this.sr = "Restart";
                this.isHidden = !this.isHidden;
            }
        },
        res: function(){
            this.width = 100;
            this.ended = false; 
        }
    }

});