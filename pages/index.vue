<template>
  <div class="text-center fill-height d-flex flex-column justify-center align-center">
    <div>
      <v-icon color="#ffae4a" size="100px" class="mb-2 atl-logo">
        mdi-home-circle
      </v-icon>
    </div>
    <div>
      <h1 class="display-1 atl-name">
        Real Estate App
      </h1>
      <div class="headline atl-headline mt-1">
        Some exciting text <v-icon color="#2e5579">
          mdi-emoticon-devil-outline
        </v-icon>
      </div>
    </div>
    <div class="mt-4">
      <v-btn href="https://github.com/kapitansen/tw_atlant/blob/master/README.md" target="_blank" outlined class="mr-2">
        Readme
      </v-btn>
      <v-btn href="https://github.com/kapitansen/tw_atlant" target="_blank" outlined>
        GitHub
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'Welcome'
    }
  }
}
</script>

<style>

.atl-logo {
  -webkit-animation: rotate-center 0.6s ease-in-out both;
  animation: rotate-center 0.6s ease-in-out both;
}

/**
 * ----------------------------------------
 * animation rotate-center
 * ----------------------------------------
 */
@-webkit-keyframes rotate-center {
  0% {
    -webkit-transform: rotate(0);
            transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes rotate-center {
  0% {
    -webkit-transform: rotate(0);
            transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}

</style>
