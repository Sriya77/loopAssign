import { useNavigate } from 'react-router-dom';

export default function Goodbye() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Goodbye!</h1>
        <p className="text-gray-600 mb-8">Thank you for using our application.</p>
        <button
          onClick={() => navigate('/')}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Sign In Again
        </button>
      </div>
    </div>
  );
}