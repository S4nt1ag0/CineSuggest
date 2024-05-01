<script setup>
import MovieDetails from '@/components/MovieDetails/movieDetails.vue'
</script>

<template>
  <main>
    <MovieDetails :movieId="$route.params.id" />
  </main>
</template>
