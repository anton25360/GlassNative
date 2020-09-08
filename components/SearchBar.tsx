import { SearchBar } from 'react-native-elements';
import * as React from 'react';


export default class App extends React.Component {
  state = {
    search: '',
  };

  updateSearch = (search:string) => {
    this.setState({ search });
    console.log(search);
    // this.props.onUserSearch(search);
    // this.props.name('hello')

  };

  render() {
    const { search } = this.state;

    return (
      <SearchBar
        placeholder='eg: Mojito'
        onChangeText={this.updateSearch}
        value={search}
      />
    );
  }
}
