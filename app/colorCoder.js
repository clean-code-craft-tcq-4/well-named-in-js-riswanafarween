import { getColorFromPairNumber } from "./colorpair.js";
import { getPairNumberFromColor } from "./pairNumber.js";
import { ColorPair } from "./colorNames.js";

function testNumberToPair(pairNumber, expectedMajor, expectedMinor) {

        let testPair = getColorFromPairNumber(pairNumber);
        console.log(`[In]Pair Number: ${pairNumber},[Out] Colors:${testPair}`);
        console.assert(testPair.majorColor == expectedMajor);
        console.assert(testPair.minorColor == expectedMinor);
}

function testPairToNumber(majorColor, minorColor, expectedPairNumber) {
        let testPair = new ColorPair();
            testPair.majorColor=majorColor;
            testPair. minorColor =minorColor;
        let pairNumber =getPairNumberFromColor(testPair);
            console.log(`[In]Colors: ${testPair}, [Out] PairNumber: ${pairNumber}`);
            console.assert(pairNumber == expectedPairNumber);
}

function test() {

               testNumberToPair(4, "WHITE", "BROWN");
               testNumberToPair(5, "WHITE", "SLATE");
               testNumberToPair(23, "VIOLET", "GREEN");
               testPairToNumber("YELLOW", "GREEN", 18);
               testPairToNumber("RED", "BLUE", 6);
}
test();
