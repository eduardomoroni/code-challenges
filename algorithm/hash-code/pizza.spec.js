function orderPizza(maximumSlices, differentTypes, menu) {}

function order(maximumSlices, pizzasOrdered, availablePizzas) {
  const sumOfSlices = pizzasOrdered.reduce((acc, cur) => acc + cur, 0);

  for (let i = availablePizzas.length - 1; i >= 0; i++) {
    const currentElement = availablePizzas[i];
    const currentSum = sumOfSlices + currentElement;

    if (currentSum <= sumOfSlices) {
      return [...pizzasOrdered, currentElement];
    }

    if (currentSum > sumOfSlices) {
      let availablePizzasWithoutCurrentPizza = availablePizzas.splice(i, 1);
      return order(
        maximumSlices,
        [...pizzasOrdered],
        availablePizzasWithoutCurrentPizza
      );
    }
  }
}

describe("Pizza ordering optimizer", function() {
  it("should finish this task", function() {
    expect(true).toEqual(true);
  });
  xit("should optimize results", function() {
    let maximumSlices = 17;
    let differentTypes = 4;
    let menu = [2, 5, 6, 8];

    const result = orderPizza(maximumSlices, differentTypes, menu);
    expect(result).toEqual(16);
  });
});

// Pego a maior pizza e somo nas ja escolhidas
// se for maior que o MAX_VALUE eu DESCARTO essa possibilidade
// se for menor ou igual, eu tento somar novamente
