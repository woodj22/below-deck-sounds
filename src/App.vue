<template>
  <div id="app" class="bg-lightblue font-serif flex flex-col min-h-screen text-blue">
  <header class="bg-sand h-auto text-center p-6 text-blue font-extrabold text-2xl md:text-4xl border-b-8 border-mintpinch"> 
  <h1>BELOW DECK SOUNDS</h1> 
  <p class="text-lg">Calling all yachties....</p>
  </header>
    <div id="body" class="flex-grow md:p-32"> 
    <Board />
    </div>
    <footer class="text-uderline bg-sand h-auto text-center p-3 text-blue font-extrabold text-2xl md:text-4xl border-t-8 border-mintpinch">
    <button   class="underline background-transparent font-bold px-3 py-1 outline-none focus:outline-none mr-1 mb-1" type="button" style="transition: all .15s ease">
  <a href="https://woodj22.github.io/#/">Made by Me </a>
</button>
    </footer>
  </div>
  
</template>

<script>
import Board from './components/Board.vue'

export default {
  name: 'App',
  components: {
    Board
  }
}
</script>
