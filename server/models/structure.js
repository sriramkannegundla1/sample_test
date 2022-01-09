module.exports = (sequelize,DataTypes)=>{
    const datatable = sequelize.define("viewcount",{
        views:{
            type:DataTypes.INTEGER,   
        }

    }
)
return datatable;
}