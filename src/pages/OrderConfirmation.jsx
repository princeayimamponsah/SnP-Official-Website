import React, { useEffect, useState } from "react";
import { CheckCircle2, FileDown } from "lucide-react"; // ✅ Icons
import { useNavigate } from "react-router-dom";
import jsPDF from "jspdf"; // ✅ For receipt generation

const OrderConfirmation = () => {
  const [order, setOrder] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedOrder = JSON.parse(localStorage.getItem("snpOrder"));
    if (savedOrder) {
      setOrder(savedOrder);
    }
  }, []);

  const generateReceipt = () => {
    if (!order) return;

    const doc = new jsPDF();
    const lineHeight = 10;
    let y = 20;

    // SnP Receipt Header
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.text("SnP Order Receipt", 60, y);
    y += lineHeight * 2;

    // Order Details
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);

    const details = [
      ["Order Number", order.orderNumber],
      ["Name", order.fullName],
      ["Email", order.email],
      ["Phone", order.phone],
      ["Address", order.address],
      ["Total", `GHC ${order.total.toFixed(2)}`],
      ["Date", order.date],
    ];

    details.forEach(([label, value]) => {
      doc.text(`${label}:`, 20, y);
      doc.text(String(value), 70, y);
      y += lineHeight;
    });

    // Footer Message
    y += 10;
    doc.setFont("helvetica", "italic");
    doc.text("Thank you for shopping with SnP 🖤", 60, y);
    y += 8;
    doc.text("Email: snpslides@gmail.com | Website: snpbrand@gmail.com", 25, y);

    doc.save(`SnP_Receipt_${order.orderNumber}.pdf`);
  };

  if (!order) {
    return (
      <div className="pt-32 text-center">
        <p>No order found. Please go back to checkout.</p>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-16 max-w-3xl mx-auto px-6 text-center">
      {/* ✅ Green Check Icon */}
      <div className="flex justify-center mb-6">
        <div className="bg-green-100 rounded-full p-4">
          <CheckCircle2 className="w-12 h-12 text-green-600" />
        </div>
      </div>

      <h1 className="text-3xl font-bold mb-3 text-gray-900">
        Order Confirmed 🎉
      </h1>
      <p className="text-gray-700 mb-8">
        Thank you for shopping with <span className="font-semibold">SnP</span>!  
        Your order has been successfully placed.
      </p>

      {/* Order Info Card */}
      <div className="bg-white shadow-md rounded-2xl p-6 text-left space-y-3 border border-gray-100">
        <div className="flex justify-between border-b pb-2">
          <p className="font-semibold text-gray-800">Order Number:</p>
          <p className="text-gray-600">{order.orderNumber}</p>
        </div>
        <div className="flex justify-between border-b pb-2">
          <p className="font-semibold text-gray-800">Name:</p>
          <p className="text-gray-600">{order.fullName}</p>
        </div>
        <div className="flex justify-between border-b pb-2">
          <p className="font-semibold text-gray-800">Email:</p>
          <p className="text-gray-600">{order.email}</p>
        </div>
        <div className="flex justify-between border-b pb-2">
          <p className="font-semibold text-gray-800">Phone:</p>
          <p className="text-gray-600">{order.phone}</p>
        </div>
        <div className="flex justify-between border-b pb-2">
          <p className="font-semibold text-gray-800">Address:</p>
          <p className="text-gray-600">{order.address}</p>
        </div>
        <div className="flex justify-between border-b pb-2">
          <p className="font-semibold text-gray-800">Total:</p>
          <p className="text-gray-900 font-semibold">GHC {order.total.toFixed(2)}</p>
        </div>
        <div className="flex justify-between">
          <p className="font-semibold text-gray-800">Date:</p>
          <p className="text-gray-600">{order.date}</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={generateReceipt}
          className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
        >
          <FileDown className="w-5 h-5" />
          Download Receipt
        </button>

        <button
          onClick={() => {
            localStorage.removeItem("snpOrder");
            navigate("/shop");
          }}
          className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
        >
          Back to Shop
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmation;
