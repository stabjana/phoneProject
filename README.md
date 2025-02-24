# phoneProject

Here we learn in our course how to test the PhoneRegister class functions correctly by validating its constructor and methods.

    Constructor Tests: Checks if missing data throws an error.
    getTypes Method: Ensures unique phone types are correctly extracted, even with edge cases like missing phones or empty strings.
    getPersonsNumbersByType Method: Verifies number retrieval for a given person and phone type, handling missing parameters and invalid inputs.
    getAllNumbersByType Method: Confirms that numbers are correctly grouped by type, including cases with missing parameters or unknown types.
    getName Method: Ensures phone numbers correctly map to a person's name, returning null for unknown numbers.
    getAllNumbers Method: Checks the integrity of retrieving all stored phone numbers, including scenarios with missing persons or empty phone lists.

Each test runs against default and custom datasets to cover edge cases and expected functionality.
