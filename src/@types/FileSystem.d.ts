import 'expo-file-system'

declare module 'expo-file-system' {
  type FileInfoSizeProp = {
    exists: boolean
    isDirectory: boolean
    modificationTime: number
    size: number
    uri: string
  }

  export interface FileInfo extends FileInfoSizeProp {}
}
