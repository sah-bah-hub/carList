<template>
    <div class="vechicles">
        <div class="vechicles__page-header">
            <div class="vechicles__search">
                <InputText
                    type="text"
                    v-model="searchString"
                    placeholder="Search VIN"
                />
                <div class="vechicles__pagination-size">
                    Select vehicles per page:
                    <Dropdown v-model="pageSaze" :options="sizes"/>
                </div>
            </div>
            <button  class="vechicles__add-button">
                <img src="/plus-white.svg" alt="link icon">
                Add Vechicle
            </button>
        </div>
        <div class="vechicles__page-body">
            <CarCard
                :card="card"
                :key="card.id"
                v-for="card in store.searchResponse.data"
            />
        </div>
        <div class="vechicles__page-footer">
            <div class="vechicles__pagination-info">Showing {{page}} out of {{store.searchResponse.meta.total}} </div>
            <div class="vechicles__pagination-setting">
                <button
                    class="vechicles__pagination-button"
                    @click="prevPage"
                >
                    <
                </button>
                <InputText
                    type="number"
                    v-model="page"
                    class="vechicles__pagination-input"
                />
                of
                <InputText
                    type="text"
                    v-model="maxPage"
                    disabled
                    class="vechicles__pagination-input"
                />
                <button
                    class="vechicles__pagination-button"
                    @click="nextPage"
                >
                    >
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useSearchStore } from '~/store/search';
const store = useSearchStore();

const searchString: Ref<String> = ref('');
const sizes: number[] = [9,12,15];
const page: Ref<number> = ref(1);
const pageSaze: Ref<number> = ref(9);

await store.getSearchResponse({
    per_page:pageSaze.value,
    page:page.value,
    search:searchString.value
});

const maxPage: Ref<number> = ref(store.searchResponse.meta.last_page);
const nextPage = () => {
    if (page.value < maxPage.value) {
        page.value += 1; 
    } 
}
const prevPage = () => {
    if (page.value > 1) {
        page.value -= 1; 
    } 
}
watch(page, () => {
    store.getSearchResponse({
        per_page:pageSaze.value,
        page:page.value,
        search:searchString.value
    });
})
watch(pageSaze, () => {
    store.getSearchResponse({
        per_page:pageSaze.value,
        page:page.value,
        search:searchString.value
    });
})
let timeoutId;
const findByString = () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(function() {
        store.getSearchResponse({
            per_page:pageSaze.value,
            page:page.value,
            search:searchString.value
        });
    }, 1000);

}
watch(searchString, () => {
    findByString()
})
</script>