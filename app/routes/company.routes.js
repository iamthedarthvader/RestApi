module.exports = app => {
    const companys = require("../controllers/company.controller.js");
  
    // Create a new Company
    app.post("/companys", companys.create);
  
    // Retrieve all Companys
    app.get("/companys", companys.findAll);
  
    // Retrieve a single Company with companyId
    app.get("/companys/:companyId", companys.findOne);
  
    // Update a Company with companyId
    app.put("/companys/:companyId", companys.update);
  
    // Delete a Company with companyId
    app.delete("/companys/:companyId", companys.delete);
  
    // Create a new Company
    app.delete("/companys", companys.deleteAll);
  };