import React from 'react';
import { Text, View, ScrollView } from 'react-native';

export default function GeneratedSocScreen({ route }) {
  return (
    <ScrollView style={{flex: 1}}> 
      <View>
        <Text>
          {route.params.generatedPostContent}
        </Text>
      </View>
    </ScrollView>
  );
}
