
class Order{
    constructor(id, client, dateTimeOfCreation, totalCost, orderProductsList, orderStatusesList) {
        this.id = id;
        this.client = client;
        this.dateTimeOfCreation = dateTimeOfCreation;
        this.totalCost = totalCost;
        this.orderProductsList = orderProductsList;
        this.orderStatusesList = orderStatusesList;
    }
}