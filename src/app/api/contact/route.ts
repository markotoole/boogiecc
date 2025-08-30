import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const formData = await request.json()
    
    // For now, log the submission (you can later integrate with Sanity, email service, etc.)
    console.log('Contact form submission:', {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      company: formData.company,
      projectType: formData.projectType,
      message: formData.message,
      timestamp: new Date().toISOString()
    })

    // TODO: Add actual storage/email functionality here
    // Options:
    // 1. Store in Sanity CMS
    // 2. Send email with Resend/SendGrid
    // 3. Send to external form service
    
    return NextResponse.json({ 
      success: true, 
      message: 'Thank you! Your message has been received. We\'ll get back to you soon.' 
    })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to send message. Please try again.' },
      { status: 500 }
    )
  }
}
