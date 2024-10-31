import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges multiple class values into a single string using the `twMerge` and `clsx` functions.
 *
 * @param inputs - The class values to be merged.
 * @returns The merged class value as a string.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
