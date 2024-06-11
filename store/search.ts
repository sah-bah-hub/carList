import { defineStore } from 'pinia';

export const useSearchStore = defineStore('searchStore', () => {
    const searchResponse = ref([]);
    const total: Ref<Number> = ref(0);

    const getSearchResponse = async (form) => {
        try {
            const { data, error } = await useFetch(
                `https://api.caiman-app.de/api/cars-test?${new URLSearchParams(form).toString()}`,
            );
            const json = data.value;
            if (json) {
                searchResponse.value = json;
                total.value = json.meta.total;
            } else {
                console.error('Ошибка в ответе при получении данных:', error);

            }
        } catch (error) {
            console.error('Ошибка при получении данных объекта:', error);
        }
    };

    return {
        getSearchResponse,
        searchResponse,
        total
    };
});
export default null;