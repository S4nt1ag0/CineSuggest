<script>
import { RouterLink, RouterView } from 'vue-router'
import Logo from './icons/logoSVG.vue'
import Profile from './icons/profileSVG.vue'
export default {
  components: {
    Logo,
    Profile
  }
}
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">
          <Logo width="40vw" />
        </RouterLink>
        <RouterLink to="/about">
          <div class="profile-container">
            <Profile width="32px" height="32px" />
          </div>
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
header {
  position: sticky;
  top: 0px;
}
.wrapper {
  width: 100%;
  position: relative;
}
nav {
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 1rem;
}

nav:hover {
  /* background-color: rgba(84, 84, 84, 0.65); */
  background: linear-gradient(#545454a6, transparent);
}
.profile-container {
  border-radius: 50%;
  background-color: #d9d9d9;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 768px) {
  .profile-container {
    width: 40px;
    height: 40px;
  }
}
</style>
