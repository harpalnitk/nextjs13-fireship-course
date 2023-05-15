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
