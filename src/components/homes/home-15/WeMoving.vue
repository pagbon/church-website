<template>
    <div class="content-wrapper">
        <section class="hero py-5 bg-light">
            <div class="container py-4">
                <!-- <div class="row g-4 align-items-center"> -->
                <div class="col-md-12">
                    <div class="shadow rounded overflow-hidden">
                        <img
                            class="img-fluid w-100"
                            :src="content.image.asset.url"
                            alt="Banner image"
                        />
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="my-4 text-center">
                        <h1 class="display-5 fw-bold mb-3">
                            {{ content.heading }}
                        </h1>
                        <p class="lead text-muted mb-0 card-text w-75 mx-auto">
                            {{ content.description }}
                        </p>
                    </div>

                    <div class="row g-3 mb-4">
                        <article
                            class="col-12 col-sm-6 col-lg"
                            v-for="(card, index) in content.cards"
                            :key="index"
                        >
                            <div class="card h-100 border-0 shadow-sm">
                                <div class="card-body text-center">
                                    <div class="me-3">
                                        <div
                                            class="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-2"
                                            style="width: 56px; height: 56px"
                                            v-if="index === 0"
                                        >
                                            <svg
                                                width="28"
                                                height="28"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                role="img"
                                                aria-label="Location icon"
                                            >
                                                <path
                                                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </div>
                                        <div
                                            class="bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-2"
                                            style="width: 56px; height: 56px"
                                            v-else
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                class="bi bi-clock"
                                                viewBox="0 0 16 16"
                                            >
                                                <path
                                                    d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"
                                                />
                                                <path
                                                    d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <p class="card-text text-muted mb-0">
                                            {{ card.description }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>

                    <div class="d-flex flex-column gap-3">
                        <p class="mb-0 text-muted flex-grow-1">
                            {{ content.paragraph }}
                            <router-link
                                :to="content.ctaRoute"
                                class="btn btn-link p-0 rounded-pill"
                            >
                                {{ content.ctaText }}
                            </router-link>
                        </p>
                    </div>
                </div>
                <!-- </div> -->
            </div>
        </section>
    </div>
</template>

<script setup>
defineProps({
    content: Object,
});
</script>
