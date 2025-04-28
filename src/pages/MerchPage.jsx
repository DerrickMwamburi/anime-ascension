import MerchList from '../components/MerchList';

function MerchPage() {
  return (
    <section
      className="container mx-auto py-8"
      style={{
        backgroundImage: "url('https://wallpapercat.com/w/full/8/9/3/5816714-3840x2160-desktop-hd-cool-anime-wallpaper-photo.jpg')", // Path to your merch-specific background
        backgroundSize: "cover", // Ensures the background covers the entire container
        backgroundPosition: "center", // Centers the background image
        backgroundRepeat: "no-repeat", // Prevents the background from repeating
        backgroundAttachment: "fixed", // Keeps the background fixed while scrolling
        minHeight: "100vh", // Ensures the section is at least as tall as the viewport
      }}
    >
      <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Anime Merch</h2>
        <MerchList />
      </div>
    </section>
  );
}

export default MerchPage;