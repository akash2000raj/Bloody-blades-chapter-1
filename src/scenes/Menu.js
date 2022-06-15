

import Phaser from '../lib/phaser.js';


export default class Menu extends Phaser.Scene{



constructor()
{

    super('menu');
    this.intro_music;
}


/*preload()
{

    this.load.image('settingicon','assets/settingicon.png');
    this.load.image('menu_bg','assets/MENUBACKGROUND.png'); 
    this.load.image('volume_on','assets/linelight11.png');
    this.load.image('logo','assets/LOGO.png');
    this.load.audio('intro','assets/intro_music.mp3');
}
*/

create()
{

    this.cameras.main.fadeIn(10,0,0,0);
    this.add.image(-30,100,'menu_bg').setOrigin(0,0).setScale(0.7)
this.playbtn();
this.optionbtn();
//this.settingbtn();
this.levelsbtn();
//this.volumebtn();
this.logostyle();
// music 

this.intro_music = this.sound.add('intro',{

loop:true,
volume:0.7

});
this.intro_music.play()
this.intro_music.once('stop',()=>
{
    console.log('stop');
})
}

update()
{




}


playbtn()
{
    var play =this.add.text(230,240,'Start',{
        color:'black',
        fontSize:'50px',
        fontFamily:'Bauhaus93',
       backgroundColor:'white',
        padding:{
            left:70,
            right:70,
            bottom:10
        }
        
        
        }).setOrigin(0.5).setInteractive();



       play.on("pointerover",()=>
        {

         play.setScale(1.3)
             




         })
         play.on("pointerout",()=>
         {
 
          play.setScale(1)
              
 
 
 
 
          })



          play.on('pointerdown',()=>
          {

              this.scene.start('loading')
               this.intro_music.stop();
          },this)

       
}


optionbtn()
{
    var o =this.add.text(230,330,'Options',{
        color:'black',
        fontSize:'50px',
        fontFamily:'Bauhaus93',
        backgroundColor:'white',
        padding:{
            left:40,
            right:40,
            bottom:10
        }
        
        
        }).setOrigin(0.5).setInteractive()
        

        
        o.on("pointerover",()=>
        {

      o.setStyle({

        fontSize:'70px',

      })




         })
         o.on("pointerout",()=>
         {
 
         
              
      o.setStyle({

        fontSize:'50px',

      })
 
 
 
 
          })



}

settingbtn()
{

var s= this.physics.add.image(420,40,'settingicon').setScale(0.08).setInteractive().setImmovable();

s.setCircle(220,450,200)


s.on('pointerover',()=>
{

s.setAngularVelocity(-100)

})
s.on('pointerout',()=>
{

s.setAngularVelocity(0)

})






}


levelsbtn()
{

var l = this.add.text(230,420,'Score',{
    color:'black',
    fontSize:'50px',
    fontFamily:'Bauhaus93',
    backgroundColor:'white',
    padding:{
        left:63,
        right:63,
        bottom:10
    }
    
    
    }).setOrigin(0.5).setInteractive();



l.on('pointerover',()=>

{

l.setStyle({

fontSize:'70px'


})


});
l.on('pointerout',()=>

{

l.setStyle({

fontSize:'50px'


})


})


    




}


volumebtn()
{

let v = this.add.image(20,20,'volume_on')



}

logostyle()
{

var l = this.add.image(240,100,'logo').setScale(0.9)


this.time.addEvent({

    delay:100,
    callback:()=>{



if(l.alpha==1)
{
    l.setAlpha(0.8)
}
else{
    l.setAlpha(1)
}

    },
    callbackScope:this,
    loop:true


})


}


} 