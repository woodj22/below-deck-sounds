<template>
  <div class="board" >
        <div class="grid grid-cols-4">
        <div :key="index"  class="p-1 md:m-3 h-32 bg-mintpinch flex rounded-xl" v-for="(sound, index) in sounds">
                <button class="t-button" @myEvent="endSound" :class="{'border-4 border-wetsand': playingAudios.includes(index)}" :key="index"  @click="playSound(sound.url, index)">
         {{ sound.quote }} </button>
         </div>
        </div>
        <div @my-event="endSound"></div>
  </div>
</template>
<script>
import { SOUNDS } from '../assets/sound_manifest.js';

export default {
  name: 'Board',
  data: () => {
    return {
      sounds: SOUNDS,
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
        }, false)

        audio.id = index
        audio.play();
        
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
