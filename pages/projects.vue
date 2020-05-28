<template>
  <v-container class="mt-4">
    <v-row>
      <v-col cols="6">
        <v-card>
          <v-toolbar
            color="blue"
            dark
          >
            <v-toolbar-title>Undone Projects ({{ undoneProjects.length }})</v-toolbar-title>

            <v-spacer />

            <v-btn icon>
              <v-icon>mdi-magnify</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>mdi-checkbox-marked-circle</v-icon>
            </v-btn>
          </v-toolbar>

          <v-list two-line class="pt-0 pb-0">
            <v-list-item-group
              v-model="selectedUndone"
              multiple
              active-class="grey darken-4"
            >
              <template v-for="(item, index) in undoneProjects">
                <v-list-item :key="'p'+item._id">
                  <template v-slot:default="{ active }">
                    <v-list-item-content>
                      <v-list-item-title class="orange--text text--lighten-2" v-text="item.headline" />
                      <v-list-item-subtitle>
                        {{ item.client }} ({{ item.company }})
                      </v-list-item-subtitle>
                      <v-list-item-subtitle class="grey--text text--darken-2" v-text="item.subtitle" />
                    </v-list-item-content>

                    <v-list-item-action>
                      <v-list-item-action-text v-text="item.action" />
                      <v-icon
                        v-if="!active"
                        color="grey lighten-1"
                      >
                        mdi-star-outline
                      </v-icon>

                      <v-icon
                        v-else
                        color="yellow"
                      >
                        mdi-star
                      </v-icon>
                    </v-list-item-action>
                  </template>
                </v-list-item>

                <v-divider
                  v-if="index + 1 < undoneProjects.length"
                  :key="index"
                />
              </template>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card>
          <v-toolbar
            color="green"
            dark
          >
            <v-toolbar-title>Done Projects ({{ doneProjects.length }})</v-toolbar-title>

            <v-spacer />

            <v-btn icon>
              <v-icon>mdi-magnify</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>mdi-checkbox-marked-circle</v-icon>
            </v-btn>
          </v-toolbar>

          <v-list two-line class="pt-0 pb-0">
            <v-list-item-group
              v-model="selectedDone"
              multiple
              active-class="grey darken-4"
            >
              <template v-for="(item, index) in doneProjects">
                <v-list-item :key="'d'+item._id">
                  <template v-slot:default="{ active }">
                    <v-list-item-content>
                      <v-list-item-title class="green--text text--lighten-2" v-text="item.headline" />
                      <v-list-item-subtitle>
                        {{ item.client }} ({{ item.company }})
                      </v-list-item-subtitle>
                      <v-list-item-subtitle class="grey--text text--darken-2" v-text="item.subtitle" />
                    </v-list-item-content>

                    <v-list-item-action>
                      <v-list-item-action-text v-text="item.time" />
                      <v-icon
                        v-if="!active"
                        color="grey lighten-1"
                      >
                        mdi-star-outline
                      </v-icon>

                      <v-icon
                        v-else
                        color="yellow"
                      >
                        mdi-star
                      </v-icon>
                    </v-list-item-action>
                  </template>
                </v-list-item>

                <v-divider
                  v-if="index + 1 < doneProjects.length"
                  :key="index"
                />
              </template>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    selectedUndone: [],
    selectedDone: [],
    projects: [
      {
        _id: '1',
        time: '15h',
        headline: 'Sit ex enim esse sint elit nulla ea',
        company: 'FROLIX',
        client: 'Burke Mendoza',
        subtitle: 'Qui reprehenderit enim cillum fugiat ut dolor minim enim id exercitation culpa. Aliqua magna amet voluptate do occaecat.',
        done: true
      },
      {
        _id: '2',
        time: '25h',
        headline: 'Nulla id veniam excepteur eiusmod ullamco voluptate amet',
        company: 'NETILITY',
        client: 'Kline Howell',
        subtitle: 'Officia laborum adipisicing Lorem ad reprehenderit ad. Ea velit laborum Lorem eu nostrud commodo deserunt et.',
        done: false
      },
      {
        _id: '3',
        time: '36h',
        headline: 'Excepteur cillum nulla proident duis Lorem tempor nostrud',
        company: 'UBERLUX',
        client: 'Chasity Curry',
        subtitle: 'Sit dolor aliquip ea ad labore duis anim tempor Lorem exercitation. Aliquip aute nisi aliqua esse mollit proident non.',
        done: false
      },
      {
        _id: '4',
        time: '2h',
        headline: 'Velit culpa non aliquip est velit nisi dolor',
        company: 'GLASSTEP',
        client: 'Barrett Bush',
        subtitle: 'Aute tempor nisi ad aute deserunt sint officia irure. Magna nostrud ad ipsum ad laborum cillum exercitation qui do ut et est.',
        done: false
      },
      {
        _id: '5',
        time: '22h',
        headline: 'Enim exercitation ea nisi reprehenderit veniam tempor laborum',
        company: 'GUSHKOOL',
        client: 'Morgan Wilkerson',
        subtitle: 'Eiusmod cupidatat labore pariatur laboris do officia culpa nulla laborum anim sunt ea aute. Cillum mollit esse exercitation cillum aliquip ut qui cillum consequat est voluptate proident labore et.',
        done: false
      },
      {
        _id: '6',
        time: '24h',
        headline: 'Velit esse esse nostrud officia sunt ex occaecat',
        company: 'COSMOSIS',
        client: 'Ferrell Paul',
        subtitle: 'Dolore et enim do tempor anim non enim proident ad fugiat esse labore. In eiusmod sint ut officia voluptate amet culpa cillum duis Lorem.',
        done: false
      },
      {
        _id: '7',
        time: '27h',
        headline: 'Adipisicing quis velit anim laborum sit duis voluptate',
        company: 'FILODYNE',
        client: 'Vasquez Mcclure',
        subtitle: 'Sit aute aliquip voluptate aliqua. Aute consequat adipisicing dolore do labore ex mollit culpa eu magna.',
        done: false
      },
      {
        _id: '8',
        time: '32h',
        headline: 'Mollit laborum exercitation ad tempor do et anim',
        company: 'VICON',
        client: 'Joyce Tanner',
        subtitle: 'Sint et irure exercitation est enim reprehenderit voluptate velit magna velit officia reprehenderit minim. Consequat labore ut officia duis incididunt ad id commodo ut nulla magna consequat et cupidatat.',
        done: true
      },
      {
        _id: '9',
        time: '23h',
        headline: 'Eiusmod aute tempor ad non pariatur adipisicing id',
        company: 'VIDTO',
        client: 'Bennett Cole',
        subtitle: 'Sit consequat qui labore dolore cillum sint elit cillum dolor velit occaecat. Nostrud eiusmod anim aliqua Lorem.',
        done: true
      },
      {
        _id: '10',
        time: '18h',
        headline: 'Non labore nostrud consectetur non do nisi ea',
        company: 'GEOSTELE',
        client: 'Deann Monroe',
        subtitle: 'Adipisicing ad esse qui eiusmod aliqua sunt ullamco dolor nostrud ut. Dolor quis do elit voluptate velit ad occaecat eu eiusmod id laboris eu dolore velit.',
        done: false
      }
    ]
  }),
  computed: {
    undoneProjects () {
      return this.projects.filter(project => !project.done)
    },
    doneProjects () {
      return this.projects.filter(project => project.done)
    }
  },
  head () {
    return {
      title: 'Projects'
    }
  }
}
</script>
