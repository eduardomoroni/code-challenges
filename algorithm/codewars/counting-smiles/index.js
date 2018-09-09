//SOLUTION
const SMILE_REGEX = /((?::|;|=)(?:-|~)?(?:\)|D))/;
const isASmile = face => SMILE_REGEX.test(face);
const countSmileys = faces => faces.filter(isASmile).length;

//TEST CASES
Test.describe("Basic testing", function() {
  Test.assertEquals(countSmileys([]), 0);
  Test.assertEquals(countSmileys([":D", ":~)", ";~D", ":)"]), 4);
  Test.assertEquals(countSmileys([":)", ":(", ":D", ":O", ":;"]), 2);
  Test.assertEquals(countSmileys([";]", ":[", ";*", ":$", ";-D"]), 1);
});
