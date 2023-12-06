import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { StatusBar } from 'react-native';
import type { PropsWithChildren } from 'react';
import { StatusBarStyle } from 'react-native';

import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './Style';
interface RadioProps {


}

const RadioButton = ({ }: RadioProps) => {
  const [radiobutton, setradiobutton] = useState<boolean>(true);
  return (
    <View style={styles.radioButtonContainer}>
      <Text style={styles.headTextDesign}>Do you Like Break?</Text>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.oneFullRadioComponent}>
          <TouchableOpacity onPress={() => { setradiobutton(false) }} style={styles.radioButton}>
            <View style={!radiobutton ? styles.radioButtonIcon : styles.emptyradioButtonIcon} />
          </TouchableOpacity>
          <TouchableOpacity >
            <Text style={styles.radioButtonText}>No</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.oneFullRadioComponent}>
          <TouchableOpacity onPress={() => { setradiobutton(true) }} style={styles.radioButton}>
            <View style={radiobutton ? styles.radioButtonIcon : styles.emptyradioButtonIcon} />
          </TouchableOpacity>
          <TouchableOpacity >
            <Text style={styles.radioButtonText}>Yes</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};



export default RadioButton;