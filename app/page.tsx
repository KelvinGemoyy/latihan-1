import Link from "next/link"

Link

export default function Home() {
  return (
    <>
     <h1>Testing</h1>
     <br/>
     <Link href="/albums">Album Page</Link>
     <br />
     <Link href="/post">Post Page</Link>
    </>
  )
}
