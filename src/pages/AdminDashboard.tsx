import { useState } from 'react';
import { Package, Users, FileText, Settings, LogOut, LayoutDashboard, Database } from 'lucide-react';
import { Link } from 'react-router-dom';
import { companyConfig } from '../config';

export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('enquiries');

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'enquiries', label: 'Enquiries', icon: Users },
    { id: 'products', label: 'Products', icon: Package },
    { id: 'blog', label: 'Blog', icon: FileText },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col md:flex-row font-sans">
      
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-zinc-900 border-r border-white/10 flex flex-col">
        <div className="p-6 border-b border-white/10">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-white flex items-center justify-center rounded-sm">
              <span className="text-zinc-950 font-bold text-sm leading-none">A</span>
            </div>
            <span className="text-white font-bold text-sm tracking-wide uppercase">{companyConfig.shortName} Admin</span>
          </Link>
        </div>
        <nav className="flex-1 overflow-y-auto p-4 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-sm transition-colors ${
                activeTab === item.id 
                  ? 'bg-white/10 text-white' 
                  : 'text-zinc-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.label}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-white/10">
          <button className="w-full flex items-center px-4 py-3 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 rounded-sm transition-colors">
            <LogOut className="w-5 h-5 mr-3" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-zinc-900 border-b border-white/10 h-16 flex items-center px-8 justify-between">
          <h1 className="text-xl font-semibold text-white capitalize">{activeTab}</h1>
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-sm text-zinc-400">
              <Database className="w-4 h-4 mr-2" />
              Supabase Status: <span className="text-emerald-500 ml-1">Connected</span>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-8 bg-zinc-950">
          {activeTab === 'enquiries' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-medium text-white">Recent Enquiries</h2>
                <button className="px-4 py-2 bg-white text-zinc-950 text-sm font-medium rounded-sm hover:bg-zinc-200">
                  Export CSV
                </button>
              </div>
              
              <div className="bg-zinc-900 border border-white/10 rounded-sm overflow-hidden">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-zinc-950 border-b border-white/10">
                      <th className="px-6 py-4 text-xs font-medium text-zinc-400 uppercase tracking-wider">Ref ID</th>
                      <th className="px-6 py-4 text-xs font-medium text-zinc-400 uppercase tracking-wider">Company</th>
                      <th className="px-6 py-4 text-xs font-medium text-zinc-400 uppercase tracking-wider">Product</th>
                      <th className="px-6 py-4 text-xs font-medium text-zinc-400 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-4 text-xs font-medium text-zinc-400 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-4 text-xs font-medium text-zinc-400 uppercase tracking-wider text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {[
                      { id: 'ENQ-849201', company: 'Global Auto Parts LLC', product: 'Pistons', status: 'New', date: 'Oct 24, 2026' },
                      { id: 'ENQ-392810', company: 'Diesel Tech SpA', product: 'Custom Component', status: 'Reviewing', date: 'Oct 23, 2026' },
                      { id: 'ENQ-104928', company: 'AgriMachinery Inc', product: 'Cylinder Liners', status: 'Quoted', date: 'Oct 21, 2026' },
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-white/5 transition-colors">
                        <td className="px-6 py-4 text-sm font-mono text-zinc-300">{row.id}</td>
                        <td className="px-6 py-4 text-sm text-white font-medium">{row.company}</td>
                        <td className="px-6 py-4 text-sm text-zinc-400">{row.product}</td>
                        <td className="px-6 py-4 text-sm">
                          <span className={`inline-flex items-center px-2 py-1 rounded-sm text-xs font-medium ${
                            row.status === 'New' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' :
                            row.status === 'Reviewing' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' :
                            'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                          }`}>
                            {row.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-zinc-500">{row.date}</td>
                        <td className="px-6 py-4 text-sm text-right">
                          <button className="text-white hover:text-zinc-300 font-medium text-xs uppercase tracking-wider">View</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab !== 'enquiries' && (
            <div className="flex flex-col items-center justify-center h-64 border-2 border-dashed border-white/10 rounded-sm">
              <Settings className="w-8 h-8 text-zinc-600 mb-4" />
              <p className="text-zinc-400">Module '{activeTab}' is awaiting configuration.</p>
            </div>
          )}
        </div>
      </main>

    </div>
  );
}
