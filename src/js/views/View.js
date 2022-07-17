import icons from 'url:../../img/icons.svg';

export default class Veiw {
  _data;

  // Rendering the recipe on the screen
  render(data) {
    // If we got no data we throw an error
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();

    this._data = data;
    const markup = this._generateMarkup();

    if (!render) return markup;

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  _clear() {
    this._parentElement.innerHTML = '';
  }

  // Showing a spinner before a recipe gets shown
  renderSpinner() {
    const markup = `
        <div class="spinner">
          <svg>
            <use href="${icons}#icon-loader"></use>
          </svg>
        </div> 
    
        `;
    this._clear;
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  // Adding an error handler
  renderError(message = this._errorMessage) {
    const markup = `
        <div class="error">
            <div>
              <svg>
                <use href="${icons}#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${message}</p>
        </div> 
      `;
    this._clear;
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  // Adding a message handler
  renderError(message = this._message) {
    const markup = `
          <div class="message">
              <div>
                <svg>
                  <use href="${icons}#icon-smile"></use>
                </svg>
              </div>
              <p>${message}</p>
          </div> 
        `;
    this._clear;
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
}
