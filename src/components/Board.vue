<template>
  <div class="board" >
        <div class="grid grid-cols-4">
        <div :key="index"  class="p-1 md:m-3 h-32 bg-mintpinch shadow-xl flex rounded-xl" v-for="(sound, index) in sounds">
                <button class="t-button" @myEvent="endSound" :class="{'border-4 border-wetsand': sound.url in audioList}" :key="index"  @click="playSound(sound.url)">
         {{ sound.quote }} </button>
         </div>
        </div>
  </div>
</template>
<script>
import { SOUNDS } from '../assets/sound_manifest.js';

export default {
  name: 'Board',
  data: () => {
    return {
      sounds: SOUNDS,
      audioList: {}
    }
  },
  methods: {
    playSound(sound) {
      if(sound) {
        const src = require('../assets/sounds/'.concat(sound))
        var audio = new Audio(src);

        if (sound in this.audioList) {
          const oldSound = this.audioList[sound] 
          delete this.audioList[sound]
          oldSound.pause()
          // Remove return statement if you want a second button click to start sound from beginning
          return 
        }
        audio.addEventListener('ended', (index) =>  { 
            delete this.audioList[index.currentTarget.source]
        }, false)
        
        this.audioList[sound] = audio
        audio.source = sound
        audio.play();
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
