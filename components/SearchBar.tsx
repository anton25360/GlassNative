import { SearchBar } from 'react-native-elements';
import * as React from 'react';


export default class App extends React.Component {
  state = {
    search: '',
  };

  updateSearch = (search) => {
    this.setState({ search });
    console.log(search);
    
  };

  render() {
    const { search } = this.state;

    return (
      <SearchBar
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={search}
      />
    );
  }
}
