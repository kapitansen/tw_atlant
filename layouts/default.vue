<template>
  <v-app dark>
    <v-navigation-drawer v-model="localSettings.drawer" app clipped expand-on-hover>
      <v-list dense>
        <v-list-item link no-prefetch nuxt to="/dashboard">
          <v-list-item-action>
            <v-icon>mdi-book-open-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link no-prefetch nuxt to="/blockchain">
          <v-list-item-action>
            <v-icon>mdi-bitcoin</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Blockchain</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-if="localSettings.newsOn" link nuxt to="/news">
          <v-list-item-action>
            <v-icon>mdi-comment-alert-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>News</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-if="localSettings.projectsOn" link nuxt to="/projects">
          <v-list-item-action>
            <v-icon>mdi-clipboard-text</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Projects</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link nuxt to="/settings">
          <v-list-item-action>
            <v-icon>mdi-cog-box</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left dense>
      <nuxt-link to="/" class="link-unstyled">
        <v-icon color="#ffae4a" size="24px" class="">
          mdi-home-circle
        </v-icon>
        <v-toolbar-title class="atl-name ml-2">
          Real Estate App
        </v-toolbar-title>
      </nuxt-link>
      <v-spacer />
    </v-app-bar>

    <v-content>
      <nuxt />
    </v-content>

    <v-footer app>
      <v-app-bar-nav-icon @click.stop="changeDrawer" />
      <div class="ml-auto mr-2">
        Made with <v-icon color="red">
          mdi-heart
        </v-icon> in 2020
      </div>
    </v-footer>
  </v-app>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  computed: {
    localSettings () {
      return JSON.parse(JSON.stringify(this.$store.state.settings))
    }
  },
  watch: {
    localSettings () { this.$vuetify.theme.dark = this.localSettings.themeDark }
  },
  methods: {
    changeDrawer () {
      this.localSettings.drawer = !(this.localSettings.drawer)
      this.changeSettings(this.localSettings)
    },
    ...mapMutations(['changeSettings'])
  }
}
</script>

<style>
  .link-unstyled {
    color: inherit;
    display: inherit;
    text-decoration: none;
  }
</style>
