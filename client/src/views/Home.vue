<template>
  <div class="home">
    <JobList></JobList>
  </div>
</template>

<script>
// @ is an alias to /src
import JobList from '../components/JobList.vue'
export default {
  name: 'Home',
  components: {
    JobList
  }
}
</script>
