<template>
  <v-container class="mt-4">
    <v-row>
      <v-col v-for="item in news" :key="'n'+item._id" cols="3" xl="2">
        <v-card>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="headline orange--text text--lighten-2" v-text="item.title" />
              <v-list-item-subtitle class="grey--text text--darken-2" v-text="item.subtitle" />
            </v-list-item-content>
          </v-list-item>
          <v-img
            :src="require(`../assets/img/${item.pic}`)"
            height="194"
          />
          <v-card-text class="px-3 py-2" v-text="item.intro" />
          <v-card-actions class="pl-3 pb-3">
            <v-btn
              color="green"
              outlined
            >
              Read More
            </v-btn>
            <v-spacer />
            <v-btn icon>
              <v-icon>mdi-bookmark-plus-outline</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>mdi-heart-outline</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>mdi-share-variant</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    news: [
      {
        _id: '1',
        title: 'Elit aliqua culpa',
        subtitle: 'minim ipsum est sunt amet ipsum',
        intro: 'In ullamco consectetur ea sint mollit ut commodo do exercitation quis exercitation duis excepteur esse. Culpa velit do sit et.',
        pic: 'news1.jpg'
      },
      {
        _id: '2',
        title: 'Non ipsum quis ut',
        subtitle: 'culpa fugiat veniam aliquip',
        intro: 'Sit commodo sit magna aliqua labore Lorem mollit exercitation qui exercitation proident et. Lorem enim eiusmod culpa sunt quis.',
        pic: 'news2.jpg'
      },
      {
        _id: '3',
        title: 'Nulla mollit ut',
        subtitle: 'exercitation deserunt minim amet',
        intro: 'Incididunt incididunt aute irure qui dolore qui nulla. Exercitation quis commodo deserunt voluptate occaecat excepteur anim non.',
        pic: 'news3.jpg'
      },
      {
        _id: '4',
        title: 'Elit quis officia',
        subtitle: 'dolor deserunt quis elit occaecat',
        intro: 'Eiusmod id consectetur cillum aliquip nostrud enim ut in culpa. Nisi dolore laboris officia pariatur esse nisi exercitation ullamco in aute.',
        pic: 'news4.jpg'
      },
      {
        _id: '5',
        title: 'Minim in ea',
        subtitle: 'eiusmod anim consectetur reprehend',
        intro: 'Labore ullamco amet esse id anim ipsum do reprehenderit mollit incididunt. Velit veniam sit tempor nostrud.',
        pic: 'news5.jpg'
      },
      {
        _id: '6',
        title: 'Qui proident aute',
        subtitle: 'quis esse irure ullamco mollit',
        intro: 'Voluptate laboris dolor incididunt aliquip. Eu do labore qui ipsum id exercitation irure elit sint. Sit commodo sit magna aliqua labore.',
        pic: 'news6.jpg'
      },
      {
        _id: '7',
        title: 'Anim laborum mollit',
        subtitle: 'pariatur sint nostrud amet',
        intro: 'Dolor velit sunt mollit cupidatat ipsum in sunt. Ipsum in veniam nostrud dolore. Voluptate laboris dolor incididunt.',
        pic: 'news7.jpg'
      },
      {
        _id: '8',
        title: 'Anim nostrud nisi',
        subtitle: 'ex culpa laborum duis adipisicing',
        intro: 'Aute est pariatur dolore consectetur deserunt enim in enim commodo ipsum et. Culpa eiusmod occaecat amet duis do tempor.',
        pic: 'news8.jpg'
      }
    ]
  }),
  computed: {
  },
  head () {
    return {
      title: 'News'
    }
  }
}
</script>
