// Simple PIN-based authentication
class WorkoutAuth {
    constructor() {
        this.pinKey = 'workout_pin_hash';
        this.saltKey = 'workout_salt';
        this.isAuthenticated = false;
    }

    async hashPin(pin, salt) {
        const encoder = new TextEncoder();
        const data = encoder.encode(pin + salt);
        const hashBuffer = await crypto.subtle.digest('SHA-256', data);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    }

    generateSalt() {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }

    async setupPin() {
        const pin = prompt('🔐 Set up your 4-digit PIN to protect your workout data:');
        
        if (!pin || pin.length < 4) {
            alert('PIN must be at least 4 digits');
            return this.setupPin();
        }

        const salt = this.generateSalt();
        const hashedPin = await this.hashPin(pin, salt);
        
        localStorage.setItem(this.pinKey, hashedPin);
        localStorage.setItem(this.saltKey, salt);
        
        this.isAuthenticated = true;
        return true;
    }

    async verifyPin() {
        const storedHash = localStorage.getItem(this.pinKey);
        const salt = localStorage.getItem(this.saltKey);
        
        if (!storedHash || !salt) {
            return await this.setupPin();
        }

        let attempts = 3;
        while (attempts > 0) {
            const pin = prompt(`🔐 Enter your PIN (${attempts} attempts remaining):`);
            
            if (!pin) {
                attempts--;
                continue;
            }

            const hashedInput = await this.hashPin(pin, salt);
            
            if (hashedInput === storedHash) {
                this.isAuthenticated = true;
                return true;
            }

            attempts--;
            if (attempts > 0) {
                alert(`Incorrect PIN. ${attempts} attempts remaining.`);
            }
        }

        alert('Too many failed attempts. Refresh the page to try again.');
        return false;
    }

    async encryptData(data) {
        // Simple XOR encryption with hash
        const salt = localStorage.getItem(this.saltKey);
        const key = await this.hashPin('encrypt', salt);
        const dataStr = JSON.stringify(data);
        
        let encrypted = '';
        for (let i = 0; i < dataStr.length; i++) {
            const keyChar = key.charCodeAt(i % key.length);
            const dataChar = dataStr.charCodeAt(i);
            encrypted += String.fromCharCode(dataChar ^ keyChar);
        }
        
        return btoa(encrypted);
    }

    async decryptData(encryptedData) {
        if (!encryptedData) return null;
        
        try {
            const salt = localStorage.getItem(this.saltKey);
            const key = await this.hashPin('encrypt', salt);
            const encrypted = atob(encryptedData);
            
            let decrypted = '';
            for (let i = 0; i < encrypted.length; i++) {
                const keyChar = key.charCodeAt(i % key.length);
                const encChar = encrypted.charCodeAt(i);
                decrypted += String.fromCharCode(encChar ^ keyChar);
            }
            
            return JSON.parse(decrypted);
        } catch (e) {
            console.error('Decryption failed:', e);
            return null;
        }
    }

    resetPin() {
        if (confirm('⚠️ This will clear all your workout data. Continue?')) {
            localStorage.removeItem(this.pinKey);
            localStorage.removeItem(this.saltKey);
            localStorage.removeItem('workoutProgress_encrypted');
            alert('PIN and data cleared. Refresh the page.');
            location.reload();
        }
    }
}

const workoutAuth = new WorkoutAuth();
