// Класс Order
class Order {
    constructor(orderNumber) {
        this.orderNumber = orderNumber;
        this.products = [];
    }

    // Метод для добавления продукта в заказ
    addProduct(product) {
        this.products.push(product);
    }

    // Метод для получения общей стоимости заказа
    getTotalPrice() {
        return this.products.reduce((total, product) => total + product.price, 0);
    }
}

// Пример использования:
const order = new Order(12345);

// Продукты для добавления в заказ
const product1 = { name: "Товар 1", price: 100 };
const product2 = { name: "Товар 2", price: 200 };

order.addProduct(product1);
order.addProduct(product2);

console.log(`Номер заказа: ${order.orderNumber}`);  // Вывод: Номер заказа: 12345
console.log(`Общая стоимость заказа: ${order.getTotalPrice()}`);  // Вывод: Общая стоимость заказа: 300
