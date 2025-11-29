export default function Footer() {
return (
<footer className="bg-slate-900 text-slate-200 mt-8">
<div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-1 md:grid-cols-3 gap-4">
<div>
<div className="text-lg font-bold text-red-500">LiveHindustan</div>
<p className="text-sm">© {new Date().getFullYear()} Demo - educational use only.</p>
</div>
<div className="text-sm">
<h5 className="font-semibold mb-2">Connect with us</h5>
<div>Email: arunkumarkanpur91@gmail.com</div>
<div>Mobile No: +91 7518245035</div>
</div>
<div className="text-sm">
<h5 className="font-semibold mb-2">Other</h5>
<div>Terms and Conditions</div>
</div>
</div>
</footer>
);
}