import { NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import Lead from '@/models/Lead'

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB()
    const lead = await Lead.findById(params.id)

    if (!lead) {
      return NextResponse.json(
        { success: false, error: 'Lead not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({ success: true, data: lead })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch lead' },
      { status: 500 }
    )
  }
}
