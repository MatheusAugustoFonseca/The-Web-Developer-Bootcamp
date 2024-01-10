// Executes a reducer function on each element of
// the array, resulting in a single value


// callbackFn
// A function to execute for each element in the array. Its return value becomes the value of the accumulator parameter on the next invocation of callbackFn. For the last invocation, the return value becomes the return value of reduce(). The function is called with the following arguments:

// accumulator
// The value resulting from the previous call to callbackFn. On the first call, its value is initialValue if the latter is specified; otherwise its value is array[0].

// currentValue
// The value of the current element. On the first call, its value is array[0] if initialValue is specified; otherwise its value is array[1].

// currentIndex
// The index position of currentValue in the array. On the first call, its value is 0 if initialValue is specified, otherwise 1.

// array
// The array reduce() was called upon.