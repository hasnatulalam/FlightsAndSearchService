const {Flights}=require('../models/index');
class FlightRepository{
    async createFlight(data){
        try {
            const flights =await Flights.create(data);
            return flights;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw{error}
        }

    }

}
module.exports=FlightRepository;
