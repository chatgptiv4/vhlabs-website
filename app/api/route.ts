import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    message: 'VHLabs API',
    version: '1.0.0',
    endpoints: {
      contact: '/api/contact',
      health: '/api/health',
    },
  })
}
