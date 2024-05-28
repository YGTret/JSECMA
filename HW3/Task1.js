// Класс Employee
class Employee {
    constructor(name) {
        this.name = name;
    }

    displayInfo() {
        console.log(`Имя сотрудника: ${this.name}`);
    }
}

// Класс Manager, наследует класс Employee
class Manager extends Employee {
    constructor(name, department) {
        super(name);
        this.department = department;
    }

    displayInfo() {
        console.log(`Имя менеджера: ${this.name}, Отдел: ${this.department}`);
    }
}

// Пример использования:
const emp = new Employee("Иван");
emp.displayInfo();  // Вывод: Имя сотрудника: Иван

const mgr = new Manager("Анна", "Отдел продаж");
mgr.displayInfo();  // Вывод: Имя менеджера: Анна, Отдел: Отдел продаж
