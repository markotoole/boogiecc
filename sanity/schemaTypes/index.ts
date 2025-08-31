import {type SchemaTypeDefinition} from 'sanity'
import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'
import {pageType} from './pageType'
import customBlockType from './customBlockType'

export const schema: {types: SchemaTypeDefinition[]} = {
  types: [blockContentType, categoryType, postType, authorType, pageType, customBlockType],
}
