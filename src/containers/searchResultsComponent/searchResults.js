import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {Place, Email, Link as Linking} from '@material-ui/icons';
import { connect } from 'react-redux';
import SnackbarContent from '@material-ui/core/SnackbarContent';

function renderContent(value, icon) {
  return (
    value ?
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        {icon}
        <Typography color="textSecondary">
          {value}
        </Typography>
      </div>
      : null
  )
}

class SearchResultsComponent extends React.Component {
  render() {
    return (
      <div>
        {this.props.user
        ? <Card>
          <CardContent>
            { this.props.user.avatar_url
              ? <div style={{ display: 'flex', justifyContent: 'center'}}>
                <img src={this.props.user.avatar_url} style={{ width: 200, height: 200 }} />
              </div>
              : null
            }
            {this.props.user.name
              ? <a href={this.props.user.html_url}>{this.props.user.name}</a>
              : null
            }
            {renderContent(this.props.user.location, <Place/>)}
            {renderContent(this.props.user.email, <Email/>)}
            {renderContent(this.props.user.html_url, <Linking/>)}
          </CardContent>
        </Card>
        : null }
        {this.props.errorMessage
          ? <div>
              <SnackbarContent
                style={{ color: 'red', justifyContent: 'center' }}
                message={this.props.errorMessage}
              />
            </div>
          : null
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.results.user,
    errorMessage: state.results.errorMessage
  }
};

export const SearchResults = connect(
  mapStateToProps
)(SearchResultsComponent);
