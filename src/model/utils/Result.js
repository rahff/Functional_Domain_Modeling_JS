class Result {
    constructor(value, ok) {
        this.value = value;
        this.ok = ok
    }
}


const ok = (value) => Object.freeze(new Result(value, true));
const err = (error) => Object.freeze(new Result(error, false));

const is_ok = (result) => result.ok;
const is_error = (result) => !result.ok;