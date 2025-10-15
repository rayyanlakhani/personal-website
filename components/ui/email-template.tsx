import * as React from "react";

interface EmailTemplateProps {
  fullName: string;
  email?: string;
  message?: string;
}

export function EmailTemplate({
  fullName,
  email,
  message,
}: EmailTemplateProps) {
  return (
    <div className="max-w-2xl mx-auto p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-sm border border-gray-100">
      <div className="text-center mb-8">
        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-white font-bold text-lg">✓</span>
        </div>
        <h1 className="text-2xl font-bold text-gray-900">
          New Contact Message
        </h1>
        <p className="text-gray-600 mt-2">From your portfolio website</p>
      </div>

      <div className="space-y-6">
        <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="flex-1">
            <p className="text-sm text-gray-500">From</p>
            <p className="font-semibold text-gray-900">{fullName}</p>
            <p className="text-blue-600 text-sm">{email}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500">Date</p>
            <p className="text-gray-900 text-sm">
              {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>

        <div className="p-6 bg-gray-50 rounded-xl">
          <h3 className="font-semibold text-gray-900 mb-3">Message</h3>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-gray-700 leading-relaxed">{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
