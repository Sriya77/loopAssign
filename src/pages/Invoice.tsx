import { Link } from 'react-router-dom';
import { ArrowLeft, Copy } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

interface PurchasedProduct {
  name: string;
  quantity: number;
  unitPrice: number;
  discount: number;
}

const purchasedProducts: PurchasedProduct[] = [
  { name: 'White Watch', quantity: 5, unitPrice: 599, discount: 10 },
  { name: 'Chains', quantity: 2, unitPrice: 1499, discount: 5 },
  { name: 'Mobiles', quantity: 1, unitPrice: 4999, discount: 15 },
  { name: 'Formal Shirt', quantity: 3, unitPrice: 999, discount: 0 },
];

function Invoice() {
  const calculateTotal = (product: PurchasedProduct) => {
    const subtotal = product.quantity * product.unitPrice;
    return subtotal - (subtotal * product.discount) / 100;
  };

  const subtotal = purchasedProducts.reduce((acc, product) => acc + calculateTotal(product), 0);
  const additionalDiscount = 900;
  const gst = (subtotal - additionalDiscount) * 0.18;
  const total = subtotal - additionalDiscount + gst;

  const handleDownloadPDF = async () => {
    const element = document.getElementById('invoice-content');
    if (!element) return;

    try {
      const canvas = await html2canvas(element, {
        scale: 2,
        logging: false,
        useCORS: true
      });
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });

      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save('invoice.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  const handleCopyInvoiceId = () => {
    navigator.clipboard.writeText('INV-2023-456');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <Link to="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
            <ArrowLeft size={20} />
            <span>Back to Dashboard</span>
          </Link>
          <button 
            onClick={handleDownloadPDF}
            className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors"
          >
            Download Invoice
          </button>
        </div>

        <div id="invoice-content" className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="bg-yellow-400 p-6">
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-bold">Invoice Details</h1>
              <button 
                onClick={handleCopyInvoiceId}
                className="flex items-center gap-2 text-sm hover:text-gray-700 transition-colors"
              >
                <Copy size={16} />
                Copy Invoice ID
              </button>
            </div>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Shop Information</h3>
                <p className="text-sm text-gray-600">
                  Elegant Garments<br />
                  123 Fashion Street, Textile Market<br />
                  New Delhi, 110001<br />
                  GSTIN: 07AABCS1429B1Z1
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Invoice Information</h3>
                <p className="text-sm text-gray-600">
                  Invoice #INV-2023-456<br />
                  Payment Method: Credit Card Payment<br />
                  Status: Paid<br />
                  Terms: Net 30 days
                </p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Important Dates</h3>
                <p className="text-sm text-gray-600">
                  Purchase Date: 15 Nov 2023<br />
                  Exchange Period: Till 15 Dec 2023
                </p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-4">Product Name</th>
                    <th className="text-right py-4">Quantity</th>
                    <th className="text-right py-4">Unit Price</th>
                    <th className="text-right py-4">Discount</th>
                    <th className="text-right py-4">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {purchasedProducts.map((product, index) => (
                    <tr key={index} className="border-b">
                      <td className="py-4">{product.name}</td>
                      <td className="text-right">{product.quantity}</td>
                      <td className="text-right">₹{product.unitPrice}</td>
                      <td className="text-right">{product.discount}%</td>
                      <td className="text-right">₹{calculateTotal(product).toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 space-y-2">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Additional Discount:</span>
                <span>₹{additionalDiscount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>GST (18%):</span>
                <span>₹{gst.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold pt-2 border-t">
                <span>Total Amount:</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
            </div>

            <div className="mt-8 text-center bg-yellow-400 p-4 rounded-lg">
              <p className="font-medium">Thank you for your business!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Invoice;