import { Award, File, LayoutDashboard } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="fixed top-16 left-0 w-64 h-[calc(100vh-4rem)] bg-white border-r p-4 overflow-y-auto">
      <nav className="space-y-8 font-semibold text-gray-500 pt-10">
        <a href="#" className="flex gap-2 p-2 hover:bg-gray-100 rounded">
          <LayoutDashboard size={24} color="black" />
          <p>Dashboard</p>
        </a>
        <a
          href="/skill-test"
          className="flex gap-2 p-2 hover:bg-gray-100 rounded"
        >
          <Award size={24} color="black" />
          <p>Skill Test</p>
        </a>
        <a href="#" className="flex gap-2 p-2 hover:bg-gray-100 rounded">
          <File size={24} color="black" />
          <p>Internship</p>
        </a>
        {/* Add more navigation items */}
      </nav>
    </aside>
  );
};

export default Sidebar;
