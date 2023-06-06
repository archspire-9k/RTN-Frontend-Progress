import React, { useEffect } from 'react';
import 'react-native-reanimated';
import { Platform, StyleSheet, useWindowDimensions, View } from 'react-native';
import {
  Frame,
  Camera,
  useFrameProcessor,
  useCameraDevices,
} from 'react-native-vision-camera';
import { useSharedValue, useAnimatedStyle } from 'react-native-reanimated';
import Animated from 'react-native-reanimated';

export function objectDetect(frame : Frame) {
  'worklet';
  
}

function App() {
  // const flag = useSharedValue({ height: 0, left: 0, top: 0, width: 0 });
  const flag = useSharedValue(false);

  const flagOverlayStyle = useAnimatedStyle(() => { 
    return {
      backgroundColor: flag.value ? 'blue' : 'red',
      position: 'absolute',
      height: 200,
      width: 200
      // ...flag.value,
    }
  },
    [flag],
  );

  const frameProcessor = useFrameProcessor(frame => {
    'worklet';
    
  }, []);

  const devices = useCameraDevices();
  const device = devices.back;

  useEffect(() => {
    const checkPermissions = async () => {
      await Camera.requestCameraPermission();
    };
    checkPermissions();
  }, []);

  if (device == null) {
    return null;
  }

  return (
    <>
      <Camera
        frameProcessor={frameProcessor}
        frameProcessorFps={5}
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
        orientation="portrait"
      />
    </>
  );
}

export default App;