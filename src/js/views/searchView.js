class SearchView {
  #parentEl = document.querySelector('.search');

  // Selecting the input field and getting the value
  getQuery() {
    const query = this.#parentEl.querySelector('.search__field').value;
    return query;
  }
}

export default new SearchView();
