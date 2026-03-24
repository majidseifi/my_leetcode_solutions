class MinStack {
    constructor () {
        this.stack = [];
        this.min = Infinity;
    }

    /** 
    * @param {number} val
    * @return {void}
    */
    push = function(val) {
        if (this.stack.length === 0) {
            this.stack.push(0);
            this.min = val;
        } else {
            this.stack.push(val - this.min);
            if (val < this.min) this.min = val;
        }
    };

    /**
    * @return {void}
    */
    pop = function() {
        if (this.stack.length === 0) return;
        const last = this.stack.pop();
        if (last < 0) this.min -= last;
    };

    /**
    * @return {number}
    */
    top = function() {
        const top = this.stack[this.stack.length - 1];
        return top > 0 ? top + this.min : this.min;
    };

    /**
    * @return {number}
    */
    getMin = function() {
        return this.min;
    };
}

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
