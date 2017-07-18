/**
 * Returns the location params from url
 * @returns {object}
 */
export function getLocationParams() {
    let out = {};

    // Parse the location object
    location.search.substr(1).split('&').forEach(parts => {
        let values = parts.split('=');
        out[values[0]] = values[1];
    });

    return out;
}

/**
 * Navigate the current sessiont to a certain path
 * @param path
 */
export function navigate(path) {
    window.history.pushState(null, null, path);
}