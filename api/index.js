//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn, Temperament } = require('./src/db.js');
const axios = require('axios');

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {//aqui se estan sincronizando todos los modelos con la base de datos
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console

    
    const allTemperaments = async () => {

      try {
          const dogs= await axios.get(`https://api.thedogapi.com/v1/breeds`);
          for(let i of dogs.data) {
              if (i.temperament){
                  const temperaments= i.temperament.split(', '||',')
                  for(let j of temperaments){
                      await Temperament.findOrCreate({where:{name: j}})
                  }
               }
           }     
      }catch(err){
          console.log(err);
      }
      }
      allTemperaments();
    });

    
});
