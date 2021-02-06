<template>
  <div class="board" >
        <div class="grid grid-cols-4 max-w-screen-lg mx-auto">
        <button @myEvent="endSound" :class="{'border-4 border-tan': playingAudios.includes(index)}" :key="index" v-for="(sound, index) in sounds" @click="playSound(sound.url, index)">
         {{ sound.quote }} </button>
        </div>
        <div @my-event="endSound"></div>
  </div>
</template>
<script>

export default {
  name: 'Board',
  data: () => {
    return {
      playingAudios: []
    }
  },
  methods: {
    playSound(sound, index) {
      if(sound) {
        const src = require('../assets/sounds/'.concat(sound))
        var audio = new Audio(src);
          if (!this.playingAudios.includes(index)) {
              this.playingAudios.push(index)
        }
        audio.addEventListener('ended', (index) =>  { 
            this.playingAudios = this.playingAudios.filter(function(item) {
            return item != index.currentTarget.id
            })
            console.log(this.playingAudios)
        }, false)

        audio.id = index
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
