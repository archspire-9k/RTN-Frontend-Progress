import { useState, useRef, useEffect } from 'react';
import { Dimensions, StyleSheet, LogBox, Platform, View, Text } from 'react-native';
import Canvas from 'react-native-canvas';
import * as tf from '@tensorflow/tfjs';
import { cameraWithTensors } from '@tensorflow/tfjs-react-native';
import * as facemesh from '@tensorflow-models/face-landmarks-detection';
import { Camera } from 'expo-camera';

const TensorCamera = cameraWithTensors(Camera);

const { width, height } = Dimensions.get("window");


const App = () => {
  return (
    <View>
      <Text> Main Screen </Text>
    </View>
  )
}

export default App;