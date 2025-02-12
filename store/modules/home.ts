import { defineStore } from 'pinia'
import type { HomeStorePersist } from '../types/home'
export const usePersistHomeStore = defineStore({
    id: 'Home',
    persist: true,
    state: (): HomeStorePersist => ({
      fold: {
        updates: true,
        topics: true,
        square: true,
        resources: true,
        sitemaps: true
      }
    }),
  })
  