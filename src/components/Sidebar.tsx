export default function Sidebar() {
  return (
    <div className="left-0 flex h-screen w-32 flex-col justify-evenly bg-red-700 text-center">
      <div className="rounded bg-blue-700 pt-8 pb-8"> First tab </div>

      <div className="bg-green-700 pt-8 pb-8"> Second tab </div>

      <div className="bg-purple-700 pt-8 pb-8"> Third tab </div>
    </div>
  );
}
