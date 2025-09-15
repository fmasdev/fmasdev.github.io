// src/helpers/deviceHelper.ts

import { ref } from 'vue'

export type DeviceType = 'mobile' | 'tablet' | 'desktop'

const breakpoints = {
  mobile: 640, // < 640px
  tablet: 1024, // < 1024
}

export const currentDeviceType = ref<DeviceType>('desktop')

export const updateDeviceType = () => {
  if (window.innerWidth < breakpoints.mobile) {
    currentDeviceType.value = 'mobile'
  } else if (window.innerWidth < breakpoints.tablet) {
    currentDeviceType.value = 'tablet'
  } else {
    currentDeviceType.value = 'desktop'
  }
}
