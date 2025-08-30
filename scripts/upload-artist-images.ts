// Image upload helper for artist migration
// This script helps upload images to Sanity for the new artists

import { createClient } from '@sanity/client'
import { apiVersion, dataset, projectId } from '../src/sanity/env'
import fs from 'fs'
import path from 'path'

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
})

async function uploadImageFromPublic(imagePath: string, altText: string) {
  try {
    const fullPath = path.join(process.cwd(), 'public', imagePath)
    
    if (!fs.existsSync(fullPath)) {
      console.log(`⚠️  Image not found at: ${fullPath}`)
      return null
    }

    const imageBuffer = fs.readFileSync(fullPath)
    const filename = path.basename(imagePath)
    
    console.log(`Uploading ${filename}...`)
    
    const asset = await client.assets.upload('image', imageBuffer, {
      filename: filename,
      contentType: getContentType(filename)
    })
    
    console.log(`✅ Uploaded ${filename} with ID: ${asset._id}`)
    
    return {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: asset._id
      },
      alt: altText
    }
  } catch (error) {
    console.error(`❌ Failed to upload ${imagePath}:`, error)
    return null
  }
}

function getContentType(filename: string): string {
  const ext = path.extname(filename).toLowerCase()
  switch (ext) {
    case '.jpg':
    case '.jpeg':
      return 'image/jpeg'
    case '.png':
      return 'image/png'
    case '.webp':
      return 'image/webp'
    default:
      return 'image/jpeg'
  }
}

async function updateArtistImages() {
  try {
    console.log('Starting image upload and artist update...')
    
    // Upload Noesis image
    const noesisImage = await uploadImageFromPublic(
      'images/blog/proteus_gemini.jpeg',
      'Noesis - Sound Artist'
    )
    
    if (noesisImage) {
      // Update Noesis artist with image
      const noesisArtist = await client.fetch(`*[_type == "artist" && slug.current == "noesis"][0]`)
      
      if (noesisArtist) {
        await client
          .patch(noesisArtist._id)
          .set({
            profileImage: noesisImage
          })
          .commit()
        console.log('✅ Updated Noesis with profile image')
      }
    }
    
    // For Blackwood Chapel, we'll use one of the existing dark/atmospheric images
    // Let's use one of the DALL-E cyberpunk images as a placeholder
    const blackwoodImage = await uploadImageFromPublic(
      'images/blog/DALL·E 2024-12-23 15.14.18 - A hyper-photorealistic depiction of a bustling cyberpunk city at night. Neon signs in vivid colors reflect with detailed precision on wet asphalt stre.webp',
      'Blackwood Chapel - Dark Ambient Producer'
    )
    
    if (blackwoodImage) {
      // Update Blackwood Chapel artist with image
      const blackwoodArtist = await client.fetch(`*[_type == "artist" && slug.current == "blackwood-chapel"][0]`)
      
      if (blackwoodArtist) {
        await client
          .patch(blackwoodArtist._id)
          .set({
            profileImage: blackwoodImage
          })
          .commit()
        console.log('✅ Updated Blackwood Chapel with profile image')
      }
    }
    
    console.log('✅ Image upload and update completed!')
    
  } catch (error) {
    console.error('❌ Image update failed:', error)
    process.exit(1)
  }
}

// Run if called directly
if (require.main === module) {
  updateArtistImages()
}

export { uploadImageFromPublic, updateArtistImages }
