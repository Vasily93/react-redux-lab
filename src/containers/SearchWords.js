import { connect } from 'react-redux';
import SearchForm from '../components/words/SearchForm';
import { getSerchByTerm } from '../selectors/wordsSelectors';

const mapStateToProps = (state) => ({
  searchTerm: getSerchByTerm(state)
});//????

export default connect(
  mapStateToProps
)(SearchForm);

