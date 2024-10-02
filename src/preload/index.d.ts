import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      versions: {
        [key: string]: string
        node: string
        electron: string
        chrome: string
      }
    }
  }
}
