import { DataTypes,  } from "sequelize";
import dbconection from "../config/db.js";

const Game= dbconection.define("tbb_game",
{
tittle:{
    type:DataTypes.STRING,
    allowNull:false
},
startSAt:{
    type: DataTypes.DATE,
    allowNull:false,
    defaultValue: DataTypes.NOW
},
EndsAt:DataTypes.DATE,
Score:{
    type:DataTypes.INTEGER,
    allowNull:false,
    defaultValue:0
},
 duration:DataTypes.TIME
})
export default Game;