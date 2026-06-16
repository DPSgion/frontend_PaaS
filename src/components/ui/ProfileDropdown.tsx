// src/components/ui/ProfileDropdown.tsx
import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiChevronDown, FiUser, FiLogOut } from 'react-icons/fi';

export const ProfileDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    // Logic click ra ngoài (Click outside) để đóng dropdown
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleLogout = () => {
        const isConfirmed = window.confirm("Are you sure you want to log out?");

        if (isConfirmed) {
            console.log("Executing logout...");
            localStorage.removeItem('paas_token');
            navigate('/login');
        }
    };

    return (
        <div className="relative" ref={dropdownRef}>
            {/* 1. Khu vực Trigger (Avatar + Info) */}
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-3 cursor-pointer group p-1.5 rounded-lg hover:bg-gray-50 transition-colors select-none"
            >
                <img
                    src="https://api.dicebear.com/8.x/notionists/svg?seed=Felix"
                    alt="avatar"
                    className="w-9 h-9 rounded-full border border-gray-200 object-cover bg-white"
                />
                <div className="hidden md:block text-left">
                    <div className="font-semibold text-sm text-gray-800 leading-tight">Admin User</div>
                    <div className="text-xs text-gray-500">admin@paas.dev</div>
                </div>
                <FiChevronDown
                    className={`text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                />
            </div>

            {/* 2. Dropdown Menu */}
            {isOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 z-50 overflow-hidden animate-in fade-in slide-in-from-top-2">

                    <div className="p-2">
                        {/* Nút Update Information */}
                        <Link
                            to="/profile"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-indigo-50 hover:text-indigo-700 transition-colors"
                        >
                            <FiUser size={16} />
                            Update information
                        </Link>

                        <div className="h-px bg-gray-100 my-1 mx-2"></div>

                        {/* Nút Logout */}
                        <button
                            onClick={handleLogout}
                            className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-red-600 rounded-lg hover:bg-red-50 hover:text-red-700 transition-colors cursor-pointer"
                        >
                            <FiLogOut size={16} />
                            Logout
                        </button>
                    </div>

                </div>
            )}
        </div>
    );
};