const {CityService} =require("../services/index");
const cityService =new CityService();

/**
 * POST
 * data=req.body
 *  
 */

const create=async(req,res)=>{
    try {
       const city =await cityService.createCity(req.body)
       return res.status(201).json({
        data:city,
        success:true,
        message:'Successfully Created a City',
        err:{}

       })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data:{},
            success:false,
            message:'UnSuccessfully Created a City',
            err:error
        })
    }
}

//DELETE -> /city/:id     req.params 
const destroy=async(req,res)=>{
    try {
        const response =await cityService.deleteCity(req.params.id)
       return res.status(200).json({
        data:response,
        success:true,
        message:'Successfully deleted a City',
        err:{}

       })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data:{},
            success:false,
            message:'Not able to delete the City',
            err:error
        })
    }
}

//GET /city/:id
const get=async(req,res)=>{
    try {
        const response =await cityService.getCity(req.params.id)
        return res.status(200).json({
         data:response,
         success:true,
         message:'Successfully fetched the City',
         err:{}
 
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data:{},
            success:false,
            message:'Not able to get the City',
            err:error
        })
    }
}

//PATCH /city/:id req.body
const update=async(req,res)=>{
    try {
        const response =await cityService.updateCity(req.params.id,req.body)
        return res.status(200).json({
         data:response,
         success:true,
         message:'Successfully fetched the City',
         err:{}
 
        })
    } catch (error) {
        console.log(error);
        console.log(error);
        res.status(500).json({
            data:{},
            success:false,
            message:'Not able to update the City',
            err:error
        })
    }
}

module.exports={
    create,
    destroy,
    get,
    update

}