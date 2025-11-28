export default function Header() {
return (
<header className="bg-white border-b">
<div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="text-2xl font-bold text-red-600">LiveHindustan</div>
<nav className="hidden md:flex gap-4 text-sm text-slate-600">
<a className="hover:text-slate-900">मुख्य</a>
<a className="hover:text-slate-900">राज्य</a>
<a className="hover:text-slate-900">देश</a>
<a className="hover:text-slate-900">खेल</a>
<a className="hover:text-slate-900">मनोरंजन</a>
</nav>
</div>


<div className="text-sm text-slate-600">Sun, Nov 28 2025</div>
</div>
</header>
);
}