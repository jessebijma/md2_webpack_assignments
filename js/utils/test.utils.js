
const truncateString = target => {
    let result = target;
    if (target.length >= 6) {
        result = target.substring(0,6);
    }
    return result;
};

export {truncateString};