// API Routes in NextJS

import { NextRequest, NextResponse } from "next/server";

// "GET" API Route.
export function GET() {
    
    return NextResponse.json({
        username: "Laxman Singh Koranga",
        email: "laxman@gmail.com"
    })
}

// "POST" API Route.
export async function POST(req: NextRequest) {
    // req.body?

    const data = await req.json();
    
    console.log(data);
    
    return NextResponse.json({
        // Hard-coded
        // username: "Himanshu Koranga",
        // email: "himanshu@gmail.com"
        message: "You have been signed up."
    })
}

// "PUT" API Route.
export function PUT() {

    return NextResponse.json({
        username: "Ashish Kumar Singh",
        email: "ashish@gmail.com"
    })
}

// This isn't the best way to fetch data from the backend. Will make this better as time goes by...