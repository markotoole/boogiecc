/**
 * Migration script to create Count Nine and Noesis artists in Sanity CMS
 * Run this script locally with: npx tsx scripts/migrate-static-artists.ts
 */

import { createClient } from '@sanity/client'

// You'll need to add your write token here temporarily
const client = createClient({
  projectId: 'pczb9zzr',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2023-05-03',
  token: process.env.SANITY_API_TOKEN || 'YOUR_WRITE_TOKEN_HERE', // Add your write token
})

const countNineData = {
  _type: 'artist',
  name: 'Count Nine',
  slug: { current: 'count-nine' },
  stageName: 'Count Nine',
  role: 'Electronic Music Producer',
  shortBio: "Count Nine crafts hypnotic electronic soundscapes that bridge the gap between darkness and transcendence. Drawing from occult symbolism and quantum physics alike, his productions pulse with otherworldly energy while maintaining dance floor appeal.",
  fullBio: [
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: "Count Nine crafts hypnotic electronic soundscapes that bridge the gap between darkness and transcendence. Drawing from occult symbolism and quantum physics alike, his productions pulse with otherworldly energy while maintaining dance floor appeal."
        }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'With releases like "Ninth Dimension" and "Esoteric Circuit," Count Nine invites listeners into a realm where shadows dance with light, revealing deeper truths through carefully constructed sonic journeys.'
        }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: "His performances are immersive rituals, transforming venues into temporary temples where collective consciousness expands through rhythmic communion."
        }
      ]
    }
  ],
  socialLinks: {
    soundcloud: 'https://soundcloud.com/countnine',
    instagram: 'https://instagram.com/countninemusic',
    spotify: 'https://spotify.com/artist/countnine'
  },
  musicSamples: [],
  gallery: [],
  customContent: [
    // This is where you can add your HTML blocks after creation
  ],
  featured: false,
  isActive: true,
  sortOrder: 2
}

const noesisData = {
  _type: 'artist',
  name: 'Noesis',
  slug: { current: 'noesis' },
  stageName: 'Noesis',
  role: 'Sonic Alchemist & Shape-Shifting Composer',
  shortBio: "Noesis harnesses the transformative power of sound to guide listeners through the depths of human experience and beyond. Her shape-shifting compositions blend haunting sounds with intricate electronic textures, creating a sonic alchemy that's both introspective and expansive.",
  fullBio: [
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: "Noesis emerged from the underground electronic scene with an almost mystical presence, her identity as fluid as her sound. Born Elena Vasquez in the industrial outskirts of Detroit, she discovered her calling during late nights spent in abandoned warehouses, where the city's mechanical heartbeat became her first instrument. Her artist name, drawn from the Greek concept of intuitive knowledge, reflects her belief that music can access truths beyond ordinary perception."
        }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Known for her ethereal live performances where she appears draped in flowing fabrics that seem to move with the music itself, she has cultivated a devoted following who describe her concerts as "spiritual journeys through sound." Her performances are immersive experiences that blur the boundaries between artist and audience, creating spaces where collective consciousness can emerge through sonic exploration.'
        }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: "Her creative process is deeply ritualistic—she begins each composition during the liminal hours between night and dawn, believing these threshold moments hold special creative power. Drawing inspiration from everything from ancient mythology to quantum physics, her work explores themes of transformation, consciousness, and the interconnectedness of all things."
        }
      ]
    }
  ],
  socialLinks: {},
  musicSamples: [],
  gallery: [],
  customContent: [
    // This is where you can add your HTML blocks after creation
  ],
  featured: false,
  isActive: true,
  sortOrder: 3
}

async function migrateArtists() {
  try {
    console.log('🚀 Starting artist migration...')
    
    // Check if artists already exist
    const existingCountNine = await client.fetch(
      `*[_type == "artist" && slug.current == "count-nine"][0]`
    )
    
    const existingNoesis = await client.fetch(
      `*[_type == "artist" && slug.current == "noesis"][0]`
    )
    
    if (existingCountNine) {
      console.log('⚠️  Count Nine already exists, skipping...')
    } else {
      const countNine = await client.create(countNineData)
      console.log('✅ Created Count Nine:', countNine._id)
    }
    
    if (existingNoesis) {
      console.log('⚠️  Noesis already exists, skipping...')
    } else {
      const noesis = await client.create(noesisData)
      console.log('✅ Created Noesis:', noesis._id)
    }
    
    console.log('🎉 Migration completed!')
    console.log('')
    console.log('📝 Next steps:')
    console.log('1. Go to your Sanity Studio')
    console.log('2. Add profile images to both artists')
    console.log('3. Add your HTML blocks in "Additional Content & Embeds"')
    console.log('4. Publish both artists')
    
  } catch (error) {
    console.error('❌ Migration failed:', error)
    
    if (error.message?.includes('Insufficient permissions')) {
      console.log('')
      console.log('🔑 You need to add a write token:')
      console.log('1. Go to https://sanity.io/manage')
      console.log('2. Select your project')
      console.log('3. Go to API > Tokens')
      console.log('4. Create a token with Write permissions')
      console.log('5. Add it as SANITY_API_TOKEN environment variable')
      console.log('   or replace YOUR_WRITE_TOKEN_HERE in this file')
    }
  }
}

// Run the migration
migrateArtists()

export default migrateArtists
