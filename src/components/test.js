/** @constant
    @type {string}
    @default
*/
const helloMessage = `Hello there `;

/** @constant
    @type {string}
    @default
*/
const goodbyeMessage = 'Goodbye ';

/**
 * This is a simple JSDoc example; this function will return
 * a hello message with a full name.
 *
 * @param {string} name - The name
 * @param {string} lastName - The Last name
 * @returns {string}
 */
const helloName = (name, lastName) => `${helloMessage} ${name} ${lastName}`;

/**
 * This is a simple JSDoc example; this function will return
 * a goodbye message with a full name.
 *
 * @param {string} name - The name
 * @param {string} lastName - The Last name
 * @returns {string}
 */
const goodbyeName = (name, lastName) => `${goodbyeMessage} ${name} ${lastName}`;

helloName('Jose Jesus', 'Ochoa Torres');
goodbyeName('Jose Jesus', 'Ochoa Torres');
