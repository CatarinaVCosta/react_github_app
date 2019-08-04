import React from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { doSearch } from './action';
import { connect } from 'react-redux';

class SearchInputComponent extends React.Component {
  constructor(props) {
    super(props);
    this.searchValueRef = React.createRef();
  }

  render() {
    return (
      <Paper>
        <InputBase
          placeholder="Search user"
          inputRef={this.searchValueRef}
        />
        <IconButton
          aria-label="search"
          onClick={() => this.props.search(this.searchValueRef.current.value)}
        >
          <SearchIcon/>
        </IconButton>
      </Paper>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    search: name => dispatch(doSearch(name))
  };
};

export const SearchInput = connect(
  null,
  mapDispatchToProps
)(SearchInputComponent);
