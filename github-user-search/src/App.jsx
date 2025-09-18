import Search from "./components/Search";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">GitHub User Search</h1>

      <div className="w-full max-w-xl bg-white shadow-md rounded-2xl p-6">
        <Search />
      </div>
    </div>
  );
}
