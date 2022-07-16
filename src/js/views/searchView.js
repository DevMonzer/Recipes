class SearchView {
  #parentEl = document.querySelector('.search');

  // Selecting the input field and getting the value
  getQuery() {
    const query = this.#parentEl.querySelector('.search__field').value;
    this.#clearInput();
    return query;
  }

  // Clear the input field
  #clearInput() {
    this.#parentEl.querySelector('.search__field').value = '';
  }

  // Adding an event listener for the search field button
  addHandlerSearch(handler) {
    this.#parentEl.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
