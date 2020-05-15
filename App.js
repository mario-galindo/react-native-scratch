import React from 'react';
import { Text, View, SectionList } from 'react-native';

export default class App extends React.Component {

  render() {
    return (
      <View>
        <SectionList
          sections={[
            {
              title: 'Nombres', 
              data: [
                { name: 'Chanchito Feliz', key: "1" },
                { name: 'Fluffy', key: "2" },
                { name: 'Mr Algore', key: "3" },
                { name: 'Buttersnip', key: "4" },
                { name: 'Feliper', key: "5" }
              ]
            },
            {
              title: 'Eduardos', 
              data: [
                { name: 'Eduardo', key: "6" },
                { name: 'Eduardo', key: "7" },
                { name: 'Eduardo', key: "8" },
                { name: 'Eduardo', key: "9" },
                { name: 'Eduardo', key: "10" },
                { name: 'Eduardo', key: "11" },
                { name: 'Eduardo', key: "12" }
              ]
            }
          ]}
        renderItem={({item}) => <Text style={{fontSize:40}}>{item.name}</Text>}
        renderSectionHeader={({section}) => <Text style={{fontSize:40, backgroundColor:'gray'}}>{section.title}</Text>}
        />
      </View>
    );
  }
}