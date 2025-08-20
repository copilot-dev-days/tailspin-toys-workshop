<script lang="ts">
    import { createEventDispatcher } from 'svelte';

    interface Publisher {
        id: number;
        name: string;
        description: string;
    }

    interface Category {
        id: number;
        name: string;
        description: string;
    }

    export let selectedPublisherId: number | null = null;
    export let selectedCategoryId: number | null = null;

    let publishers: Publisher[] = [];
    let categories: Category[] = [];
    let loading = false;
    let error: string | null = null;

    const dispatch = createEventDispatcher();

    // Fetch publishers and categories on component mount
    async function fetchFilterData() {
        loading = true;
        error = null;
        
        try {
            const [publishersResponse, categoriesResponse] = await Promise.all([
                fetch('/api/publishers/'),
                fetch('/api/categories/')
            ]);

            if (publishersResponse.ok && categoriesResponse.ok) {
                publishers = await publishersResponse.json();
                categories = await categoriesResponse.json();
            } else {
                throw new Error('Failed to fetch filter data');
            }
        } catch (err) {
            error = `Error loading filters: ${err instanceof Error ? err.message : String(err)}`;
        } finally {
            loading = false;
        }
    }

    // Handle publisher filter change
    function onPublisherChange(event: Event) {
        const target = event.target as HTMLSelectElement;
        selectedPublisherId = target.value ? parseInt(target.value) : null;
        dispatch('filterChange', {
            publisherId: selectedPublisherId,
            categoryId: selectedCategoryId
        });
    }

    // Handle category filter change
    function onCategoryChange(event: Event) {
        const target = event.target as HTMLSelectElement;
        selectedCategoryId = target.value ? parseInt(target.value) : null;
        dispatch('filterChange', {
            publisherId: selectedPublisherId,
            categoryId: selectedCategoryId
        });
    }

    // Clear all filters
    function clearFilters() {
        selectedPublisherId = null;
        selectedCategoryId = null;
        dispatch('filterChange', {
            publisherId: null,
            categoryId: null
        });
    }

    // Initialize filter data when component mounts
    fetchFilterData();
</script>

<div class="mb-6 bg-slate-800/40 backdrop-blur-sm rounded-xl p-4 border border-slate-700/50">
    <h3 class="text-lg font-medium text-slate-100 mb-4">Filter Games</h3>
    
    {#if loading}
        <div class="animate-pulse">
            <div class="flex flex-col sm:flex-row gap-4">
                <div class="flex-1">
                    <div class="h-4 bg-slate-700 rounded w-24 mb-2"></div>
                    <div class="h-10 bg-slate-700 rounded"></div>
                </div>
                <div class="flex-1">
                    <div class="h-4 bg-slate-700 rounded w-24 mb-2"></div>
                    <div class="h-10 bg-slate-700 rounded"></div>
                </div>
            </div>
        </div>
    {:else if error}
        <div class="text-red-400 text-sm bg-red-900/20 p-3 rounded-lg border border-red-700/30">
            {error}
        </div>
    {:else}
        <div class="flex flex-col sm:flex-row gap-4 items-end">
            <!-- Publisher Filter -->
            <div class="flex-1">
                <label for="publisher-filter" class="block text-sm font-medium text-slate-300 mb-2">
                    Publisher
                </label>
                <select
                    id="publisher-filter"
                    on:change={onPublisherChange}
                    value={selectedPublisherId || ''}
                    class="w-full px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-slate-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                >
                    <option value="">All Publishers</option>
                    {#each publishers as publisher}
                        <option value={publisher.id}>{publisher.name}</option>
                    {/each}
                </select>
            </div>

            <!-- Category Filter -->
            <div class="flex-1">
                <label for="category-filter" class="block text-sm font-medium text-slate-300 mb-2">
                    Category
                </label>
                <select
                    id="category-filter"
                    on:change={onCategoryChange}
                    value={selectedCategoryId || ''}
                    class="w-full px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-slate-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                >
                    <option value="">All Categories</option>
                    {#each categories as category}
                        <option value={category.id}>{category.name}</option>
                    {/each}
                </select>
            </div>

            <!-- Clear Filters Button -->
            {#if selectedPublisherId || selectedCategoryId}
                <div class="sm:flex-shrink-0">
                    <button
                        on:click={clearFilters}
                        class="w-full sm:w-auto px-4 py-2 bg-slate-600/50 hover:bg-slate-600/70 text-slate-100 rounded-lg transition-colors border border-slate-500/50 hover:border-slate-500/70"
                    >
                        Clear Filters
                    </button>
                </div>
            {/if}
        </div>

        <!-- Active Filter Indicators -->
        {#if selectedPublisherId || selectedCategoryId}
            <div class="mt-3 flex flex-wrap gap-2">
                {#if selectedPublisherId}
                    {#each publishers as publisher}
                        {#if publisher.id === selectedPublisherId}
                            <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-900/30 text-blue-300 border border-blue-700/30">
                                Publisher: {publisher.name}
                            </span>
                        {/if}
                    {/each}
                {/if}
                {#if selectedCategoryId}
                    {#each categories as category}
                        {#if category.id === selectedCategoryId}
                            <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-900/30 text-green-300 border border-green-700/30">
                                Category: {category.name}
                            </span>
                        {/if}
                    {/each}
                {/if}
            </div>
        {/if}
    {/if}
</div>

<style>
    /* Ensure dropdowns work well on mobile */
    @media (max-width: 640px) {
        select {
            font-size: 16px; /* Prevent zoom on iOS */
        }
    }
</style>
