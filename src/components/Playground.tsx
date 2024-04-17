import { ReactSketchCanvas, ReactSketchCanvasRef } from "react-sketch-canvas";
import Navbar from "./Navbar";
import { Slider } from "@/components/ui/slider";
import {
  IconEraser,
  IconPencil,
  IconArrowBackUp,
  IconArrowForwardUp,
  IconTrash,
  IconLogout,
} from "@tabler/icons-react";
import { useGameStore } from "@/store/store";
// import { convertToStandardized, convertToDevice } from "@/lib/utils";
import { useRef, useState } from "react";
import PlayerList from "./PlayerList";
import ChatList from "./ChatList";

const Playground = () => {
  const game = useGameStore();
  const canvasRef = useRef<ReactSketchCanvasRef>(null);

  const [eraser, setEraser] = useState(false);
  const iconButton =
    "p-2 rounded-xl border cursor-pointer dark:border-accent-900 dark:text-accent-200";
  const defaultIconButton =
    "bg-transparent text-accent-900 hover:bg-accent-100 dark:hover:bg-accent-800";
  const selectedIcon =
    "bg-accent-500 text-white-50 hover:bg-accent-600 hover:text-accent-50 border-2 border-black";

  const handleDrawing = async (updatedPaths: CanvasPath[]) => {
    const data = await canvasRef.current?.exportPaths();
    // console.log(data);
    // send this data to server via socket
    // and use the loadPaths method to load the data
  };
  return (
    <div className="h-screen flex flex-col overflow-y-auto">
      {/* <div className="h-12 w-full border-b">psajdfp</div> */}
      <Navbar />
      <div className="h-full box-border p-2 grid grid-cols-5 grid-rows-3 gap-2">
        <div className="md:flex flex-col h-full col-span-2 md:col-span-1 row-start-3  sm:row-start-1 row-end-3 md:row-span-3 overflow-hidden">
          <PlayerList />
        </div>
        <div className="col-span-5 sm:col-span-3 gap-2 flex flex-col h-full">
          <div className="bg-background border border-foreground rounded-sm p-2 flex">
            <button
              className="flex items-center gap-1 text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-amber-600 font-bold uppercase text-xs px-2 py-2 rounded outline-none focus:outline-none ease-linear transition-all duration-150"
              type="button"
            >
              <IconLogout className="rotate-180" />
              Exit
            </button>
          </div>
          <div className="relative box-border">
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
              ref={canvasRef}
            />
            <label className="inline-flex items-center cursor-pointer absolute bottom-0 right-0 p-4">
              <input
                checked={game.canvasColor === "#18181b"}
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange={(event) => {
                  console.log(event.target.checked);
                  if (event.target.checked) {
                    game.setCanvasColor("#18181b");
                  } else {
                    game.setCanvasColor("#ffffff");
                  }
                }}
              />
              <div className="relative w-10 h-6 border-2 border-slate-900 bg-gray-200 peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-slate-900 peer-checked:border-white"></div>
            </label>
          </div>
          <div className="w-full bg-background rounded-sm flex border border-black">
            <div className="flex items-center gap-2 w-full p-2">
              <Slider
                defaultValue={[5]}
                max={100}
                min={1}
                step={1}
                className="w-64 p-1"
                onValueChange={(value) => {
                  console.log(value);
                  game.setPointerWidth(value);
                }}
              />
              <div className="h-9 w-9 rounded-full overflow-hidden">
                <input
                  title="Color"
                  className="w-[200%] h-[200%] bg-transparent border-none cursor-pointer appearance-none transform-cpu -translate-x-1/4 -translate-y-1/4"
                  type="color"
                  value={game.strokeColor}
                  onChange={(event) => {
                    const newColor = event.target.value;
                    game.setStrokeColor(newColor);
                  }}
                />
              </div>
              <button
                title="Pencil"
                className={`${iconButton} ${!eraser ? selectedIcon : defaultIconButton}`}
                type="button"
                aria-label="pencil"
                onClick={() => {
                  setEraser(false);
                  if (canvasRef.current) {
                    canvasRef.current.eraseMode(false);
                  }
                }}
              >
                <IconPencil />
              </button>
              <button
                title="Eraser"
                className={`${iconButton}  ${eraser ? selectedIcon : defaultIconButton}`}
                type="button"
                aria-label="eraser"
                onClick={() => {
                  setEraser(true);
                  if (canvasRef.current) {
                    canvasRef.current.eraseMode(true);
                  }
                }}
              >
                <IconEraser />
              </button>
              <button
                title="Undo"
                className={`${iconButton} ${defaultIconButton}`}
                type="button"
                aria-label="undo"
                onClick={() => {
                  if (canvasRef.current) {
                    canvasRef.current?.undo();
                  }
                }}
              >
                <IconArrowBackUp />
              </button>
              <button
                title="Redo"
                className={`${iconButton} ${defaultIconButton}`}
                type="button"
                aria-label="Redo"
                onClick={() => {
                  if (canvasRef.current) {
                    canvasRef.current?.redo();
                  }
                }}
              >
                <IconArrowForwardUp />
              </button>
              <button
                title="Reset"
                className={`${iconButton} ${defaultIconButton}`}
                type="button"
                aria-label="clear"
                onClick={() => {
                  if (canvasRef.current) {
                    canvasRef.current.clearCanvas();
                  }
                }}
              >
                <IconTrash />
              </button>
            </div>
          </div>
        </div>
        <ChatList />
      </div>
    </div>
  );
};

export default Playground;
