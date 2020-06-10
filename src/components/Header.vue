<template>
  <div>
    <b-nav tabs>
      <b-nav-item class="home">
        <router-link to="/">
          <b>Take Notes!</b>
        </router-link>
      </b-nav-item>
    </b-nav>
  </div>
</template>

<style scoped>
.home b {
    color: blue;
}
.home :hover {
    color: blue;
    text-decoration: none;
}
</style>