const workoutAuth = {
    PIN: '6548',

    verifyPin() {
        return new Promise((resolve) => {
            const modal = document.getElementById('authModal');
            const pinInput = document.getElementById('pinInput');
            const submitBtn = document.getElementById('submitPin');
            const cancelBtn = document.getElementById('cancelAuth');
            const errorMsg = document.getElementById('authError');

            // Auto-focus input
            setTimeout(() => pinInput.focus(), 100);

            const handleAuth = () => {
                if (pinInput.value === this.PIN) {
                    modal.style.display = 'none';
                    resolve(true);
                } else {
                    errorMsg.style.display = 'block';
                    pinInput.value = '';
                    pinInput.focus();
                }
            };

            submitBtn.addEventListener('click', handleAuth);

            cancelBtn.addEventListener('click', () => {
                resolve(false);
            });

            pinInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    handleAuth();
                }
            });
        });
    }
};
