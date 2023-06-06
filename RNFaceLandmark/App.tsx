import React, { useEffect, useRef, useState } from 'react';
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
import { Canvas, Image, Circle, useCanvasRef } from '@shopify/react-native-skia';
import * as faceLandmarksDetection from "@tensorflow-models/face-landmarks-detection";
// import { drawMesh } from './src/drawMesh';

const inputResolution = {
  width: 1280,
  height: 720,
};
const videoConstraints = {
  width: inputResolution.width,
  height: inputResolution.height,
};

const model = faceLandmarksDetection.SupportedModels.MediaPipeFaceMesh;
const detectorConfig: faceLandmarksDetection.MediaPipeFaceMeshTfjsModelConfig = {
  runtime: 'tfjs', // or 'tfjs',
  refineLandmarks: false
};


export function objectDetect(frame: Frame) {
  'worklet';

}

function App() {
  const canvasRef = useCanvasRef();
  const [detector, setDetector] = useState<faceLandmarksDetection.FaceLandmarksDetector>();
  // const flag = useSharedValue({ height: 0, left: 0, top: 0, width: 0 });


  // const handleFrameLoad = (frame: Frame) => {
  //   'worklet';
  //   if (canvasRef.current) {
  //     const imageElement = new Image(canvasRef.current, inputResolution.width, inputResolution.height);
  //     imageElement.crossOrigin = "anonymous";
  //   }
  //   const detect = async (net: faceLandmarksDetection.FaceLandmarksDetector | undefined) => {
  //     // const estimationConfig = { flipHorizontal: false };
  //     const faces = await net?.estimateFaces(frame).catch(e => console.error(e));

  //     // console.log(faces[0])
  //     requestAnimationFrame(() => faces && drawMesh(faces[0], canvasRef.current!));
  //     detect(detector);
  //   };
  //   detect(detector);
  // }

  const frameProcessor = useFrameProcessor(frame => {
    'worklet';
    // handleFrameLoad(frame);
  }, []);

  const devices = useCameraDevices();
  const device = devices.back;

  useEffect(() => {
    const checkPermissions = async () => {
      await Camera.requestCameraPermission();
    };
    checkPermissions();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      // you can pass an optional rectangle
      // to only save part of the image
      const image = canvasRef.current?.makeImageSnapshot();
      if (image) {
        // you can use image in an <Image> component
        // Or save to file using encodeToBytes -> Uint8Array
        const bytes = image.encodeToBytes();
      }
    }, 1000)
  });
  // useEffect(() => {
  //   const checkPermissions = async () => {
  //     const detector = await faceLandmarksDetection.createDetector(
  //       model,
  //       detectorConfig
  //     );
  //     setDetector(detector);
  //   }
  // }, []);

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


      {/* // style={{ */}
      {/* //   position: "absolute",
      //   marginLeft: "auto",
      //   marginRight: "auto",
      //   left: 0,
      //   right: 0,
      //   width: inputResolution.width,
      //   height: inputResolution.height */}
      {/* // }} */}
      <Canvas style={{ flex: 1 }} ref={canvasRef}>
        <Circle r={128} cx={128} cy={128} color="red" />
      </Canvas>
    </>
  );
}

export default App;