<template>
  <div>
    <nav
      id="sidebar"
      class="col-md-3 col-lg-2 d-md-block collaps"
      style="background-color: #293b5f; padding-top: 0"
    >
      <h2 class="nav-link active my-4 text-white">JobPortal</h2>
      <div class="position-sticky">
        <ul class="nav flex-column">
          <li class="nav-item">
            <a href="" class="nav-link text-white"> <h5>Job List</h5></a>
          </li>
          <li class="nav-item">
            <a href="" class="nav-link text-white"> <h5>Bookmark List</h5></a>
          </li>
        </ul>
        <div>
          <div class="input-group my-5">
            <input
              type="search"
              class="form-control rounded"
              placeholder="Search title"
              aria-label="Search"
              aria-describedby="search-addon"
            />
            <button type="button" class="btn btn-outline-primary">
              search
            </button>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'SideBar'
}
</script>

<style></style>
