/**
 * Centralized type definitions for game-related data structures.
 * These interfaces match the API response format from the Flask backend.
 */

/**
 * Represents a game publisher
 * @example
 * const publisher: Publisher = {
 *   id: 1,
 *   name: "CodeForge Studios"
 * };
 */
export interface Publisher {
    id: number;
    name: string;
}

/**
 * Represents a game category
 * @example
 * const category: Category = {
 *   id: 1,
 *   name: "Strategy"
 * };
 */
export interface Category {
    id: number;
    name: string;
}

/**
 * Represents a game as returned by the API
 * @example
 * const game: Game = {
 *   id: 1,
 *   title: "DevOps Dominion",
 *   description: "A strategic game about DevOps...",
 *   publisher: { id: 1, name: "CodeForge Studios" },
 *   category: { id: 1, name: "Strategy" },
 *   starRating: 4.7
 * };
 * 
 * // Publisher and category can be null
 * const gameWithoutMetadata: Game = {
 *   id: 2,
 *   title: "Indie Game",
 *   description: "An independent game",
 *   publisher: null,
 *   category: null,
 *   starRating: null
 * };
 */
export interface Game {
    id: number;
    title: string;
    description: string;
    publisher: Publisher | null;
    category: Category | null;
    starRating: number | null;
}
