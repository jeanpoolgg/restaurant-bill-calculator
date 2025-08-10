
function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  Restaurant Bill Calculator
                </h1>
                <p className="text-sm text-gray-500">
                  Order and calculate your tip easily
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Products Section */}
          <div className="lg:col-span-2">
            Product Section
          </div>

          {/* Cart Section */}
          <div>
            Cart Section
          </div>
        </div>
      </main>


    </div>
  );
}

export default App;