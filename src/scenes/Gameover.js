import Phaser from '../lib/phaser.js';

import Game from './Game.js'

var game = new Game();
export default class Gameover extends Phaser.Scene {




    constructor()
    {

        super('gameover');
        this.gameoversound;
        
    }


   /* preload()
    {
this.load.audio('gameover_music','assets/game_over_music.mp3')
this.load.image('menu_bg','assets/MENUBACKGROUND.png'); 
    }
*/

    create(data)
    {


this.cameras.main.fadeIn(500,0,0,0)

      this.add.image(-30,100,'menu_bg').setOrigin(0,0).setScale(0.7);

       this.gameoversound= this.sound.add('gameover_music',{
           loop:true,
           volume:1
       });
       this.gameoversound.play();

       var g = this.add.text(30,120,'GAME OVER',{

        color:'white',
        fontSize:'70px',
        fontFamily:'Bauhaus93'
       });


       this.add.text(360,300,`${data.heighest}`,{

        color:'white',
        fontSize:'70px',
        fontFamily:'Bauhaus93'
       }).setOrigin(0.5);
       this.add.text(290,350,"HighScore",{

        color:'white',
        fontSize:'30px',
        fontFamily:'Bauhaus93'
       })

const r1 =this.add.rectangle(5,250,230,150).setOrigin(0);
r1.setStrokeStyle(10,0xffffff,1)
const r2 =this.add.rectangle(248,250,230,150).setOrigin(0);
r2.setStrokeStyle(10,0xffffff,1)


       this.add.text(109,300,`${data.current}`,{

        color:'white',
        fontSize:'70px',
        fontFamily:'Bauhaus93'
       }).setOrigin(0.5)
       this.add.text(80,350,"Score",{

        color:'white',
        fontSize:'30px',
        fontFamily:'Bauhaus93'
       })

       const restartbtn = this.add.text(230,470,"Restart",{



        color:'black',
        fontSize:'50px',
        fontFamily:'Bauhaus93',
        backgroundColor:'white',
        padding:{

right:30,
left:30


        }


       }).setInteractive().setOrigin(0.5);


       restartbtn.on('pointerover',()=>
       {
 restartbtn.setScale(1.5)


          

       });
       restartbtn.on('pointerout',()=>
       {
 restartbtn.setScale(1)


          

       })

       restartbtn.on('pointerdown',()=>
       {
        this.gameoversound.stop();
        
sessionStorage.clear();
this.scene.start('gameplay')


          

       })

    }


    




}