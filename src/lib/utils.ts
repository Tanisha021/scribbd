import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Convert drawing coordinates to the standardized system
export function convertToStandardized(
  x: number,
  y: number,
  screenWidth: number,
  screenHeight: number
) {
  return {
    x: (x / screenWidth) * 1000,
    y: (y / screenHeight) * 1000,
  };
}

// Convert standardized coordinates back to the specific device's dimensions
export function convertToDevice(
  x: number,
  y: number,
  screenWidth: number,
  screenHeight: number
) {
  return {
    x: (x / 1000) * screenWidth,
    y: (y / 1000) * screenHeight,
  };
}

// // Example usage
// const { x, y } = convertToStandardized(userX, userY, userScreenWidth, userScreenHeight);
// // Send { x, y } to server for broadcasting

// // When receiving coordinates
// const { x: deviceX, y: deviceY } = convertToDevice(receivedX, receivedY, myScreenWidth, myScreenHeight);
