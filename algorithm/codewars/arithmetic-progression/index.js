const arithmeticSequenceElements = (initialValue, increment, sequenceSize) =>
  Array.from(Array(sequenceSize).keys())
    .map(index => initialValue + index * increment)
    .join(", ");
