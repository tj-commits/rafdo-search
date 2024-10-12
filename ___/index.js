import Link from "next/link";

export default function Home() {
  return (
    <div className="px-2 py-2 font-xl">
      This site is used by <Link href="https://rafdo.rf.gd" className="text-blue-500">Rafdo</Link>.
    </div>
  );
}
