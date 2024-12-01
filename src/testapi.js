const apiClient = require('./apiClient');  // CommonJS require


const testAPI = async () => {
    try {
        const testData = {
            firstName: 'Test',
            lastName: 'User',
            phone: '1234567890',
            email: 'test@example.com',
            password: 'password123',
        };

        console.log("Sending test data to backend:", testData);

        const response = await apiClient.post('/register', testData);
        console.log("Test API call successful, backend response:", response.data);
    } catch (error) {
        console.error("Test API call failed:", error);
    }
};

testAPI();
