const workoutAuth = {
    PIN: '6548',
    isVerifying: false,

    verifyPin() {
        // Prevent multiple concurrent verification calls
        if (this.isVerifying) {
            console.warn('Authentication already in progress');
            return Promise.resolve(false);
        }
        this.isVerifying = true;

        return new Promise((resolve) => {
            const modal = document.getElementById('authModal');
            const pinInput = document.getElementById('pinInput');
            const submitBtn = document.getElementById('submitPin');
            const cancelBtn = document.getElementById('cancelAuth');
            const errorMsg = document.getElementById('authError');

            // Reset modal state
            modal.style.display = 'flex';
            errorMsg.style.display = 'none';
            pinInput.value = '';

            // Auto-focus input
            setTimeout(() => pinInput.focus(), 100);

            const cleanup = () => {
                submitBtn.removeEventListener('click', handleAuth);
                cancelBtn.removeEventListener('click', handleCancel);
                pinInput.removeEventListener('keypress', handleKeypress);
                this.isVerifying = false;
            };

            const handleAuth = () => {
                if (pinInput.value === this.PIN) {
                    modal.style.display = 'none';
                    cleanup();
                    resolve(true);
                } else {
                    errorMsg.style.display = 'block';
                    pinInput.value = '';
                    pinInput.focus();
                }
            };

            const handleCancel = () => {
                modal.style.display = 'none';
                cleanup();
                resolve(false);
            };

            const handleKeypress = (e) => {
                if (e.key === 'Enter') {
                    handleAuth();
                }
            };

            submitBtn.addEventListener('click', handleAuth);
            cancelBtn.addEventListener('click', handleCancel);
            pinInput.addEventListener('keypress', handleKeypress);
        });
    }
};
