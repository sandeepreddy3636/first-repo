// Simple PIN-based authentication with hardcoded PIN
class WorkoutAuth {
    constructor() {
        this.MASTER_PIN = '6548'; // Hardcoded PIN
        this.isAuthenticated = false;
    }

    async verifyPin() {
        let attempts = 3;
        while (attempts > 0) {
            const pin = prompt(`🔐 Enter PIN to access workout tracker (${attempts} attempts remaining):`);
            
            if (!pin) {
                attempts--;
                if (attempts === 0) {
                    alert('Access denied. Refresh the page to try again.');
                    return false;
                }
                continue;
            }

            if (pin === this.MASTER_PIN) {
                this.isAuthenticated = true;
                return true;
            }

            attempts--;
            if (attempts > 0) {
                alert(`❌ Incorrect PIN. ${attempts} attempts remaining.`);
            } else {
                alert('❌ Access denied. Too many failed attempts. Refresh the page to try again.');
            }
        }

        return false;
    }
}

const workoutAuth = new WorkoutAuth();
