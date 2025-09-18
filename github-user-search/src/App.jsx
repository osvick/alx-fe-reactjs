import Search from "./components/Search";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">
        GitHub User Search
      </h1>

      <div className="w-full max-w-xl bg-white shadow-md rounded-2xl p-6">
        <Search />
      </div>
    </div>
  );
}
