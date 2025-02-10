"use strict";

module.exports = class PhoneRegister {
    #register;

    constructor(data) {
        if (!data) {
            throw new Error("phone data missing");
        }
        this.#register = data;
    }

    getTypes() {
        // array that only has one type once: mapping and set, or for loop
        const foundTypes = [];
        for (const person of this.#register) {
            for (const phone of person.phones) {
                if (!foundTypes.includes(phone.type)) {
                    foundTypes.push(phone.type);
                }
            }
        }

        return foundTypes;
    } // end of get types


};
