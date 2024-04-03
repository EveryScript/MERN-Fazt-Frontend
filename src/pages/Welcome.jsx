import { Link } from "react-router-dom";

export default function Welcome() {
    return <main className="text-white text-center py-10">
        <span className="block text-8xl mb-5">Ⓜ️</span>
        <h2 className="text-5xl font-bold mb-3">Welcome to MERN Stack by Fazt</h2>
        <p className="font-light mb-3">This is a simple page with React and MySQL to register users.</p>
        <Link className="inline-block px-5 py-3 rounded-full text-cyan-600 border-[1px] border-cyan-600 hover:bg-cyan-600 hover:text-white transition-all duration-200" to='/users'>Get started</Link>
    </main>
}