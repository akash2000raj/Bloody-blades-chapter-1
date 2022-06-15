
import Phaser from './lib/phaser.js'
import Game from './scenes/Game.js';
import Menu from './scenes/Menu.js';
import Loading from './scenes/Loading.js';
import Gameover from './scenes/Gameover.js'
import Preloader from './scenes/Preloader.js';



   
        const config = {

            type:Phaser.WEBGL,
            width:480,
            height:850,
            scene:[Preloader,Menu,Loading,Game,Gameover],
            
            physics:{
            
            default:'arcade',
            
            arcade:{
                gravity:{
            
                },
            //debug:true
            }
            
            }
            ,
            scale:{
            mode:Phaser.Scale.FIT,
            autoCenter:Phaser.Scale.CENTER_BOTH
            
            }
            ,
    
    
            fps:{
    
     min:10,
     target:30,
     forceSetTimeOut:false,
     deltaHistory:20
    
            }
            }
            
             new Phaser.Game(config);
    

    





    



