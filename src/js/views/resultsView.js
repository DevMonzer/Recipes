import View from './View.js';
// import previewView from './previewView.js';
import icons from 'url:../../img/icons.svg'; // Parcel 2

// Rendering the search results on the page
class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found for your query! Please try again ;)';
  _message = '';

  _generateMarkup() {
    return this._data.map(this._generateMarkupPreview).join('');
  }

  _generateMarkupPreview() {
    return `
    <li class="preview">
        <a class="preview__link preview__link--active"      href="#${results.id}">
            <figure class="preview__fig">
            <img src="${results.image}" alt="Test" />
            </figure>
            <div class="preview__data">
            <h4 class="preview__title">${results.title}</h4>
            <p class="preview__publisher">${results.publisher}</p>
            <div class="preview__user-generated">
                <svg>
                <use href="${icons}#icon-user"></use>
                </svg>
            </div>
            </div>
        </a>
    </li>`;
  }
}

export default new ResultsView();
