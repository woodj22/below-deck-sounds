<template>
  <div class="board" >
        <div class="grid grid-cols-4 max-w-screen-lg mx-auto">
        <t-button  :key="sound.id" v-for="sound in this.sounds" @click.prevent="playSound(sound.url)">
         {{ sound.quote }} </t-button>
        </div>
  </div>
</template>
<script>


export default {
  name: 'Board',

  methods: {
    playSound:  (sound) => {
      if(sound) {
          const id = require('../assets/sounds/'.concat(sound))
        var audio = new Audio(id);
        audio.play();
        
      }
    }
  },
  props: {
    msg: String,
     sounds: {
      default: () => [{
        id: 1,
        url: "lee_pissed_on_chicken.mp3",
        series: 1,
        episode: 4,
        person: "captain lee",
        quote: "pissed on chicken"
    },
    {
        id: 2,
        url: "lee_get_out_of_way.mp3",
        series: "",
        episode: "",
        person: "captain lee",
        quote: "get out of my way"
    },
     {
        id: 3,
        url: "lee_screwed_the_pooch.mp3",
        series: "",
        episode: "",
        person: "captain lee",
        quote: "screwed the pooch"
    },
     {
        id: 4,
        url: "lee_ha_no.mp3",
        series: "",
        episode: "",
        person: "captain lee",
        quote: "haha no"
    },
     {
        id: 5,
        url: "lee_god_dam_it.mp3",
        series: "",
        episode: "",
        person: "captain lee",
        quote: "god dam it"
    },
    {
        id: 6,
        url: "kate_rocket_ship.mp3",
        series: "",
        episode: "",
        person: "chief steward kate",
        quote: "it's a rocket ship"
    },
     {
        id: 7,
        url: "ben_laugh.mp3",
        series: "",
        episode: "",
        person: "chef ben",
        quote: "ben's laugh"
    },
    {
        id: 8,
        url: "kate_rage_genius.mp3",
        series: "",
        episode: "",
        person: "chief steward kate",
        quote: "rage genius"
    },
     {
        id: 9,
        url: "kate_i_am_times_new_roman.mp3",
        series: "",
        episode: "",
        person: "chief steward kate",
        quote: "I am times new roman"
    }
    ]
     }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;

}
</style>
