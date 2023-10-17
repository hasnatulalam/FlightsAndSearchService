const {City} =require("../models/index");
const {Op}=require('sequelize')

class CityRepository{
   async createCity({name}){
       try {
        const city=await City.create({name});
        return city;
       } catch (error) {
           throw{error}
       }
   }
   async deleteCity(cityId){
    try {
        await City.destroy({
            where:{
                id:cityId
            }
        })
        return true;
    } catch (error) {
        throw{error}
    }
   }
   async updateCity(cityId,data){
    try {
        //The below  approach also works but will not return update object
        //if we are using pg  then returning true  can be used else not
      /*  const city =await City.update(data,{
        where:{
            id:cityId
        },
        returning:true,
        plain:true
       }) */ 
       //For getting update data in mysql we use below approach
       const city =await City.findByPk(cityId);
       city.name=data.name;
       await city.save()

       return city;
    } catch (error) {
        throw{error} 
    }

   }
   async getCity(cityId){
      try {
        const city =await City.findByPk(cityId)
        return city;
      } catch (error) {
        throw{error}
      }
   }
   async getAllCities(filter){
    try {
        if(filter.name){
            const cities =await City.findAll({
                where:{
                    name:{
                     [Op.startsWith]:filter.name
                    }
                }
            })
            return cities;
        }
       const cities =await City.findAll() 
       return cities;
    } catch (error) {
        throw{error}
    }
   }
}
module.exports=CityRepository;