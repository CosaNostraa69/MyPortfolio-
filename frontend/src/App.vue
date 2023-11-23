<script setup>
import Dock from './components/Dock.vue';
import Menubar from 'primevue/menubar';
import Toast from 'primevue/toast';
import { ref } from 'vue';


const menubarItems = ref([
    {
        label: 'Finder',
        class: 'menubar-root'
    },
    {
        label: 'File',
        items: [
            {
                label: 'New',
                icon: 'pi pi-fw pi-plus',
                items: [
                    {
                        label: 'Bookmark',
                        icon: 'pi pi-fw pi-bookmark'
                    },
                    {
                        label: 'Video',
                        icon: 'pi pi-fw pi-video'
                    },

                ]
            },
            {
                label: 'Delete',
                icon: 'pi pi-fw pi-trash'
            },
            {
                separator: true
            },
            {
                label: 'Export',
                icon: 'pi pi-fw pi-external-link'
            }
        ]
    },
    {
        label: 'Edit',
        items: [
            {
                label: 'Left',
                icon: 'pi pi-fw pi-align-left'
            },
            {
                label: 'Right',
                icon: 'pi pi-fw pi-align-right'
            },
            {
                label: 'Center',
                icon: 'pi pi-fw pi-align-center'
            },
            {
                label: 'Justify',
                icon: 'pi pi-fw pi-align-justify'
            },

        ]
    },
    {
        label: 'Users',
        items: [
            {
                label: 'New',
                icon: 'pi pi-fw pi-user-plus',
            },
            {
                label: 'Delete',
                icon: 'pi pi-fw pi-user-minus',

            },
            {
                label: 'Search',
                icon: 'pi pi-fw pi-users',
                items: [
                    {
                        label: 'Filter',
                        icon: 'pi pi-fw pi-filter',
                        items: [
                            {
                                label: 'Print',
                                icon: 'pi pi-fw pi-print'
                            }
                        ]
                    },
                    {
                        icon: 'pi pi-fw pi-bars',
                        label: 'List'
                    }
                ]
            }
        ]
    },
    {
        label: 'Events',
        items: [
            {
                label: 'Edit',
                icon: 'pi pi-fw pi-pencil',
                items: [
                    {
                        label: 'Save',
                        icon: 'pi pi-fw pi-calendar-plus'
                    },
                    {
                        label: 'Delete',
                        icon: 'pi pi-fw pi-calendar-minus'
                    }
                ]
            },
            {
                label: 'Archive',
                icon: 'pi pi-fw pi-calendar-times',
                items: [
                    {
                        label: 'Remove',
                        icon: 'pi pi-fw pi-calendar-minus'
                    }
                ]
            }
        ]
    },
    {
        label: 'Quit'
    }
]);
</script>

<template>
  <header>
      <Menubar
        :model="menubarItems"
        :start="start"
        :end="end"        


      />
  </header>
  <Toast 
    ref="toast"
    position="bottom-right"
    :group="true"
    :life="3000"
    
  />
  <div class="dock-window dock-advanced">
                <Dock :model="items">
                    <template #item="{ item }">
                        <a v-tooltip.top="item.label" href="#" class="p-dock-link" @click="onDockItemClick($event, item)">
                            <img :alt="item.label" :src="item.icon" style="width: 100%" />
                        </a>
                    </template>
                </Dock>
  </div>
</template>

<style scoped>
header {
    height: 4rem;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
}

.dock-window {
    background-color: #241919;
    bottom: 0;
    left: 0;
    position: fixed;
    width: 100%;
    padding: 0;
    
}


.menubar-root {
    font-size: 1.5rem;
    font-weight: bold;
}



</style>