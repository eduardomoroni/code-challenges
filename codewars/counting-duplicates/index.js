const DUPLICATED_REGEX = /(.)(?=.*\1)/gi;
const duplicateCount = text => new Set(text.toLowerCase().match(DUPLICATED_REGEX)).size;
