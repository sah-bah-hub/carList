<template>
    <div class="car-card">
        <img :src="props.card.preview" alt="car image" class="car-card__image">
        <h2 class="car-card__title">{{ props.card.vehicle_name}}</h2>
        <p class="car-card__vin"> WDB {{ props.card.vin }}</p>
        <div class="car-card__footer">
            <div class="car-card__count"> {{ props.card.angles_count }}/30</div>
            <div class="car-card__date"> {{ daysAgo }} days left</div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['card']);
const daysAgo = computed(() => {
    var date2 = new Date();
    var timeDiff = Math.abs(date2.getTime() - new Date(Date(props.card.created_at)).getTime());
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
    return diffDays;
})
</script>