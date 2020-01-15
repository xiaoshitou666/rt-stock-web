// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
       
        graphics: null,
        rx:-300,
        ry:0
        
    },

    // LIFE-CYCLE CALLBACKS:

     onLoad () {

     },

     random (m,n){
        return Math.floor(Math.random()*(m - n) + n);
            
        },

     update: function (dt) {

        cc.log(dt); 
        this.graphics.moveTo(this.rx, this.ry);

        this.ry=Math.floor(Math.random()*(-300) + 200);
        this.rx=this.rx+Math.floor(Math.random()*(-9) + 10);
        this.graphics.lineTo(this.rx,this.ry);
        this.graphics.stroke();   
        
        if(this.rx>350){
            //clearInterval(this.update);
 
        }

    },
    start () {

        var ctx=this;
        cc.log("--ff--"); 
         ctx.graphics=ctx.addComponent(cc.Graphics);
        cc.log(this.graphics); 
        
        cc.log(ctx.graphics); 
        ctx.graphics.clear();
        ctx.graphics.lineWidth = 3;
        ctx.graphics.strokeColor = cc.Color.GREEN;
        //ctx.graphics.moveTo(ctx.rx, ctx.ry);
           
        // let m= ctx.random(1,30);
        // let rx,ry=0;
        // for(var i=-300;i<300;i=i+m){
        //     ry=ctx.random(-100,200);
        //     rx=i;
        //     ctx.graphics.lineTo(i,ry);
        //     cc.log("Square--"+m); 

        //     m= ctx.random(1,10);

        // }

        // ctx.graphics.stroke();   

        // setTimeout( function(){
        //     ctx.graphics.moveTo(rx, ry);
        //     ctx.graphics.lineTo(300,300);
        //     ctx.graphics.stroke();   
        // }, 5 * 1000 );


       // window.setInterval(ctx.update,1000);




        cc.log("Square"); 
    },

    // update (dt) {},
});
