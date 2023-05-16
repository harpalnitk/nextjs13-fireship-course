>npx create-next-app@latest

## select eslint,typescript,src,app,tailwind

## for database we are use pocketbase.io
1. go to https://pocketbase.io/docs/
2. download the executable for windows
3. place in root of your project
4. then run command
> pocketbase serve
5. It will give link to admin UI
 ➜ REST API: http://127.0.0.1:8090/api/
 ➜ Admin UI: http://127.0.0.1:8090/_/ 

 email: harpalnitk@gmail.com
 pwd: Nnnn

 6. underhood pocketbase uses sqlite
 7. add a new collection
 create collection posts with 2 fields
 id(text) and content(text) and in API rules tab give all access. 

 ### APP Directory
 
 directories
 about/   example.com/about
 [slug]/ exanmple.com/{slug}  dynamic route
 (group)/ example.com/??? directories surrounded by parenthesis   
                          are ignored by routing
# reserved file names

1. page.tsx
2. layout.tsx : A file used to define  a UI that is shared across multiple pages. A layout accepts another layout or page as its child. 

You can nest layouts to create nested routes 
when you have layout file in a subdirectory it will be applied only to childrens of that route

you can also fetch data in layouts 

3. loading.tsx
4. error.tsx
5. template.tsx : an optional file, similar to alyouts, but on navigation, a new instance of the component is mounted and the state is not shared such as enter/exit animation
6. head.tsx:  an optional file used to define the content of <head> tag for a given route

## Turbopack

vercel released turbopack (a new build tool)
to use add --turbo flag in package.json
"dev": "next dev --turbo",

## Server components
components are server components by default in nextjs 13 and 
we can use data fetching directly inside components


## Layouts

root layout must have html and body tags

layouts can also do data fecthing
const data = fetch('');

with paranthesis multiple root layouts
can also be created in same application
 e.g.
 app
  layout.js
 (marketing)
 layout.js
 (shop)
 layout.js

 pages under marketing and shop URL's
 will have their own layouts other than the
root layout

UI of layout persists across pages
sometimes we need ui to reload
 we may then use template.tsx 
instead of layout.tsx


## Rendering startegies
Nextjs offer
1. SSR
2. Static (Prerendering)
3. ISR (Incremental Static regeneratiom)
4. Client

By default every page is server component

Thus, useEffect and other hooks can't be used on pages
therefore, move all interactive code in their own client components

every page has a dynamic option that can be exported

export const dynamic = 'auto'   //default

if we change it to

export const dynamic = 'force-dynamic'  // SSR like getServerSideProps

i.e. it will always use SSR without caching (always fetch latest data)

if we change to 

export const dynamic = 'force-static'  //SSG  getStaticProps
caches the page indefinitely

if we change to

export const revalidate = 6900 // ISR

# metadata export in all pages

export const metadata = {
    title='home page',
    description: 'a home page'
}

if data is dynamic

export async function generateMetadata ({params}: any){
    return {
        title: ''
    }
}

### Data Fetching

because every layout page is server component they can access server
components like environment variables and databases and they can do so
without the need to pass props like in Nextjs 12

server components can also be async

there is parallel data fetching in all nested server
components giving efficiency

if same fetch URL is used in multiple components
nextjs will automatically take care of duplication

nextjs has optimized the fetch API

await fetch('URL', {cache:'force-cache'});   //for static data
await fetch('URL', {cache:'no-store'});   //for highly dynamic data
await fetch('URL', {next:{revalidate:420}}); // cache invalidated after 420s

## Streaming

5 steps in rendering a page
1. Fetch data
2. Render Server Component (Html on server)
3. Send HTML to Browser (with css and js)
4. Render non-interactive page on browser (first paint)
5. execute javascript (react hydrates the page to make it fully interactive)

All above steps are sequential resulting in page load delays

# Streaming in nextjs works by breaking the application in smaller chunks  to load things progressively

think it as each component as a chink which will go through
all above 5 steps independently. the framework handles streaming
automatically but as a developer we can leverage by adding additional components to a route like a loading file.

nextjs will automatically render loading component
while data is being fetched (no loading state needed)

under the hood react suspense is the magic that makes it possible

suspense is a special component in react that creates a suspense boundary which works by wrapping a component that does something asynchronous like fetch data and then shows fallback UI until that async operation is done

import {Suspense} from 'react';

export default async function Home(){
    return (
        <>
        <Suspense fallback={<p>Loading posts...</p>}>
        <Posts/>
        </Suspense>
        <Suspense fallback={<p>Loading people...</p>}>
        <People/>
        </Suspense>
    )
}

s


