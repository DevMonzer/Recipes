class SearchView {
  _parentEl = document.querySelector('.search');

  // Getting the search field value
  getQuery() {
    const query = this._parentEl.querySelector('.search__field').value;
    this._clearInput();
    return query;
  }

  // Clear the input search field
  _clearInput() {
    this._parentEl.querySelector('.search__field').value = '';
  }

  // Handle search input submit
  addHandlerSearch(handler) {
    this._parentEl.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
