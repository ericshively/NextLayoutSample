import Link from "next/link";

export default function TopNav() {
  return (
    <div className="flex justify-evenly">
      <div>
        <Link href="/"> Home </Link>
      </div>
      <div>
        <Link href="/t3"> T3 </Link>
      </div>
      <div>
        <Link href="/projects/"> Projects </Link>
      </div>
      <div>
        <Link href="/about/"> About </Link>
      </div>
      <div>
        <Link href="/resume/"> Resume </Link>
      </div>
    </div>
  );
}
