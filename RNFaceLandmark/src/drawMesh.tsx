import { TRIANGULATION } from "./TRIANGULATION";

export const drawMesh = (prediction, ctx) => {
    try {
        if (!prediction) {
            console.log("error")
            return
        }; // do not draw if there is no mesh
        const keyPoints = prediction.keypoints;

        if (!keyPoints) return; // do not draw if there is no keypoints
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); //clear the canvas after every drawing
        for (let i = 0; i < TRIANGULATION.length / 3; i++) {
            const points = [
                TRIANGULATION[i * 3],
                TRIANGULATION[i * 3 + 1],
                TRIANGULATION[i * 3 + 2],
            ].map((index) => keyPoints[index]);
            drawPath(ctx, points, true);
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

const drawPath = (ctx, points, closePath) => {
    const region = new Path2D();
    region.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < points.length; i++) {
        const point = points[i];
        region.lineTo(point.x, point.y);
    }
    if (closePath) region.closePath();
    ctx.stokeStyle = "black";
    ctx.stroke(region);
};