export default function SearchBox() {
return (
<div className="bg-white p-3 rounded-lg shadow">
<label className="block text-sm font-medium mb-2">खोजें</label>
<div className="flex gap-2">
<input className="flex-1 border px-3 py-2 rounded" placeholder="कीवर्ड दर्ज करें" />
<button className="px-3 py-2 bg-red-600 text-white rounded">खोजें</button>
</div>
</div>
);
}