// This problem was asked by VMware.
//
// The skyline of a city is composed of several buildings of various widths and heights, possibly overlapping one
// another when viewed from a distance. We can represent the buildings using an array of (left, right, height) tuples,
// which tell us where on an imaginary x-axis a building begins and ends, and how tall it is.
// The skyline itself can be described by a list of (x, height) tuples, giving the locations at which the height visible
// to a distant observer changes, and each new height.
// Given an array of buildings as described above, create a function that returns the skyline.
// For example, suppose the input consists of the buildings [(0, 15, 3), (4, 11, 5), (19, 23, 4)]. In aggregate, these
// buildings would create a skyline that looks like the one below.
//
//      ______
//     |      |        ___
//  ___|      |___    |   |
// |   |   B  |   |   | C |
// | A |      | A |   |   |
// |   |      |   |   |   |
// ------------------------
//
// As a result, your function should return [(0, 3), (4, 5), (11, 3), (15, 0), (19, 4), (23, 0)].

import { describe, expect, it } from "@jest/globals";
import { Heap } from "buckets-js";

function generateSkyline(buildings) {
  // Fix case where the build end
  const endpoints = buildings.map(({ right }) => {
    return Building(right, right, 0);
  });
  buildings = [...buildings, ...endpoints].sort(sortByLeftEdge);
  const skyline = [];
  const maxHeap = Heap(maxBuildingHeight);

  buildings.forEach(currentBuilding => {
    while (!maxHeap.isEmpty() && currentBuilding.left >= maxHeap.peek().right) {
      maxHeap.removeRoot();
    }

    maxHeap.add(currentBuilding);

    if (
      !skyline.length ||
      maxHeap.peek().height !== skyline[skyline.length - 1].height
    ) {
      // for some reason it's adding duplicated elements, I could simply prevent here.
      skyline.push([currentBuilding.left, maxHeap.peek().height]);
    }
  });

  return skyline;
}

function sortByLeftEdge(a, b) {
  if (a.left - b.left !== 0) {
    return a.left - b.left;
  }

  return b.height - a.height;
}

function maxBuildingHeight(a, b) {
  return b.height - a.height;
}

function Building(left: number, right: number, height: number) {
  return {
    left,
    right,
    height
  };
}
describe("Skyline", function() {
  it("Empty building returns empty skyline", function() {
    expect(generateSkyline([])).toEqual([]);
  });

  it("Skyline of a single building is the building skyline", function() {
    expect(generateSkyline([Building(0, 15, 3)])).toEqual([
      [0, 3],
      [15, 0]
    ]);

    expect(generateSkyline([Building(4, 11, 5)])).toEqual([
      [4, 5],
      [11, 0]
    ]);

    expect(generateSkyline([Building(19, 23, 4)])).toEqual([
      [19, 4],
      [23, 0]
    ]);
  });

  it("Example solution", function() {
    const buildings = [
      Building(0, 15, 3),
      Building(4, 11, 5),
      Building(19, 23, 4)
    ];
    const skyline = generateSkyline(buildings);

    expect(skyline).toEqual([
      [0, 3],
      [4, 5],
      [11, 3],
      [15, 0],
      [19, 4],
      [23, 0]
    ]);
  });

  // TODO: The algorithm do not run for this example, the result is duplicated
  it.only("One huge building with bunch other building 'inside' it", function() {
    const buildings = [
      Building(0, 50, 5),
      Building(0, 10, 7),
      Building(10, 20, 4),
      Building(20, 30, 8),
      Building(30, 40, 3),
      Building(40, 50, 9)
    ];
    const skyline = generateSkyline(buildings);

    expect(skyline).toEqual([
      [0, 7],
      [10, 5],
      [20, 8],
      [30, 5],
      [40, 9],
      [50, 0]
    ]);
  });
});

describe("Auxiliary", function() {
  it("If there's a tie on the sorting put the taller first", function() {
    let tallest = 20;
    const buildings = [Building(1, 10, 10), Building(1, 10, tallest)];

    expect(buildings.sort(sortByLeftEdge)[0].height).toEqual(tallest);
  });
});
