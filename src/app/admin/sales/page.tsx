'use client';
import React, { useState, useEffect } from 'react';
import type { Sale } from '@/types';
import { artPieces } from '@/data/artPieces';

export default function AdminSalesPage() {
  const [sales, setSales] = useState<Sale[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    artPieceId: '',
    buyerName: '',
    buyerEmail: '',
    price: '',
    saleDate: '',
  });

  useEffect(() => {
    fetch('/api/sales')
      .then((res) => res.json())
      .then((data) => {
        setSales(data);
        setLoading(false);
      });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const artPiece = artPieces.find((p) => p.id === formData.artPieceId);
    if (!artPiece) return;

    const res = await fetch('/api/sales', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formData, artPieceTitle: artPiece.title }),
    });
    const newSale = await res.json();
    setSales((prev) => [...prev, newSale]);
    setFormData({ artPieceId: '', buyerName: '', buyerEmail: '', price: '', saleDate: '' });
    setShowForm(false);
  };

  const totalRevenue = sales.reduce((sum, s) => sum + s.price, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Art Sales Dashboard</h1>
          <button
            onClick={() => setShowForm(!showForm)}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            {showForm ? 'Cancel' : '+ Record Sale'}
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <p className="text-sm text-gray-500">Total Sales</p>
            <p className="text-3xl font-bold text-gray-900">{sales.length}</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <p className="text-sm text-gray-500">Total Revenue</p>
            <p className="text-3xl font-bold text-green-600">${totalRevenue.toLocaleString()}</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <p className="text-sm text-gray-500">Avg Sale Price</p>
            <p className="text-3xl font-bold text-gray-900">
              {sales.length ? `$${Math.round(totalRevenue / sales.length).toLocaleString()}` : '$0'}
            </p>
          </div>
        </div>

        {showForm && (
          <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
            <h2 className="text-lg font-semibold mb-4">Record New Sale</h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select
                required
                value={formData.artPieceId}
                onChange={(e) => setFormData({ ...formData, artPieceId: e.target.value })}
                className="px-4 py-2 border rounded-lg"
              >
                <option value="">Select Art Piece</option>
                {artPieces
                  .filter((p) => p.available)
                  .map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.title} - ${p.price}
                    </option>
                  ))}
              </select>
              <input
                required
                placeholder="Buyer Name"
                value={formData.buyerName}
                onChange={(e) => setFormData({ ...formData, buyerName: e.target.value })}
                className="px-4 py-2 border rounded-lg"
              />
              <input
                required
                type="email"
                placeholder="Buyer Email"
                value={formData.buyerEmail}
                onChange={(e) => setFormData({ ...formData, buyerEmail: e.target.value })}
                className="px-4 py-2 border rounded-lg"
              />
              <input
                required
                type="number"
                placeholder="Sale Price"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                className="px-4 py-2 border rounded-lg"
              />
              <input
                type="date"
                value={formData.saleDate}
                onChange={(e) => setFormData({ ...formData, saleDate: e.target.value })}
                className="px-4 py-2 border rounded-lg"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Save Sale
              </button>
            </form>
          </div>
        )}

        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b">
            <h2 className="text-lg font-semibold">Sales History</h2>
          </div>
          {loading ? (
            <p className="p-6 text-gray-500">Loading...</p>
          ) : sales.length === 0 ? (
            <p className="p-6 text-gray-500">No sales recorded yet.</p>
          ) : (
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Art Piece
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Buyer
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {sales.map((sale) => (
                  <tr key={sale.id}>
                    <td className="px-6 py-4">{sale.artPieceTitle}</td>
                    <td className="px-6 py-4">
                      <div>{sale.buyerName}</div>
                      <div className="text-sm text-gray-500">{sale.buyerEmail}</div>
                    </td>
                    <td className="px-6 py-4 font-semibold text-green-600">
                      ${sale.price.toLocaleString()}
                    </td>
                    <td className="px-6 py-4">{sale.saleDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </main>
    </div>
  );
}
