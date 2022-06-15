

import Phaser from '../lib/phaser.js';
import Blade2 from '../game/Blade2.js';


export default class Game extends Phaser.Scene{




constructor()
{


    super('gameplay');
    this.jolo;
    this.gravity=1;
    this.anti_gravity=0;
    this.angle=0;
    this.blade2grp;
    this.wblade2;
    this.bblade2;
    this.score=0;
  
    this.highscore=parseInt(localStorage.getItem("best"))||0;
    this.scoreText;
    this.highscoreText;
    this.blade_velocity=50;
    this.Healthrectangle;
    this.healthbarwidth=100;
    this.game1music;
    this.game2music;
    this.bladesvelocity=150;
    this.black_blades_img=['bb1','b_blade','bb3','bb4','bb5','bb6'];
    this.white_blades_img=['wb1','w_blade','wb3','wb4','wb5','wb6'];
    this.whiteblade_texture='w_blade';
    this.blackblade_texture='b_blade';
    this.black_emmiter=false;
    this.white_emmiter=true;
} 


 /*preload() {

this.load.image('bg_black','assets/bg_black.png');
this.load.image('bg_white','assets/bg_white.png')
/*this.load.spritesheet('jolo','assets/joloanim.png',{
   frameWidth:65.6,frameHeight:60
});*/


/*this.load.image('white_player','assets/white_ball.png');
this.load.image('black_player','assets/black_ball.png');
this.load.image('blood','assets/boolod.png')

//preloding audios----

this.load.audio('gameplay1_music','assets/gameplay1st_music.mp3');
this.load.audio('gameplay2_music','assets/gameplay2_music.mp3');

//  preloading all white blades ------------
this.load.image('wb1','assets/white__blades_1.png');
this.load.image('w_blade','assets/white__blades2.png');
this.load.image('wb3','assets/white__blades_3.png');
this.load.image('wb4','assets/white__blades_4.png');
this.load.image('wb5','assets/white__blades_5.png');
this.load.image('wb6','assets/white__blades_6.png');
// preloading  all black blades----
this.load.image('bb1','assets/black__blades_1.png');
this.load.image('b_blade','assets/black__blades_2.png');
this.load.image('bb3','assets/black__blades_3.png');
this.load.image('bb4','assets/black__blades_4.png');
this.load.image('bb5','assets/black__blades_5.png');
this.load.image('bb6','assets/black__blades_6.png');


//------------ pluging loading----------

this.load.scenePlugin('rexgesturesplugin', 'src/plugins/rexgesturesplugin.min.js', 'rexGestures', 'rexGestures');


}
*/

create()
{

   this.cameras.main.fadeIn(500,0,0,0)
   this.score=0;
   let b = this.add.image(0,0,'bg_black').setOrigin(0,0).setScale(0.8);;

   
let w =this.add.image(0,430,'bg_white').setOrigin(0,0).setScale(0.8);

/*this.wblade2 = this.physics.add.image(400,200,'w_blade2').setScale(0.4).setOrigin(0.5)
this.wblade2.setAngularVelocity(-200).setVelocityX(-this.blade_velocity).setCircle(110,22,50).setImmovable();
this.bblade2 = this.physics.add.image(400,400,'b_blade2').setScale(0.4).setOrigin(0.5)
this.bblade2.setAngularVelocity(-200).setVelocityX(-this.blade_velocity).setCircle(110,22,50).setImmovable();*/
//----------- blade2 group ----

this.blade2grp = this.physics.add.group({

   classType:Blade2
   
   })
   

for(var i=1;i<=5;i++)
{

   /*var verticle_range_white_blade = Phaser.Math.Between(50,200);
   var verticle_range_black_blade = Phaser.Math.Between(420,600);
   var scale_range_blades= Phaser.Math.Between(4,8);
   var hoirzontal_range_blades = 400;*/
   
   this.wblade2 = this.blade2grp.create(0,0,this.whiteblade_texture).setScale();
   this.bblade2 = this.blade2grp.create(0,0,this.blackblade_texture).setScale();
     
   this.placing_blades(this.wblade2,this.bblade2);
  

}
this.blade2grp.setVelocityX(-this.bladesvelocity);


this.blade2grp.getChildren().forEach((blade)=>

{
   
   blade.setAngularVelocity(-200);
   blade.setCircle(120,25,30)
   blade.setImmovable(true);

})
this.jolo = this.physics.add.sprite(100,100,'white_player').setScale(0.1).setOrigin(0.5).setImmovable();
this.jolo.setCircle(200,-3,10)
//this.jolo.setAngle(30)
this.jolo.setCollideWorldBounds(true);

// animation
/*const anim =this.anims.create({

   key:'fly',
   frames:this.anims.generateFrameNumbers('jolo',{start:0,end:19}),
   frameRate:24,
   repeat:-1
});
this.jolo.play('fly');*/
//this.physics.add.collider(this.jolo,this.bblade2,this.bounce,null,this)

// control----

this.input.on('pointerdown',()=>
{
 if(this.gravity==1){
    this.jolo.setVelocityY(-200);
    this.jolo.setAngle(-20)

 }

 else if(this.anti_gravity==1)
 {
    this.jolo.setVelocityY(200);
    this.jolo.setAngle(20)
 }
  
})


this.input.on('pointerup',()=>
{
    
    this.jolo.setAngle(0)
})

//--- touch 

/*var zone = this.add.zone(0, 0, 480, 640).setOrigin(0);

//console.log(zone);
this.rexGestures.add.tap(zone,{
   tap:1
}).on('tap',(tap)=>
{
console.log(tap.worldX);
console.log(tap.worldY);
console.log('touch');
},this);*/





this.physics.add.collider(this.jolo,this.blade2grp,this.bounce,null,this);


// healthbar


this.Healthrectangle=this.add.rectangle(10,5,this.healthbarwidth,5,0x00ff00,0.8).setOrigin(0,0);
console.log(this.Healthrectangle);
 

// music 

this.game1music = this.sound.add('gameplay1_music',{

   loop:false,
   volume:0.5
});
this.game1music.play();


this.game2music = this.sound.add('gameplay2_music',{

   loop:true,
   volume:0.5
})


this.game1music.once('complete',()=>
{
  this.game2music.play();

  this.blade2grp.setVelocityX(-300);
  this.blade2grp.getChildren().forEach((blade)=>
 
{
   
   blade.setAngularVelocity(-350);
 

})


})
this.exhaust();
this.show_score();
}





update()
{
    this.jolo_gravity_sysytem();
    this.recycleblades();
   if(this.Healthrectangle.width<30)
{
   this.Healthrectangle.fillColor=0xff0000;
  
}


 if(this.Healthrectangle.width<=0)
{
   //this.displayscore = this.score;

this.highscore = Math.max(this.score,this.highscore);
   
localStorage.setItem('best',this.highscore);
this.game2music.stop();


   this.scene.start('gameover',{
current:this.score,
heighest:this.highscore

   });
    


  
}

this.blades_changer();

//this.changetexture_blade(this.score);
}


bounce()
{
this.cameras.main.shake(100,0.01)


this.Healthrectangle.width-=0.2;

this.cameras.main.flash(500,255,0,0);
//this.blood();
//console.log(this.joloHealth);

}


exhaust()
{

const particle = this.add.particles('flame');
var emitter = particle.createEmitter({

   on:false,
   quantity:4,
   lifespan:200,
   gravityY:50,
   scale:{start:0.1,end:0.01},
   
   alpha:1,
   speed:500,
   angle:{min:170,max:190}





})

particle.emitParticleAt(this.jolo.x,this.jolo.y)




}


blood1()
{

   const blood = this.add.particles('black_player');

   var emitter = blood.createEmitter({
   on:false,
   quantity:4,
   lifespan:200,
   gravityY:50,
   scale:{start:0.1,end:0.01},
   
   alpha:0.1,
   speed:500,
   angle:{min:170,max:190}
   
   
   
   
   
   
   })
   if(this.white_emmiter)
   {
      blood.emitParticleAt(this.jolo.x,this.jolo.y)
   }
  


 
}
blood2()
{

   const blood = this.add.particles('white_player');

   var emitter = blood.createEmitter({
   on:false,
   quantity:4,
   lifespan:200,
   gravityY:50,
   scale:{start:0.1,end:0.01},
   
   alpha:0.1,
   speed:500,
   angle:{min:170,max:190}
   
   
   
   
   
   
   })
   
   if(this.black_emmiter)
   {

      blood.emitParticleAt(this.jolo.x,this.jolo.y);
   }

 
}



placing_blades(w_blade,b_blade)
{



   var verticle_range_white_blade = Phaser.Math.Between(50,330);
   var verticle_range_black_blade = Phaser.Math.Between(520,800);
   var scale_range_blades= Phaser.Math.Between(6,10);
   const horizontal_distance =Phaser.Math.Between(350,450);

w_blade.x =horizontal_distance+this.rightmostblade();
w_blade.y =verticle_range_white_blade;
w_blade.setScale(scale_range_blades*0.1);

b_blade.x =w_blade.x;
b_blade.y =verticle_range_black_blade;
b_blade.setScale(scale_range_blades*0.1);



}

rightmostblade()
{

   var rightmostX=0;

   this.blade2grp.getChildren().forEach((blade)=>
   {
      

rightmostX = Math.max(blade.x,rightmostX);




   });
   return rightmostX;
}


recycleblades()
{

var blades_container=[];

this.blade2grp.getChildren().forEach((blade)=>{

   if(blade.body.x+ blade.displayWidth<=0)
   {

      blades_container.push(blade);



      if(blades_container.length==2)
      {
         this.score++;
        
         this.scoreText.text = `Score:${this.score}`;

this.placing_blades(blades_container[0],blades_container[1]);

      }


   }


})




}



jolo_gravity_sysytem()
{

   const topedge = this.jolo.getBounds().top;
   const bottomedge =this.jolo.getBounds().bottom;
   if(topedge>=430)
   {
       this.anti_gravity=1;
       this.gravity=0;
       this.jolo.setGravityY(-500);
       this.jolo.setTint(0x000000)
       this.white_emmiter=true;
     //  this.black_emmiter =false;
     //  this.blood1();
   }
   else if(bottomedge<=430){
      this.anti_gravity=0;
      this.gravity=1;
       this.jolo.setGravityY(500)
       this.jolo.setTint(0xffffff)
       this.white_emmiter=false;
      // this.black_emmiter =true;
      // this.blood2();
   }
   


}






show_score()
{

this.scoreText=  this.add.text(130,0,'Score:0',{

   color:'white',
   fontSize:'20px'
})


/*this.highscoreText = this.add.text(230,0,'High Score:'+this.highscore,{

   color:'white',
   fontSize:'20px'
})
*/


}


blades_changer()
{
 var blades;
   if(this.score>=30)
   {
     blades= this.blade2grp.getChildren();
   
    for(var i=0;i<=4;i++)
    {
      blades[i*2].setTexture('wb1'); 
    }
    for(var i=0;i<=4;i++)
    {
      blades[(i*2)+1].setTexture('bb1'); 
    }
   
   
   
   }
   
  
   
   if(this.score>=70)
   {
  blades= this.blade2grp.getChildren();
   
    for(var i=0;i<=4;i++)
    {
      blades[i*2].setTexture('wb3'); 
    }
    for(var i=0;i<=4;i++)
    {
      blades[(i*2)+1].setTexture('bb3'); 
    }
   
   
   
   }
   if(this.score>=150)
   {
  blades= this.blade2grp.getChildren();
   
    for(var i=0;i<=4;i++)
    {
      blades[i*2].setTexture('wb4'); 
    }
    for(var i=0;i<=4;i++)
    {
      blades[(i*2)+1].setTexture('bb4'); 
    }
   
   
   
   }
   if(this.score>=250)
   {
     blades= this.blade2grp.getChildren();
   
    for(var i=0;i<=4;i++)
    {
      blades[i*2].setTexture('wb5'); 
    }
    for(var i=0;i<=4;i++)
    {
      blades[(i*2)+1].setTexture('bb5'); 
    }
   
   
   
   }
   if(this.score>=350)
   {
    const blades= this.blade2grp.getChildren();
   
    for(var i=0;i<=4;i++)
    {
      blades[i*2].setTexture('wb6'); 
    }
    for(var i=0;i<=4;i++)
    {
      blades[(i*2)+1].setTexture('bb6'); 
    }
   
   
   
   }



}


 








}







    
