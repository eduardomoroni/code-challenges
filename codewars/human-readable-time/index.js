//SOLUTION
const PADDING = { minimumIntegerDigits: 2, useGrouping: false };
const EN = "en-US";

class HumanReadableDate {
  constructor(seconds) {
    if (seconds > 359999 || seconds < 0) {
      throw new Error("Invalid Input");
    }

    this.hour = Math.floor(seconds / 3600).toLocaleString(EN, PADDING);
    this.minutes = Math.floor((seconds / 60) % 60).toLocaleString(EN, PADDING);
    this.seconds = (seconds % 60).toLocaleString(EN, PADDING);
  }

  toString() {
    return `${this.hour}:${this.minutes}:${this.seconds}`;
  }
}

function humanReadable(seconds) {
  return new HumanReadableDate(seconds).toString();
}

//TEST CASES
describe("examples", function() {
  it("should format correctly", function() {
    Test.assertEquals(humanReadable(0), "00:00:00", "humanReadable(0)");
    Test.assertEquals(humanReadable(5), "00:00:05", "humanReadable(5)");
    Test.assertEquals(humanReadable(60), "00:01:00", "humanReadable(60)");
    Test.assertEquals(humanReadable(86399), "23:59:59", "humanReadable(86399)");
    Test.assertEquals(
      humanReadable(359999),
      "99:59:59",
      "humanReadable(359999)"
    );
  });
});
