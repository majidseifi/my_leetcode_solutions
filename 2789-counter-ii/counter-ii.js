/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(num) {
    const init = num;
    return {
        increment: function() {
            return ++num;
        },
        reset: function() {
            num = init;
            return num;
        },
        decrement: function() {
            return --num;
        }

    }
    
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */