import Link from "next/link";
import Cart from "./components/Cart";


export default function Home() {
  return (
   <main>
    <h1 className="text-center ">hello world</h1>
    <Link href="/users">users</Link>
    <Cart />
   </main>
  );
}
