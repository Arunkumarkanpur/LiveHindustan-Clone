import Home from '../page';
export default function Header() {
return (
<header className="bg-white border-b">
<div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="text-2xl font-bold text-red-600">LiveHindustan</div>
<nav className="hidden md:flex gap-4 text-sm text-slate-600">
<a className="hover:text-slate-900">Home</a>
<a className="hover:text-slate-900">State</a>
<a className="hover:text-slate-900">Country</a>
<a className="hover:text-slate-900">Cricket</a>
<a className="hover:text-slate-900">Entertainment</a>
</nav>
</div>


<div className="text-sm text-slate-600">Nov 28 2025</div>
</div>
</header>
);
}