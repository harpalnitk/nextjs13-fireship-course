//'use client';

//import { useRouter } from 'next/router';
//import { useParams } from 'next/navigation';


    //in case of dynammic routes
    //url: app/routing/[id]/page.tsx
    //! To get id in client side pages
    //const {id} = useParams();



    //! for server side
    // interface Props {
    //     params:{
    //         id:string
    //     }
    // }

    // export default async function RoutingPage({params}: props){
    //     const id = params.id
    // }

//! Catch alll route
// [...id]

//! parallel routes
//more complex
//!Intercepting routes

export default function RoutingPage() {




    // const router = useRouter();

    // const someEvent = ()=>{
    //     router.push('/');
    //     router.back();
    //     router.reload();
    // }

  return (
    <div>RoutingPage</div>
  )
}
