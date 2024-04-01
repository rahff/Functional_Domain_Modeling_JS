class Optional {
    constructor(value) {
        this.value = value
    }
}

// PUBLIC API
export const optional = (value) => {
    if(!value) return optional_empty();
    return optional_of(value);
}
export const optional_of = (value) => Object.freeze(new Optional(value));
export const optional_empty = () => Object.freeze(new Optional(null));

export const if_present = optional => fn => {
    if(optional.value) fn(optional.value);
}

export const if_present_return = (optional, else_return) => fn => {
    if(optional.value) return fn(optional.value);
    else return Object.freeze(else_return);
}

export const if_empty = optional => fn => {
    if(!optional.value) fn();
}



