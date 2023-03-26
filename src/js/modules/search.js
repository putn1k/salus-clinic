const MIN_SEARCH_LENGTH = 3;
const SEARCH_DELAY = 2000;

const searchNode = document.querySelector( '.pricing-search' );
const searchInputNode = searchNode.querySelector( '.pricing-search__input' );
const alertNode = searchNode.querySelector( '.pricing-search__alert' );
const dataBaseNode = document.querySelector( '.price-list__groups' ); //eslint-disable-line
const resultsNode = document.querySelector( '.price-list__results' );
let DB = {}; //eslint-disable-line

const clearNode = ( node ) => {
  node.innerHTML = '';
};

const clearAlertMessage = () => {
  clearNode( alertNode );
  searchNode.classList.remove( 'pricing-search--on-alert' );
};

const alertMessage = ( message ) => {
  clearNode( alertNode );
  searchNode.classList.add( 'pricing-search--on-alert' );
  alertNode.textContent = message;
};

const setLoadingState = () => {
  searchNode.classList.add( 'pricing-search--loading' );
};

const unsetLoadingState = () => {
  searchNode.classList.remove( 'pricing-search--loading' );
};

const searchResult = () => {
  resultsNode.classList.remove( 'price-list__results--founded' );
};

const renderResuls = () => {
  resultsNode.classList.add( 'price-list__results--founded' );
};

const createDataBase = () => {
  if ( !dataBaseNode ) return;
};

const onSearchInput = () => {
  createDataBase();

  if ( searchInputNode.value.length === 0 ) {
    clearAlertMessage();
    return;
  }

  if ( searchInputNode.value.length < ( MIN_SEARCH_LENGTH + 1 ) ) {
    alertMessage( `Для поиска введите более ${MIN_SEARCH_LENGTH} символов` );
    return;
  }

  clearAlertMessage();
  setLoadingState();
  searchResult();

  setTimeout( () => {
    unsetLoadingState();
    renderResuls();
  }, SEARCH_DELAY );
};

export const initPriceSearching = () => {
  if ( !searchNode ) return;
  searchInputNode.addEventListener( 'input', onSearchInput );
};
