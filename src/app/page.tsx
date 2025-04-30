import Image from "next/image";

export default function Home() {
  return (
    <div className="inset-shadow-sm inset-shadow-red-500">
      <p>The <a href="" className="underline hover:decoration-green-500 ">quick brown fox</a> jumps over the lazy dog.</p>
    <br />
    <p>The <a href="" className="underline hover:decoration-red-500">quick brown fox</a> jumps over the lazy dog.</p>
    <br />
    <p>The <a href="" className="underline hover:decoration-blue-500 ">quick brown fox</a> jumps over the lazy dog.</p>
    <br />
<button className="bg-red-500 shadow-lg shadow-blue-500/50 rounded-xl hover:bg-blue-600 ">Subscribe</button>
    </div>
    
    
    
    
    
  );
}
