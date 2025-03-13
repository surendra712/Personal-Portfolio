document.addEventListener("DOMContentLoaded", function() {
    // Check connection status
    const statusText = document.getElementById("status Text");
    const ipAddressText = document.getElementById("Ip Address Text");
    const networkStrengthText = document.getElementById("Network Strength Text");

    function updateConnectionStatus() {
        statusText.textContent = navigator.onLine ? "Online" : "Offline";
    }

    // Fetch IP address
    function fetchIPAddress() {
        fetch("https://api.ipify.org?format=json")
            .then(response => response.json())
            .then(data => {
                ipAddressText.textContent = data.ip;
            })
            .catch(error => {
                ipAddressText.textContent = "Error fetching IP";
            });
    }

    // Check network strength
    function updateNetworkStrength() {
        if (navigator.connection) {
            const connection = navigator.connection;
            if (navigator.onLine) {
                networkStrengthText.textContent = `${connection.effectiveType} - ${connection.downlink} Mbps`;
            } else {
                networkStrengthText.textContent = "Network strength not available (offline)";
            }

        } else {
            networkStrengthText.textContent = "Network information not available";
        }
    }

    // Initial updates
    updateConnectionStatus();
    fetchIPAddress();
    updateNetworkStrength();

    // Event listeners for connection changes
    window.addEventListener("online", updateConnectionStatus);
    window.addEventListener("offline", updateConnectionStatus);
});
