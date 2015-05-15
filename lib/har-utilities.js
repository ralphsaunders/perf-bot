/**
 * HAR
 *
 * Returns HAR object
 */
function har = function(json) {
    return JSON.parse(json);
};

module.exports = {
    har: har
};
