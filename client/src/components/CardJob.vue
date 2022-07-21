<template>
  <div class="card col-4 m-2 shadow mx-2 px-4">
    <h2 class="card-title text-black">{{ job.tittle }}</h2>

    <!-- <img
      :src="job.Companies[0].logo"
      class="card-img-top py-4"
      alt="loading image..."
      height="200px"
      width="150px"
    /> -->
    <div class="card-body">
      <!-- <h5 class="card-title">Title: {{ movie.title }}</h5>
      <p class="card-text">Genre: {{ movie.Genre.name }}</p>
      <p class="card-text">Author: {{ movie.User.username }}</p> -->
      <p class="card-text text-black">Requirement: {{ job.requirement }}</p>
      <a href="#" class="btn btn-success text-center text-light">Apply</a>
      <a href="#" class="btn btn-info text-center text-light">Detail</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardJob',
  props: ['job']
}
</script>

<style></style>
