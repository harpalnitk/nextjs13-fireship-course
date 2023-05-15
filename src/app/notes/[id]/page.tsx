import styles from '../Notes.module.css';


//For Static generation on server

// This replaces getStaticPaths with a simplified API. generateStaticParams
// does not require any context visitParameterList. It runs at build time before 
// the corresponding Layouts or Pages are generated. It will not 
// be called again during revalidation (ISR). 

// export async function generateStaticParams(){
//     const post = await getPosts();
 
//     return post.map(post=> ({
//            slug:post.slug,
//     }))
// }




async function getNote(noteId: string) {

    //since this is dynami route it will not cache every request
    //but we can implement Incremental Static Regeneration by adding
    // a revalidat option to the fetch
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/notes/records/${noteId}`,
    {
      next: { revalidate: 10 },
    }
  );
  const data = await res.json();
  return data;
}


export default async function NotePage({params}: any) {
    const note = await getNote(params.id);
  return (
    <div>
        <h1>notes/{note.id}</h1>
        <div className={styles.note}>
        <h2 className={styles.title}>{note.title}</h2>
        <h5 className={styles.content}>{note.content}</h5>
        <p className={styles.created}>{note.created}</p>
      </div>
    </div>
  )
}
