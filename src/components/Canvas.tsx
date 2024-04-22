import { useGameStore, useSocketIoStore } from "@/store/store";
import { useRef, useState } from "react";
import {
  CanvasPath,
  ReactSketchCanvas,
  ReactSketchCanvasRef,
} from "react-sketch-canvas";

const Canvas = (refPass: any) => {
  const game = useGameStore();
  const socket = useSocketIoStore();
  const canvasRef = useRef<ReactSketchCanvasRef>(null);
  const handleDrawing = async (updatedPaths: CanvasPath[]) => {
    const data: CanvasPath[] | undefined =
      await canvasRef.current?.exportPaths();
    if (data) {
      socket.sendDraw(data);
    }
    // send this data to server via socket
    // and use the loadPaths method to load the data
  };
  return (
    <ReactSketchCanvas
      className="aspect-video overflow-hidden border border-black cursor-draw"
      // canvasColor="#18181b"
      canvasColor={game.canvasColor}
      strokeWidth={game.strokeWidth}
      eraserWidth={game.eraserWidth}
      strokeColor={game.strokeColor}
      width="100%"
      height="100%"
      onChange={handleDrawing}
      ref={refPass}
    />
  );
};

export default Canvas;
