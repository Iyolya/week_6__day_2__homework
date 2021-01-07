const Park = function (name, ticket_price) {
    this.name = name;
    this.ticket_price = ticket_price;
    this.dinosaurs = [];
  }
  
Park.prototype.add_dinosaur = function(dinosaur){
    this.dinosaurs.push(dinosaur);
};

  
  module.exports = Park;
  