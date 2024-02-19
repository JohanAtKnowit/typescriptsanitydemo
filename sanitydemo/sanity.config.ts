import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'SanityDemo',

  projectId: 'dggw9jax',
  dataset: 'developmentdataset',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
