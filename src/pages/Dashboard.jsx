import axios from "axios";
import { useEffect, useState } from "react";
import Sidebar from "../components/sidebar";
import { FaAngleDoubleUp } from "react-icons/fa";
import { MdOutlinePendingActions } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";
import { MdCancel } from "react-icons/md";

const Dashboard = () => {
  const [todo, setTodo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
      setTodo(res.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const published = todo.filter((t) => t.completed).length;
  const pending = todo.filter((t) => !t.completed).length;
  const planned = 0;
  const hold = 0;

  return (
    <div className="flex h-screen w-full bg-slate-50 overflow-hidden">
      <Sidebar />
      <div className="flex-1 p-6 overflow-y-auto">
        <h1 className="text-2xl justify-between ml-4">Dashboard</h1>
        <div className="flex flex-row-3 gap-3">
          <input
            type="text"
            placeholder="Search by test or Id"
            className="border px-3 py-2 rounded w-64"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <input
            type="text"
            placeholder="Modal"
            className="border px-3 py-2 rounded w-64"
          />
          <input
            type="text"
            placeholder="District"
            className="border px-3 py-2 rounded w-64"
          />
        </div>

        <div className="flex flex-row-3 gap-3 mt-6">
          <label className="block text-sm font-semibold text-gray-600 mb-1">
            Start Date{" "}
          </label>
          <input
            type="date"
            className="border border-gray-300 px-3 py-2 rounded-md bg-gray-50 text-gray-600"
          />
          <label className="block text-sm font-semibold text-gray-600 mb-1">
            End Date
          </label>
          <input
            type="date"
            className="border border-gray-300 px-3 py-2 rounded-md bg-gray-50 text-gray-600"
          />
          <label className="block text-sm font-semibold text-gray-600 mb-1">
            Product Type
          </label>
          <input
            type="text"
            placeholder="Story"
            className="border border-gray-300 px-3 py-2 rounded-md bg-gray-50 text-gray-600"
          />

          <button className="bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition">
            Get Data
          </button>
        </div>

        <div className="grid grid-cols-4 gap-2 mt-2 mb-1">
          <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 flex items-center gap-3">
            <div className="w-10 h-10 rounded flex items-center justify-center text-lg font-bold bg-green-400">
              <FaAngleDoubleUp className="bg-green-400" />
            </div>
            <div>
              <p className="text-xl font-bold text-gray-800">{published}</p>
              <h2 className="text-xs text-gray-500">Published</h2>
            </div>
          </div>

          <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 flex items-center gap-3">
            <div className="w-10 h-10 rounded flex items-center justify-center text-lg font-bold bg-orange-400">
              <MdOutlinePendingActions />
            </div>
            <div>
              <p className="text-xl font-bold text-gray-800">{pending}</p>
              <h2 className="text-xs text-gray-500">Pending</h2>
            </div>
          </div>

          <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 flex items-center gap-3">
            <div className="w-10 h-10 rounded flex items-center justify-center text-lg font-bold bg-blue-400">
              <CiClock2 />
            </div>
            <div>
              <p className="text-xl font-bold text-gray-800">0</p>
              <h2 className="text-xs text-gray-500">Planned</h2>
            </div>
          </div>

          <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 flex items-center gap-3">
            <div className="w-10 h-10 rounded flex items-center justify-center text-lg font-bold bg-red-400">
              <MdCancel />
            </div>
            <div>
              <p className="text-xl font-bold text-gray-800">0</p>
              <h2 className="text-xs text-gray-500"></h2>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <td className="p-4 text-sm font-semibold text-gray-600">ID</td>
                <td className="p-4 text-sm font-semibold text-gray-600">
                  Title
                </td>
                <td className="p-4 text-sm font-semibold text-gray-600">
                  Time Stamps{" "}
                </td>
                <td className="p-4 text-sm font-semibold text-gray-600">
                  Provided By
                </td>
                <td className="p-4 text-sm font-semibold text-gray-600">
                  Edited By
                </td>
                <td className="p-4 text-sm font-semibold text-gray-600">
                  Desk
                </td>
              </tr>
            </thead>

            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="6" className="p-4 text-center">
                    Loading data...
                  </td>
                </tr>
              ) : (
                todo.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b border-gray-100 hover:bg-gray-50"
                  >
                    <td className="p-4 text-sm font-bold text-gray-800">
                      {item.id}
                    </td>
                    <td className="p-4 text-sm text-gray-700">{item.title}</td>
                    <td className="p-4 text-sm text-gray-500">-</td>
                    <td className="p-4 text-sm text-gray-700">
                      User {item.userId}
                    </td>
                    <td className="p-4 text-sm text-gray-500">-</td>
                    <td className="p-4 text-sm text-gray-500">-</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
