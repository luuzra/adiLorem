function quantileUniform(p, min, max) {
    // Validate inputs
    if (typeof p !== 'number' || typeof min !== 'number' || typeof max !== 'number') {
        throw new TypeError('All arguments must be numbers.');
    }
    if (min >= max) {
        throw new Error('Min value must be less than max value.');
    }
    if (p < 0 || p > 1) {
        throw new Error('Probability p must be between 0 and 1.');
    }

    // Calculate quantile
    return min + p * (max - min);
}
