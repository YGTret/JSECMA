const fetch = require('node-fetch'); // Для использования fetch в Node.js, установите пакет node-fetch

async function getUserData(userId) {
    const url = `https://jsonplaceholder.typicode.com/users/${userId}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            if (response.status === 404) {
                throw new Error('User not found');
            } else {
                throw new Error('An error occurred while fetching the user data');
            }
        }
        const userData = await response.json();
        return userData;
    } catch (error) {
        return Promise.reject(error.message);
    }
}

// Пример использования функции
getUserData(1)
    .then(userData => console.log(userData))
    .catch(error => console.error('Error:', error));
