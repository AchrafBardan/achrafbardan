<template>
  <div class="flex flex-col"> 
    <div class="flex justify-between pt-10 pl-10 pr-20 bg-gray-100">
      <div class="w-1/2">
        <a class="stroke-current text-primary font-anton text-18xl" href="">Achraf <br>Bardan</a>
      </div>
      <div class="flex items-center justify-end w-1/2 ">
        <div class="px-6 bg-gray-200 py-7 rounded-xl text-shadow">
          <ul class="text-3xl text-primary font-Raleway">
            <li><a href="#ikbeneen"><span class="font-bold">Wie</span>BenIk</a></li>
            <li><a href=""><span class="font-bold">Pro</span>jecten</a></li>
            <li><a href=""><span class="font-bold">Erv</span>aringen</a></li>
            <li><a href=""><span class="font-bold">Con</span>tact</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div id="ikbeneen" class="flex justify-between w-full bg-primary h-96 px-14">
      <div class="py-40 text-white font-Raleway">
        <p class="text-5xl ">Ik ben een</p>
        <h2 class="text-8xl">Web-Developer</h2>
      </div>
      <div class=" w-96">
        <p class="mt-10 font-light text-white">
          Dit jaar ontdekte ik mijn <span class="font-bold ">passie</span> voor coderen.
          Nadat ik van de havo af was en begonnen was aan de <span class="font-bold">Software development</span> opleiding op het MBO.
          Nu open ik dagelijks de code editor om iets nieuws te leren,
          want zo iets leerzaam en leuk had ik nooit gezien.
          Ik vind van mezelf dat ik heel sociaal ben en goed ben in het helpen van anderen.
        </p>
      </div>
    </div>
    <div id="projecten" class="flex-col px-10 mt-10">
      <div class="mb-5 ">
        <h3 class="text-6xl text-primary"><span class="font-bold">Pro</span>jecten</h3>
      </div>
      <projecten/>
    </div>
  </div>
</template>

<script>
import projecten from '../components/projecten.vue'
export default {
  components: { projecten },
}
</script>

<!-- Add "scope
Projectend" attribute to limit CSS to this component only -->
<style scoped>

</style>
