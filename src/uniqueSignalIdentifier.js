

/**
 * UniqueSignal Identifier
 *
 * Finds the signal that appears only once
 * while all other signals appear twice.
 *
 * Uses XOR bitwise processing to achieve:
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */


function findUniqueSignal(signals) {
    let uniqueSignal = 0;

    // XOR cancels duplicate signals
    for (const signal of signals) {
        uniqueSignal ^= signal;
    }

    return uniqueSignal;
}


// Example usage

const systemSignals = [
    4,
    1,
    2,
    1,
    2
];

const detectedSignal = findUniqueSignal(systemSignals);

console.log(
    "Unique Signal Detected:",
    detectedSignal
);
