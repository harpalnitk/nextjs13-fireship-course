import Link from "next/link";
import styles from './Notes.module.css';
import CreateNote from "./CreateNote";

async function getNotes() {
  //next will automatically cache this route because it is not dynamic
  //therefore we need to add
  // { cache: 'no-store' }
  //option to the URL
  //now it will refetch items from the server on every request
  // it si equivalent to getServerSideprops
    const res = await fetch('http://127.0.0.1:8090/api/collections/notes/records?page=1&perPage=30', { cache: 'no-store' });
    const data = await res.json();
    return data?.items as any[];
  }


export default async function NotesPage() {
const notes = await getNotes();


  return (
    <div>
        <h1 className={styles.pageTitle}>Notes</h1>
        <div className={styles.grid}>
            {notes.map((note)=>{
                return <Note key={note.id} note={note}/>
            })}
        </div>
        <CreateNote/>
    </div>
  )
}

function Note({note}: any){
const {id, title,content,created} = note || {};

return (
    <Link href={`/notes/${id}`}>
      <div className={styles.note}>
        <h2 className={styles.title}>{title}</h2>
        <h5 className={styles.content}>{content}</h5>
        <p className={styles.created}>{created}</p>
      </div>
    </Link>
  );

}
