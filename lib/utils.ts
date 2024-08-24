import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
 return twMerge(clsx(inputs));
}

export function generateRandomNumber(min: number, max: number) {
 const range = max - min + 1;
 return Math.floor(Math.random() * range) + min;
}

export function calculateDistance(
 x1: number,
 y1: number,
 x2: number,
 y2: number,
) {
 const dx = x2 - x1;
 const dy = y2 - y1;
 return Math.sqrt(dx * dx + dy * dy);
}

export function Sleep(duration: number = 1000) {
 return new Promise((resolve) => setTimeout(resolve, duration));
}
