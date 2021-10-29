"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const restaurants_1 = require("./restaurants");
const orders_1 = require("./orders");
/// Add your getMaxPrice() function below:
let getMaxPrice = (price) => {
    if (price == orders_1.PriceBracket.Low) {
        return 10.0;
    }
    else if (price == orders_1.PriceBracket.Medium) {
        return 20.0;
    }
    else {
        return 30.0;
    }
};
/// Add your getOrders() function below:
let getOrders = function (price, orders) {
    let filteredOrders = [];
    orders.forEach(order => {
        filteredOrders.push(order.filter(order => order.price <= getMaxPrice(price)));
    });
    return filteredOrders;
};
/// Add your printOrders() function below:
let printOrders = function (restaurants, orders) {
    restaurants.forEach((restaurant, restaurantIndex) => {
        if (orders[restaurantIndex].length == 0) {
            return;
        }
        console.log(`Restaurant Name ${restaurant.name}`);
        orders[restaurantIndex].forEach((order, orderIndex) => {
            console.log(`- Order ${orderIndex + 1}: \$${order.price}`);
        });
    });
};
/// Main
const elligibleOrders = getOrders(orders_1.PriceBracket.Low, orders_1.orders);
printOrders(restaurants_1.restaurants, elligibleOrders);
