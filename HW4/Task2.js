const fetch = require('node-fetch'); // Для использования fetch в Node.js, установите пакет node-fetch

async function saveUserData(user) {
    const url = 'https://jsonplaceholder.typicode.com/users';

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });

        if (!response.ok) {
            throw new Error('Failed to save user data');
        }

        return;
    } catch (error) {
        return Promise.reject(error.message);
    }
}

// Пример использования функции
const user = {
    name: 'John Smith',
    age: 30,
    email: 'john@example.com'
};

saveUserData(user)
    .then(() => {
        console.log('User data saved successfully');
    })
    .catch(error => {
        console.log('Error:', error);
    });
