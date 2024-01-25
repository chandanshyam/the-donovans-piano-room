import Link from "next/link";

export default function Home() {
  return (
    <>
    <div>The Donovan's Piano Room</div>
    <Link href="/signup" className="block">SignUp</Link>
    <Link href="/login">Login</Link>
    </>
  );
}
