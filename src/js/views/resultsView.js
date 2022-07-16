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
        <a class="preview__link preview__link--active"      href="#23456">
            <figure class="preview__fig">
            <img src="src/img/test-1.jpg" alt="Test" />
            </figure>
            <div class="preview__data">
            <h4 class="preview__title">Pasta with Tomato Cream ...</h4>
            <p class="preview__publisher">The Pioneer Woman</p>
            <div class="preview__user-generated">
                <svg>
                <use href="src/img/icons.svg#icon-user"></use>
                </svg>
            </div>
            </div>
        </a>
    </li>`;
  }
}

export default new ResultsView();
