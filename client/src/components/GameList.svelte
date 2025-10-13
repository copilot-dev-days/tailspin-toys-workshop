<script lang="ts">
    import { onMount } from "svelte";
    import GameFilters from "./GameFilters.svelte";

    interface Game {
        id: number;
        title: string;
        description: string;
        publisher?: {
            id: number;
            name: string;
        };
        category?: {
            id: number;
            name: string;
        };
        starRating?: number;
    }

    export let games: Game[] = [];
    let loading = true;
    let error: string | null = null;
    let selectedPublisherId: number | null = null;
    let selectedCategoryId: number | null = null;

    // Function to build API URL with filters
    function buildApiUrl(): string {
        const params = new URLSearchParams();
        
        if (selectedPublisherId) {
            params.append('publisher_id', selectedPublisherId.toString());
        }
        
        if (selectedCategoryId) {
            params.append('category_id', selectedCategoryId.toString());
        }
        
        const queryString = params.toString();
        return `/api/games${queryString ? '?' + queryString : ''}`;
    }

    // Function to update URL parameters for shareable filtered views
    function updateUrlParams() {
        if (typeof window !== 'undefined') {
            const url = new URL(window.location.href);
            
            // Clear existing filter params
            url.searchParams.delete('publisher_id');
            url.searchParams.delete('category_id');
            
            // Add current filter params
            if (selectedPublisherId) {
                url.searchParams.set('publisher_id', selectedPublisherId.toString());
            }
            
            if (selectedCategoryId) {
                url.searchParams.set('category_id', selectedCategoryId.toString());
            }
            
            // Update URL without page reload
            window.history.replaceState({}, '', url.toString());
        }
    }

    // Function to parse URL parameters on load
    function parseUrlParams() {
        if (typeof window !== 'undefined') {
            const urlParams = new URLSearchParams(window.location.search);
            
            const publisherParam = urlParams.get('publisher_id');
            if (publisherParam) {
                selectedPublisherId = parseInt(publisherParam);
            }
            
            const categoryParam = urlParams.get('category_id');
            if (categoryParam) {
                selectedCategoryId = parseInt(categoryParam);
            }
        }
    }

    // Fetch games with current filters
    const fetchGames = async () => {
        loading = true;
        error = null;
        
        try {
            const response = await fetch(buildApiUrl());
            if(response.ok) {
                games = await response.json();
            } else {
                error = `Failed to fetch data: ${response.status} ${response.statusText}`;
            }
        } catch (err) {
            error = `Error: ${err instanceof Error ? err.message : String(err)}`;
        } finally {
            loading = false;
        }
    };

    // Handle filter changes from GameFilters component
    function handleFilterChange(event: CustomEvent) {
        const { publisherId, categoryId } = event.detail;
        selectedPublisherId = publisherId;
        selectedCategoryId = categoryId;
        
        updateUrlParams();
        fetchGames();
    }

    onMount(() => {
        parseUrlParams();
        fetchGames();
    });
</script>

<div>
    <h2 class="text-2xl font-medium mb-6 text-slate-100">Featured Games</h2>
    
    <!-- Filter Component -->
    <GameFilters 
        bind:selectedPublisherId 
        bind:selectedCategoryId 
        on:filterChange={handleFilterChange}
    />
    
    {#if loading}
        <!-- loading animation -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {#each Array(6) as _, i}
                <div class="bg-slate-800/60 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-slate-700/50">
                    <div class="p-6">
                        <div class="animate-pulse">
                            <div class="h-6 bg-slate-700 rounded w-3/4 mb-3"></div>
                            <div class="h-4 bg-slate-700 rounded w-1/2 mb-4"></div>
                            <div class="h-3 bg-slate-700 rounded w-full mb-3"></div>
                            <div class="h-3 bg-slate-700 rounded w-5/6 mb-4"></div>
                            <div class="h-2 bg-slate-700 rounded-full w-full mb-2"></div>
                            <div class="h-4 bg-slate-700 rounded w-1/4 mt-4"></div>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    {:else if error}
        <!-- error display -->
        <div class="text-center py-12 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700">
            <p class="text-red-400">{error}</p>
        </div>
    {:else if games.length === 0}
        <!-- no games found -->
        <div class="text-center py-12 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700">
            <p class="text-slate-300">
                {#if selectedPublisherId || selectedCategoryId}
                    No games found matching the selected filters.
                {:else}
                    No games available at the moment.
                {/if}
            </p>
        </div>
    {:else}
        <!-- game list -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" data-testid="games-grid">
            {#each games as game (game.id)}
                <a 
                    href={`/game/${game.id}`} 
                    class="group block bg-slate-800/60 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-slate-700/50 hover:border-blue-500/50 hover:shadow-blue-500/10 hover:shadow-xl transition-all duration-300 hover:translate-y-[-6px]"
                    data-testid="game-card"
                    data-game-id={game.id}
                    data-game-title={game.title}
                >
                    <div class="p-6 relative">
                        <div class="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div class="relative z-10">
                            <h3 class="text-xl font-semibold text-slate-100 mb-2 group-hover:text-blue-400 transition-colors" data-testid="game-title">{game.title}</h3>
                            
                            {#if game.category || game.publisher}
                                <div class="flex gap-2 mb-3">
                                    {#if game.category}
                                        <span class="text-xs font-medium px-2.5 py-0.5 rounded bg-blue-900/60 text-blue-300" data-testid="game-category">
                                            {game.category.name}
                                        </span>
                                    {/if}
                                    {#if game.publisher}
                                        <span class="text-xs font-medium px-2.5 py-0.5 rounded bg-purple-900/60 text-purple-300" data-testid="game-publisher">
                                            {game.publisher.name}
                                        </span>
                                    {/if}
                                </div>
                            {/if}
                            
                            <p class="text-slate-400 mb-4 text-sm line-clamp-2" data-testid="game-description">{game.description}</p>
                            
                            {#if game.starRating}
                                <div class="flex items-center mb-3">
                                    <div class="flex items-center">
                                        {#each Array(5) as _, i}
                                            <svg class="w-4 h-4 {i < Math.floor(game.starRating) ? 'text-yellow-400' : 'text-slate-600'}" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                            </svg>
                                        {/each}
                                        <span class="text-slate-400 text-sm ml-2">{game.starRating}</span>
                                    </div>
                                </div>
                            {/if}
                            
                            <div class="mt-4 text-sm text-blue-400 font-medium flex items-center">
                                <span>View details</span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1 transform transition-transform duration-300 group-hover:translate-x-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </a>
            {/each}
        </div>
    {/if}
</div>