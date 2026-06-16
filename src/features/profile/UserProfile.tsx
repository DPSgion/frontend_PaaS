// src/features/profile/UserProfile.tsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiCamera, FiUser, FiGithub, FiMail, FiShield, FiHash, FiLink, FiX } from 'react-icons/fi';
import { Button } from '../../components/ui/Button';

export const UserProfile = () => {
    const navigate = useNavigate();

    // Trạng thái thông tin cơ bản cho phép sửa đổi
    const [formData, setFormData] = useState({
        ho_ten: 'Phương',
        duong_dan_anh_dai_dien: 'https://api.dicebear.com/8.x/notionists/svg?seed=Felix',
    });

    // Trạng thái liên kết GitHub (Mock định danh OAuth2)
    const [isGithubConnected, setIsGithubConnected] = useState(true);
    const [githubUsername, setGithubUsername] = useState('phuong-devops');

    // Dữ liệu hệ thống cố định (Read-only)
    const readOnlyData = {
        email: 'phuong@paas.dev',
        ten_dang_nhap: 'phuong_admin',
        vai_tro: 'SYSTEM_ADMIN',
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Xử lý kích hoạt luồng OAuth2 để liên kết GitHub
    const handleConnectGithub = () => {
        // TODO 1: Điều hướng sang URL OAuth của Backend (vd: window.location.href = `${API_URL}/auth/github`)
        console.log("Redirecting to GitHub OAuth2 page...");
        setIsGithubConnected(true);
        setGithubUsername('phuong-devops');
    };

    // Xử lý hủy liên kết GitHub
    const handleDisconnectGithub = () => {
        // TODO 2: Gọi API xóa token liên kết dưới DB trước khi cập nhật State UI
        if (window.confirm("Are you sure you want to disconnect your GitHub account? CI/CD pipelines might fail.")) {
            setIsGithubConnected(false);
            setGithubUsername('');
        }
    };

    const handleUpdateProfile = (e: React.FormEvent) => {
        e.preventDefault();
        const payload = {
            ...formData,
            ten_dang_nhap_github: isGithubConnected ? githubUsername : null
        };
        console.log('Call API to update user profile:', payload);
        // TODO 3: Bắn Toast notification thông báo cập nhật thành công
    };

    return (
        <div className="max-w-2xl mx-auto pb-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900">My Profile</h2>
                <p className="text-sm text-gray-500 mt-1">Quản lý thông tin cá nhân và thiết lập tài khoản liên kết.</p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                <form onSubmit={handleUpdateProfile}>

                    {/* Cover Banner */}
                    <div className="relative h-32 bg-gradient-to-r from-indigo-500 to-purple-600"></div>

                    {/* Avatar Profile Section */}
                    <div className="px-8 pb-6 flex flex-col items-center -mt-16">
                        <div className="relative group">
                            <img
                                src={formData.duong_dan_anh_dai_dien}
                                alt="Avatar"
                                className="w-32 h-32 rounded-full border-4 border-white shadow-md object-cover bg-white"
                            />
                            <button
                                type="button"
                                className="absolute bottom-1 right-1 bg-indigo-600 p-2 rounded-full text-white shadow-lg hover:bg-indigo-700 transition-colors border-2 border-white cursor-pointer"
                                title="Change Avatar"
                            >
                                <FiCamera size={18} />
                            </button>
                        </div>
                        <h3 className="mt-4 text-xl font-bold text-gray-900">{formData.ho_ten}</h3>
                        <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold mt-1.5 border border-indigo-100">
                            {readOnlyData.vai_tro}
                        </span>
                    </div>

                    <div className="px-8 pb-8 space-y-6">
                        {/* ========================================================= */}
                        {/* SECTION 1: EDITABLE INFORMATION                           */}
                        {/* ========================================================= */}
                        <div className="space-y-4">
                            <h4 className="text-sm font-bold text-gray-900 border-b border-gray-100 pb-2">Information</h4>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name (họ tên)</label>
                                <div className="relative">
                                    <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                    <input
                                        type="text"
                                        name="ho_ten"
                                        value={formData.ho_ten}
                                        onChange={handleInputChange}
                                        className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* ========================================================= */}
                        {/* SECTION 2: CONNECTED ACCOUNTS (Luồng OAuth2 an toàn)      */}
                        {/* ========================================================= */}
                        <div className="space-y-4 pt-2">
                            <h4 className="text-sm font-bold text-gray-900 border-b border-gray-100 pb-2">Connected Accounts</h4>

                            <div className="border border-gray-200 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-gray-50/30">
                                <div className="flex items-start gap-3">
                                    <div className="p-2 bg-gray-900 rounded-lg text-white mt-0.5">
                                        <FiGithub size={20} />
                                    </div>
                                    <div>
                                        <h5 className="text-sm font-semibold text-gray-900">GitHub Integration</h5>
                                        <p className="text-xs text-gray-500 mt-0.5 max-w-sm">
                                            Yêu cầu liên kết để đồng bộ kho chứa (Repository) và tự động kích hoạt luồng CI/CD khi đẩy mã nguồn.
                                        </p>
                                        {isGithubConnected && (
                                            <div className="mt-2 text-xs font-mono text-green-700 bg-green-50 border border-green-200 px-2 py-1 rounded w-fit flex items-center gap-1.5">
                                                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                                Connected as: <strong className="font-bold">{githubUsername}</strong>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="sm:shrink-0">
                                    {isGithubConnected ? (
                                        <button
                                            type="button"
                                            onClick={handleDisconnectGithub}
                                            className="w-fit h-fit inline-flex items-center gap-1.5 text-xs font-bold text-red-600 bg-red-50 hover:bg-red-100 border border-red-200 px-3 py-2 rounded-lg cursor-pointer transition-colors"
                                        >
                                            <FiX size={14} /> Disconnect
                                        </button>
                                    ) : (
                                        <button
                                            type="button"
                                            onClick={handleConnectGithub}
                                            className="w-fit h-fit inline-flex items-center gap-1.5 text-xs font-bold text-white bg-gray-900 hover:bg-black px-3 py-2 rounded-lg cursor-pointer transition-colors shadow-sm"
                                        >
                                            <FiLink size={14} /> Connect Account
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* ========================================================= */}
                        {/* SECTION 3: READ-ONLY SYSTEM DATA                          */}
                        {/* ========================================================= */}
                        <div className="space-y-4 pt-2">
                            <h4 className="text-sm font-bold text-gray-900 border-b border-gray-100 pb-2 flex items-center gap-2">
                                <FiShield className="text-gray-400" /> System Information (Read-only)
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-500 mb-1.5">System Username</label>
                                    <div className="relative">
                                        <FiHash className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                        <input
                                            type="text"
                                            value={readOnlyData.ten_dang_nhap}
                                            disabled
                                            className="w-full pl-10 pr-3 py-2.5 border border-gray-200 bg-gray-50 rounded-lg text-sm text-gray-500 cursor-not-allowed select-none"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-500 mb-1.5">Email Address</label>
                                    <div className="relative">
                                        <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                        <input
                                            type="email"
                                            value={readOnlyData.email}
                                            disabled
                                            className="w-full pl-10 pr-3 py-2.5 border border-gray-200 bg-gray-50 rounded-lg text-sm text-gray-500 cursor-not-allowed select-none"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Action Footer */}
                    <div className="px-8 py-5 border-t border-gray-100 bg-gray-50 flex flex-col-reverse md:flex-row justify-end gap-3">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => navigate(-1)}
                            className="w-full md:w-auto cursor-pointer"
                        >
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            className="w-full md:w-auto bg-indigo-600 hover:bg-indigo-700 text-white shadow-md cursor-pointer font-semibold"
                        >
                            Update Profile
                        </Button>
                    </div>

                </form>
            </div>
        </div>
    );
};