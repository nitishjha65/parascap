// lib/utils.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format the WordPress date string to a more readable format.
 * Example: "May 31, 2024"
 */
export function formatDate(dateString: string | Date): string {
  try {
    const date = new Date(dateString);
    // Validate date before formatting
    if (isNaN(date.getTime())) {
      console.warn(`Invalid date string received: ${dateString}`);
      return "Invalid Date";
    }
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch (error) {
    console.error(`Error formatting date: ${dateString}`, error);
    return "Invalid Date";
  }
}

/**
 * Strip HTML tags from a string. Works on server and client.
 */
export function stripHtml(html: string | null | undefined): string {
  if (!html) return "";

  // Use DOMParser on the client-side for better accuracy
  if (typeof window !== "undefined" && window.DOMParser) {
    try {
      const doc = new DOMParser().parseFromString(html, "text/html");
      return doc.body.textContent || "";
    } catch (e) {
      console.error("Error parsing HTML string on client", e);
      // Fallback to regex if DOMParser fails
      return html.replace(/<[^>]*>/g, "");
    }
  }

  // Basic regex replacement for server-side or environments without DOMParser
  return html.replace(/<[^>]*>/g, "");
}

/**
 * Calculate approximate read time in minutes.
 * @param text The text content.
 * @param wpm Words per minute reading speed (default: 200).
 */
export function calculateReadTime(text: string, wpm = 200): number {
  if (!text) return 0;
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);
  return time;
}
