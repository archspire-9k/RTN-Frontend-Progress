import { TRIANGULATION } from "./TRIANGULATION";
import Canvas, { CanvasRenderingContext2D ,Path2D } from 'react-native-canvas'

export const drawMesh = (prediction : any, can : Canvas) => {
    try {
        if (!prediction) {
            console.log("error")
            return
        }; // do not draw if there is no mesh
        const keyPoints = prediction.keypoints;

        if (!keyPoints) return; // do not draw if there is no keypoints
        const ctx = can.getContext("2d");
        ctx.clearRect(0, 0, can.width, can.height); //clear the canvas after every drawing
        for (let i = 0; i < TRIANGULATION.length / 3; i++) {
            const points = [
                TRIANGULATION[i * 3],
                TRIANGULATION[i * 3 + 1],
                TRIANGULATION[i * 3 + 2],
            ].map((index) => keyPoints[index]);
            drawPath(can, points, true);
        }

        for (let keyPoint of keyPoints) {
            ctx.beginPath();
            ctx.arc(keyPoint.x, keyPoint.y, 1, 0, 3 * Math.PI);
            ctx.fillStyle = "aqua";
            ctx.fill();
        }
    }
    catch (error) {
        console.log(error)
    }
}

const drawPath = (can : Canvas, points: any[], closePath : boolean) => {
    const ctx = can.getContext("2d");
    const region = new Path2D(can);
    region.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < points.length; i++) {
        const point = points[i];
        region.lineTo(point.x, point.y);
    }
    if (closePath) region.closePath();
    ctx.strokeStyle = "black";
    ctx.stroke(region);
};