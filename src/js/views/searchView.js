class SearchView {
  _parentEl = document.querySelector('.search');

  // Selecting the input field and getting the value
  getQuery() {
    const query = this._parentEl.querySelector('.search__field').value;
    this._clearInput();
    return query;
  }

  // Clear the input field
  _clearInput() {
    this._parentEl.querySelector('.search__field').value = '';
  }

  // Adding an event listener for the search field button
  addHandlerSearch(handler) {
    this._parentEl.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
