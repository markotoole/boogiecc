// Migration script to add Noesis and Blackwood Chapel artists to Sanity
// Run this script using: npx tsx scripts/migrate-artists.ts

import { createClient } from '@sanity/client'
import { apiVersion, dataset, projectId } from '../src/sanity/env'

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN, // You'll need to set this environment variable
})

const artistsToAdd = [
  {
    _type: 'artist',
    name: 'Noesis',
    slug: {
      _type: 'slug',
      current: 'noesis'
    },
    role: 'Sound Artist',
    shortBio: 'Noesis harnesses the transformative power of sound to guide listeners through the depths of human experience and beyond. Her shape-shifting compositions blend haunting vocals with intricate electronic textures, creating a sonic alchemy that\'s both introspective and expansive.',
    fullBio: [
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Noesis represents a unique voice in contemporary sound art, creating immersive sonic experiences that transcend traditional genre boundaries. Her work explores the liminal spaces between consciousness and subconsciousness, using sound as a vehicle for transformation and introspection.'
          }
        ]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Drawing from a diverse palette of influences ranging from ambient electronica to ancient vocal traditions, Noesis crafts compositions that feel both timeless and futuristic. Her productions feature haunting vocal samples, intricate synthesized textures, and carefully constructed soundscapes that invite deep listening.'
          }
        ]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Each Noesis release represents a journey - whether through internal landscapes of memory and emotion, or external explorations of space and time. Her music serves as both meditation and revelation, offering listeners a pathway to expanded awareness through the medium of sound.'
          }
        ]
      }
    ],
    socialLinks: {
      spotify: 'https://open.spotify.com/artist/noesis',
      soundcloud: 'https://soundcloud.com/noesis',
      bandcamp: 'https://noesis.bandcamp.com'
    },
    featured: true,
    sortOrder: 2,
    isActive: true,
    seo: {
      metaTitle: 'Noesis - Sound Artist | Boogie Creative Collective',
      metaDescription: 'Discover the transformative sound art of Noesis. Immersive compositions blending haunting vocals with intricate electronic textures.'
    }
  },
  {
    _type: 'artist',
    name: 'Blackwood Chapel',
    slug: {
      _type: 'slug',
      current: 'blackwood-chapel'
    },
    role: 'Dark Ambient Producer',
    shortBio: 'Blackwood Chapel conjures haunting soundscapes that dwell in the shadows between sacred and profane. Drawing inspiration from gothic architecture, ancient rituals, and the liminal spaces of consciousness, their compositions create immersive worlds of dark beauty.',
    fullBio: [
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Emerging from the intersection of dark ambient, neoclassical, and ritual music, Blackwood Chapel creates sonic cathedrals that resonate with both reverence and unease. Their compositions are architectural in scope, building vast spaces of sound that listeners can inhabit and explore.'
          }
        ]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'The project draws its name and aesthetic from the concept of sacred spaces - not the bright, soaring cathedrals of traditional worship, but the older, darker places where shadows gather and mysteries dwell. Each release is conceived as a ritual space, inviting listeners to engage with themes of transcendence, mortality, and the numinous.'
          }
        ]
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Using a combination of organic instrumentation, processed vocals, field recordings, and carefully crafted synthesized textures, Blackwood Chapel constructs immersive environments that feel both ancient and contemporary. Their music serves as a bridge between worlds - the seen and unseen, the sacred and the secular, the beautiful and the terrible.'
          }
        ]
      }
    ],
    socialLinks: {
      spotify: 'https://open.spotify.com/artist/blackwoodchapel',
      soundcloud: 'https://soundcloud.com/blackwoodchapel',
      bandcamp: 'https://blackwoodchapel.bandcamp.com',
      youtube: 'https://youtube.com/@blackwoodchapel'
    },
    featured: true,
    sortOrder: 3,
    isActive: true,
    seo: {
      metaTitle: 'Blackwood Chapel - Dark Ambient Producer | Boogie Creative Collective',
      metaDescription: 'Experience the haunting dark ambient soundscapes of Blackwood Chapel. Immersive compositions dwelling in the shadows between sacred and profane.'
    }
  }
]

async function migrateArtists() {
  try {
    console.log('Starting artist migration...')
    
    // Check if artists already exist
    for (const artist of artistsToAdd) {
      const existing = await client.fetch(
        `*[_type == "artist" && slug.current == $slug][0]`,
        { slug: artist.slug.current }
      )
      
      if (existing) {
        console.log(`Artist ${artist.name} already exists, updating...`)
        await client
          .patch(existing._id)
          .set({
            ...artist,
            _id: undefined, // Remove _id from the update
          })
          .commit()
        console.log(`✅ Updated ${artist.name}`)
      } else {
        console.log(`Creating new artist: ${artist.name}`)
        const result = await client.create(artist)
        console.log(`✅ Created ${artist.name} with ID: ${result._id}`)
      }
    }
    
    console.log('✅ Artist migration completed successfully!')
  } catch (error) {
    console.error('❌ Migration failed:', error)
    process.exit(1)
  }
}

// Run the migration
migrateArtists()
