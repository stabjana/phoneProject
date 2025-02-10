'use strict';

module.exports = class PhoneRegister {
    #register

    constructor(data) {
        if (!data) {
            throw new Error('phone data missing');
        }
        this.#register = data;
    }

    getTypes() {

    }
}