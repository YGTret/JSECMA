function changeStyleDelayed(elementId, delay) {
    // Получить элемент по идентификатору
    const element = document.getElementById(elementId);
    
    if (!element) {
        console.error(`Element with ID ${elementId} not found`);
        return;
    }

    // Использовать setTimeout для изменения стиля через указанное время
    setTimeout(() => {
        // Изменение стиля элемента (например, изменение цвета фона)
        element.style.backgroundColor = 'lightblue';
        element.style.color = 'darkblue';
        element.style.fontSize = '20px';
        element.style.padding = '10px';
    }, delay);
}

// Пример использования функции
changeStyleDelayed('myElement', 2000); // Через 2 секунды изменяет стиль элемента с id 'myElement'
