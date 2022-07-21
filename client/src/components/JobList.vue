<template>
  <div class="container ml-4">
    <div
      class="row d-flex justify-content-center align-items-center p-3 text-light"
    >
      <CardJob v-for="job in jobs" :key="job.id" :job="job"></CardJob>
      <div class="d-flex justify-content-center my-5">
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link" href="#" @click.prevent="gotoPage('prev')"
                >Previous</a
              >
            </li>
            <li class="page-item">
              <a class="page-link" href="#" @click.prevent="gotoPage(1)">1</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#" @click.prevent="gotoPage(2)">2</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#" @click.prevent="gotoPage(3)">3</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#" @click.prevent="gotoPage(4)">4</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#" @click.prevent="gotoPage('next')"
                >Next</a
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import CardJob from './CardJob.vue'
export default {
  name: 'JobList',
  components: {
    CardJob
  },
  computed: {
    jobs () {
      return this.$store.state.jobs
    }
  },
  created () {
    this.$store.dispatch('fetchJobs')
  }
}
</script>

<style></style>
