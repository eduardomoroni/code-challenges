(function() {
  const modifiers = {
      buttonActive: 'segmented-control__button--active'
  };

  const attributes = {
      value: 'data-value'
  };

  const elRoot = document.querySelector('.js-segmented-control');
  const elsButton = elRoot.querySelectorAll('.js-segmented-control__button');
  const elSelect = elRoot.querySelector('.js-segmented-control__select');

  // Function to make passed button from segmented control active (arrow function is used)
  const chooseButton = elButton => {
      // First we remove all active classes from buttons
      elsButton.forEach(el => el.classList.remove(modifiers.buttonActive));
      // Then we add active class to passed one
      elButton.classList.add(modifiers.buttonActive);
  };

  elsButton.forEach(el => {
      // Whenever we click a button
      el.addEventListener('click', event => {
          event.preventDefault();
          // We choose it with a function we made
          chooseButton(el);
          // And change select value to the value of the button, which is stored in the data attribute
          elSelect.value = el.getAttribute(attributes.value);
      });
  });

  // Whenever we change select value
  elSelect.addEventListener('change', event => {
      // (trick to transform NodeList into an array)
      const buttons = [].slice.call(elsButton, 0);
      // We find the button with the same value
      const targetButton = buttons.find(el => {
          return event.target.value === el.getAttribute(attributes.value);
      });

      // And make it active
      chooseButton(targetButton);
  });
})();
