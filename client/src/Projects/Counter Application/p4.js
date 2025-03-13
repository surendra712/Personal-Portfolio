document.addEventListener("DOMContentLoaded", function () {
    // Get elements
    const counter = document.getElementById("counter");
    const incrementBtn = document.getElementById("increment");
    const decrementBtn = document.getElementById("decrement");
    const resetBtn = document.getElementById("reset");

    let count = 0; // Initial count

    // Function to update counter display
    function updateCounter() {
        counter.textContent = count;
    }

    // Increment button click event
    incrementBtn.addEventListener("click", function () {
        count++;
        updateCounter();
    });

    // Decrement button click event (Prevents negative numbers)
    decrementBtn.addEventListener("click", function () {
        if (count > 0) {
            count--;
            updateCounter();
        }
    });

    // Reset button click event
    resetBtn.addEventListener("click", function () {
        count = 0;
        updateCounter();
    });

    // Initialize counter display
    updateCounter();
});
