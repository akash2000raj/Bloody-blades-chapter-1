import Phaser from '../lib/phaser.js';




export  default class Loading extends Phaser.Scene{





    constructor(){


        super('loading');
    
        
this. width=1;
this.percentagetext;
this.dots=[]; 
this.framecount =0;
this.r=0;
    }

    



    /*preload()
    {

    }*/

    create()
    {

        this.cameras.main.fadeIn(500,0,0,0);
var height =5;


this.physics.add.image(20,20,'w_blade').setAlpha(0.3).setAngularVelocity(-250);
this.physics.add.image(400,110,'w_blade').setAlpha(0.3).setAngularVelocity(150).setScale(1.3);
this.physics.add.image(20,850,'w_blade').setAlpha(0.3).setAngularVelocity(-450).setScale(0.5).setFlipY(true);
this.physics.add.image(450,800,'w_blade').setAlpha(0.3).setAngularVelocity(350).setScale(0.8).setFlipY(true);

let bar = this.add.rectangle(15,500,this.width,height,0xffffff,1).setOrigin(0,0)
var k=0;
var t =this.time.addEvent({

delay:10,
callbackScope:this,
callback:()=>
{
bar.displayWidth+=2;
let r = Phaser.Math.Percent(bar.displayWidth,1,450)
this.percentagetext.text= Phaser.Math.FloorTo(r*100)+'%';
if(bar.displayWidth>=450)
{
    t.remove();
   this.scene.start('gameplay')
}

},loop:true

});




this.percentage()


this.add.text(170,600,'Loading',{
    
    fontSize:'30px'
})
  // dots 

  for(var i=0;i<3;i++)
  {

  this.dots[i]= this.add.text(297+10*i,592,'.',{
    
        fontSize:'50px',
        color:'black'
    })

  }


this.time.addEvent({

    delay:100,
    loop:true,
    callback:()=>
    {
        k++;
k=k%3;
if(k==0)
{
    this.dots[0].setColor('white')
    this.dots[1].setColor('black')
    this.dots[2].setColor('black')
}
else if(k==1)
{
    this.dots[0].setColor('black')
    this.dots[2].setColor('black')
    this.dots[1].setColor('white')
}
else if(k==2)
{ this.dots[0].setColor('black')
this.dots[1].setColor('black')
    this.dots[2].setColor('white')
}

    },
    callbackScope:this
})





  }
    




    

    update()
    {
  

    }

percentage()
{

this.percentagetext=this.add.text(230,540,'1%',{


    fontSize:'30px'
})


}


}
