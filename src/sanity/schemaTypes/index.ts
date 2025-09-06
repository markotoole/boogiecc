import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'
import {pageType} from './pageType'
import {artistType} from './artistType'
import customBlockType from './customBlockType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [customBlockType, blockContentType, categoryType, postType, authorType, pageType, artistType],
}
