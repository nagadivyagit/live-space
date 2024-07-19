let state = {};

const set = (key, value) => {
    state[key] = value;
};

const get = (key) => {
    return state[key];
};

module.exports = {
    set,
    get
};