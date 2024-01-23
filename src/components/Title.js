import React from 'react';
import {Text} from 'react-native';

function Title({children}) {
  return (
    <Text
      style={{
        fontSize: 36,
        fontWeight: 600,
      }}>
      {children}
    </Text>
  );
}

export default Title;
