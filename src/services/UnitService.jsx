import axiosService from "./axiosService";

const baseUrl = "https://localhost:44370/api/Quantity/" ;

class UnitService {
    constructor() {
      this.axiosService = new axiosService();
    }
  
    Conversion(data) {
      let url = baseUrl + "AddMeasuredQuantity";
      return this.axiosService.post(url, data);
    }
}

export default new UnitService();