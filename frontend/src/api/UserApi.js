export const register = async (name, email, password) => {
    try {
        const response = await fetch('/api/register', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, password })
        });
        const data = await response.json(); 
        if (!response.ok) throw new Error(data.message || 'Registration failed');
        return data;
    } catch (error) {
        console.error("Register Error:", error.message);
        throw error;
    }
};

export const login = async (email, password) => {
    try {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });
        const data = await response.json();
        if (!response.ok) throw new Error(data.message || 'Login failed');
        localStorage.setItem('Token', data.token);
        return data.message;
    } catch (error) {
        console.error("Login Error:", error.message);
        throw error;
    }
};

export const logout = async () => {
    try {
        const response = await fetch('/api/logout', {
            method: 'POST',
            headers: { "Content-Type": "application/json" }
        });
        const data = await response.json();
        if (!response.ok) throw new Error(data.message || "Logout failed");
        localStorage.clear();
        return data.message ;
    } catch (error) {
        console.error("Logout Error:", error.message);
        throw error;
    }
};
