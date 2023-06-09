//! ROUTE HANDLERS
//route file for http requests
//always run on server

//by default will be executed in nodejs runtime
// export const runtime = 'nodejs';

//but that can be switched to edge runtime
// export const runtime = 'edge';


import { NextRequest, NextResponse } from "next/server";

//GET,POST,PUT,PATCH,DELETE,HEAD,OPTIONS
export async function GET(){
return new Response('Hi mom')
}


export async function POST(request:Request){
    const data = await request.json();

    return new Response('We did it')
}

export async function PATCH(request:NextRequest){
const url = request.nextUrl;
return  NextResponse.json({message:'Nice!'})
}