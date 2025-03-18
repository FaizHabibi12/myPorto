import Link from "next/link";

// export default function Navbar() {
//     return (
//         <div>
//             <nav className="bg-yellow-500 gap-4 w-1/3 rounded-md p-2 m-4 flex place-self-center justify-center items-center">
//                 <Link href={"/"}>Home</Link>
//                 <Link href={"/about"}>About</Link>
//                 <Link href={"/projects"}>Projects</Link>
//             </nav>
//         </div>
//     )
// }



export default function Navbar() {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
      <h1 className="text-xl font-bold text-yellow-500">Ligma</h1>
      <nav className="flex space-x-4">
        <Link href={"/"} className="text-gray-700 hover:text-yellow-500">Home</Link>
        <Link href={"/about"} className="text-gray-700 hover:text-yellow-500">About</Link>
        <Link href={"/projects"} className="text-gray-700 hover:text-yellow-500">Project</Link>
      </nav>
    </header>
  );
};
    