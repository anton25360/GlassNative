import * as React from 'react';
import { Text, View } from '../components/Themed';

// var hello = this.props.searchValue
export default class App extends React.Component {

    state = {
        // search: '',
      };

  
  render() {
    return (
        <View>
            <Text>Search results go here</Text>
            <Text>and here</Text>
            <Text>and here again</Text>
        </View>
    );
  }
}
