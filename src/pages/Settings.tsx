import React from 'react';

const Settings = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-medium text-gray-900">General Settings</h2>
            <p className="mt-1 text-sm text-gray-500">
              Manage your store's general configuration
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Store Name
              </label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Your Store Name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Contact Email
              </label>
              <input
                type="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="store@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Currency
              </label>
              <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                <option value="USD">USD ($)</option>
                <option value="EUR">EUR (€)</option>
                <option value="GBP">GBP (£)</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;