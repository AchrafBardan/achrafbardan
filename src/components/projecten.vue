<template>
  <div class="flex min-h-screenhalf">
    <div class="w-1/6 bg-primary bg-opacity-20">
      <div v-for="project in projects" @click="setProject(project)" v-bind:key="project.id" v-bind:class=" (selectedProjectId == project.id) ? 'bg-primary': 'bg-primary bg-opacity-50'" class="w-full px-6 py-3 text-white cursor-pointer bg-primary">
        <a class="text-xl font-bold">{{ project.title }}</a>
        <p class="font-light">{{ project.shortdescription }}</p>
      </div>
    </div>
    <div v-if="selectedProject.title" class="flex w-5/6 p-10 ml-6 bg-primary bg-opacity-20">
      <div class="flex flex-col w-1/2">
        <h3 class="mb-5 font-light text-primary text-9xl">{{ selectedProject.title }}</h3>
        <p>
          {{ selectedProject.description }}
        </p>
        <h4 class="mt-10 text-5xl font-light text-primary">Technologien</h4>
        <div class="flex mt-5 space-x-4">
          <div v-for="technologie in selectedProject.technologies" v-bind:key="technologie">
            <div class="px-2" :style="'background-color:'+getTechColor(technologie.name)+';'">
              <a class="text-white">{{ technologie.name }}</a>
            </div>
          </div>
        </div>
        <div class="mt-5">
          <a :href="selectedProject.link"><button class="px-4 py-2 text-white bg-primary">Bekijk project</button></a>
        </div>
      </div>
      <div class="">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      projects: [],
      selectedProjectId: 0,
    }
  },
  computed: {
    selectedProject(){
      var project = {};
      this.projects.forEach(item => {
        if (item.id == this.selectedProjectId){
          project = item;
        }
      })
      return project;
    }
  },
  methods: {
    getTechColor(tech){
      if(tech == 'vue'){
        return '#3FB581';
      }
      else if(tech == 'laravel'){
        return '#FF2D20';
      }
      else if(tech == 'nativescript'){
        return '#65ADF1';
      }
      else if(tech == 'livewire'){
        return '#FB7DA9';
      }
      else if(tech == 'tailwind'){
        return '#67D7EE';
      }
      
    },
    getProjects(){
      this.axios.get('/projects.json')
      .then(Response => {
        this.projects = Response.data
      });
      
    },
    setProject(args){
      console.log(args);
      this.selectedProjectId = args.id; 
    }
  },
  mounted(){
    this.getProjects();
  }

}
</script>

<style>

</style>