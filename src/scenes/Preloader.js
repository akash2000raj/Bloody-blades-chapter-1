import Phaser from '../lib/phaser.js';



export default class Preloader extends Phaser.Scene
{

constructor()
{

super('preloader');



}




preload()
{
 
    this.load.image('bg_black','assets/bg_black.png');
    this.load.image('bg_white','assets/bg_white.png')
    /*this.load.spritesheet('jolo','assets/joloanim.png',{
       frameWidth:65.6,frameHeight:60
    });*/
    
    
    this.load.image('white_player','assets/white_ball.png');
    this.load.image('black_player','assets/black_ball.png');
    this.load.image('blood','assets/boolod.png')
    this.load.image('flame','assets/flame.png');
    
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
    


    this.load.audio('gameover_music','assets/game_over_music.mp3')
    this.load.image('menu_bg','assets/MENUBACKGROUND.png'); 


    this.load.image('settingicon','assets/settingicon.png');
    this.load.image('menu_bg','assets/MENUBACKGROUND.png'); 
    this.load.image('volume_on','assets/linelight11.png');
    this.load.image('logo','assets/LOGO.png');
    this.load.audio('intro','assets/intro_music.mp3');


}


create()
{
this.scene.start('menu')

}



}


