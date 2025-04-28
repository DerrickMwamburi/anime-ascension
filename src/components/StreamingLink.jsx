function StreamingLink({ platform }) {
  return (
    <a
      href={platform.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition p-4"
    >
      <div className="flex items-center space-x-4">
        <img
          src={platform.logo || "/path-to-placeholder-logo.png"} // Fallback to a placeholder logo
          alt={`${platform.name} logo`}
          className="w-16 h-16 object-contain rounded"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{platform.name}</h3>
          <p className="text-gray-600 text-sm">{platform.description}</p>
        </div>
      </div>
    </a>
  );
}

export default StreamingLink;