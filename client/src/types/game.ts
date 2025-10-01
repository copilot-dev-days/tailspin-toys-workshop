/**
 * Centralized type definitions for game-related data structures.
 * These interfaces match the API response format from the Flask backend.
 */

/**
 * Represents a game publisher
 */
export interface Publisher {
    id: number;
    name: string;
}

/**
 * Represents a game category
 */
export interface Category {
    id: number;
    name: string;
}

/**
 * Represents a game as returned by the API
 */
export interface Game {
    id: number;
    title: string;
    description: string;
    publisher: Publisher | null;
    category: Category | null;
    starRating: number | null;
}
