<template>
    <div class="overflow-y-hidden">
        <!-- -->
        <div class="position-absolute start-0 top-0 end-0">
            <HeadersHeader1 />
        </div>
        <div
            class="media-embed"
            style="height: 100vh; width: 100%; margin: 0; padding: 0"
        >
            <iframe
                id="embedPreview"
                title="Embedded Site Preview"
                src="https://city-of-david-moves.vercel.app/"
                style="width: 100%; height: 100%; border: 0"
                allowfullscreen
            ></iframe>
        </div>
        <!-- <FootersFooter25 /> -->
    </div>
</template>

<script>
import { ref } from "vue";

export default {
    setup() {
        const feature = ref();

        return {};
    },
};
</script>
