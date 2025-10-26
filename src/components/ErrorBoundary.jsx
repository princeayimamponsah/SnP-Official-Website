import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, info: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // You can log to an error reporting service here
    console.error("ErrorBoundary caught an error:", error, info);
    this.setState({ info });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-red-50 p-6">
          <div className="max-w-3xl bg-white rounded-lg shadow-md p-6 border border-red-200">
            <h2 className="text-xl font-bold text-red-600 mb-2">An error occurred</h2>
            <p className="text-sm text-gray-700 mb-4">The application encountered an error while rendering. The details are shown below — please share this with the developer.</p>
            <div className="bg-gray-50 p-3 rounded text-xs text-red-800 overflow-auto max-h-64">
              <pre style={{whiteSpace: 'pre-wrap'}}>
{String(this.state.error && this.state.error.toString())}
{this.state.info && this.state.info.componentStack}
              </pre>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
