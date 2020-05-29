<template>
  <div id="dashboard" class="fill-height">
    <v-snackbar
      v-model="settingsTip"
      color="blue"
      timeout.number="6000"
      top
    >
      To return an item, click on the gear in the upper-right part of the Dashboard
      <v-btn
        text
        @click="settingsTip = false"
      >
        Close
      </v-btn>
    </v-snackbar>
    <div class="atl-dashboard-settings" @click="settingsVisible=true">
      <v-icon
        id="settings-cog"
        color="grey"
      >
        mdi-cog
      </v-icon>
    </div>
    <template
      v-for="card in dashboard.cards"
    >
      <vue-draggable-resizable
        v-if="card.enabled"
        :key="card._id"
        :min-height="150"
        :min-width="300"
        :w="card.w"
        :h="card.h"
        :parent="true"
        :grid="[10,10]"
        :x="card.x"
        :y="card.y"
        :z="card.z"
        :handles="['br']"
        @activated="onActivated(card._id)"
        @dragstop="(left, top) => onDragstop(card._id, left, top)"
        @resizestop="(left, top, width, height) => onResizestop(card._id, left, top, width, height)"
      >
        <v-card
          class="fill-height"
          outlined
        >
          <v-toolbar
            color="blue"
            class="atl-draggable"
            dark
            dense
          >
            <v-toolbar-title>{{ card.title }}</v-toolbar-title>
            <v-spacer />
            <v-btn icon @click="hideCard(card._id)">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar>
          <v-card-text class="px-3 py-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, itaque facilis recusandae quibusdam similique impedit tempore pariatur eveniet exercitationem.
          </v-card-text>
        </v-card>
      </vue-draggable-resizable>
    </template>
    <v-dialog
      v-model="settingsVisible"
      max-width="400px"
    >
      <v-card>
        <v-toolbar color="blue-grey darken-3">
          <v-toolbar-title>Dashboard Settings</v-toolbar-title>
          <v-spacer />
          <v-btn icon @click="settingsVisible = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card-text class="pb-0 mt-3">
          <v-container>
            <v-row>
              <v-col
                v-for="card in dashboard.cards"
                :key="'s'+card._id"
                class="px-20 py-0"
              >
                <v-switch
                  v-model="card.enabled"
                  :label="card.title"
                  color="success"
                  class="mt-0"
                  dense
                  inset
                  @change="changeSettings(card._id, card.enabled)"
                />
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  components: {
    VueDraggableResizable: () => import('vue-draggable-resizable')
  },
  data () {
    return {
      activeCardId: null,
      settingsVisible: false,
      settingsTip: false
    }
  },
  computed: {
    dashboard () {
      return JSON.parse(JSON.stringify(this.$store.state.dashboard))
    },
    activeCard () {
      if (!this.activeCardId) { return }
      return this.dashboard.cards.find(el => el._id === this.activeCardId)
    }
  },
  methods: {
    onActivated (id) {
      this.activeCardId = id
      this.dashboard.cards.map((el) => {
        if (el._id === id) {
          el.z = 3
        } else {
          el.z = 2
        }
        return el
      })
      this.saveDashboard(this.dashboard)
    },
    onDragstop (id, left, top) {
      this.dashboard.cards.map((el) => {
        if (el._id === id) {
          el.x = left
          el.y = top
        }
        return el
      })
      this.activeCardId = null
      this.saveDashboard(this.dashboard)
    },
    onResizestop (id, left, top, width, height) {
      this.dashboard.cards.map((el) => {
        if (el._id === id) {
          el.x = left
          el.y = top
          el.w = width
          el.h = height
        }
        return el
      })
      this.activeCardId = null
      this.saveDashboard(this.dashboard)
    },
    hideCard (id) {
      this.dashboard.cards.map((el) => {
        if (el._id === id) {
          el.enabled = false
        }
        return el
      })
      this.activeCardId = null
      this.settingsTip = true
      document.getElementById('settings-cog').classList.add('atl-cog-active')
      this.saveDashboard(this.dashboard)
    },
    changeSettings (id, enabled) {
      if (enabled === true) {
        this.dashboard.cards.map((el) => {
          if (el._id === id) {
            el.x = (document.getElementById('dashboard').clientWidth) / 2 - 150
            el.y = (document.getElementById('dashboard').clientHeight) / 2 - 75
            el.w = 300
            el.h = 150
          }
          return el
        })
      }
      this.saveDashboard(this.dashboard)
    },
    ...mapActions(['saveDashboard'])
  },
  head () {
    return {
      title: 'Dashboard'
    }
  }
}
</script>

<style>
.atl-dashboard-settings {
  position: absolute;
  right: 0;
  top: 0;
  background: #363636;
  padding: 5px;
}

.atl-dashboard-settings:hover {
  background: #666666;
  cursor: pointer;
}

.atl-draggable {
  cursor: move;
}

.vdr {
  touch-action: none;
  position: absolute;
  box-sizing: border-box;
  overflow: hidden;
}

.handle-br {
  position: absolute;
  z-index: 1000;
  bottom: 0;
  right: 0;
  cursor: se-resize;
  width: 0;
  height: 0;
  border: 10px solid;
  border-color: transparent #393939 #393939 transparent;
  border-bottom-right-radius: 4px;
}

.v-dialog,
.v-dialog-active {
  position: absolute;
  right: 40px;
  bottom: 86px;
}

.atl-cog-active {
  -webkit-animation: rotate-center 0.6s linear 4 both;
  animation: rotate-center 0.6s linear 4 both;
}

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
