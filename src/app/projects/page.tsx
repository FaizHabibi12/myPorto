

// export default function Projects() {
//     return (
//         <div>
//             <h1>Projects</h1>
//             <p>Here are some of my projects.</p>
//         </div>
//     )
// }

import Image from "next/image";
import Link from "next/link";
import { arrayPorto } from '../data/projects';


export default function projects({ searchParams }: { searchParams: { category?: string } }) {
    const category = searchParams.category;


const filteredPorto = category
     ? arrayPorto.filter(porto => porto.category.toLowerCase() === category.toLowerCase())
     : arrayPorto;
     
 return (
     <main className="container mx-auto">
         <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 h-screen">
           <h2 className="text-2xl font-bold tracking-tight text-center text-soft-brown">My Portofolio</h2>

           {/* Category Filter */}
<div className="mt-4 mb-6 flex justify-center space-x-4">
     <Link href="/projects" className={`text-soft-brown ${!category ? 'font-bold' : ''}`}>All</Link>
     <Link href="/projects?category=website" className={`text-soft-brown ${category === 'website' ? 'font-bold' : ''}`}>Web</Link>
     <Link href="/projects?category=mobile" className={`text-soft-brown ${category === 'mobile' ? 'font-bold' : ''}`}>Mobile</Link>
</div>

         <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
         {filteredPorto.map((porto, index) => (
             <div key={index} className="group relative">
                 <Link href={`/projects/${porto.id}`}>
                     <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                         <Image
                           alt={porto.name}
                           src={porto.image}
                           width={10}
                           height={10}
                           unoptimized
                           className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                         />
                     </div>
                     <div className="mt-4 flex justify-between">
                         <div>
                             <h3 className="text-sm text-soft-brown">{porto.name}</h3>
                             <p className="mt-1 text-sm text-gray-300">{porto.description}</p>
                         </div>
                     </div>
                 </Link>
             </div>
         ))}
         </div>
         </div>
     </main>
 );
}
