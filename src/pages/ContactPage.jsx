import ContactForm from '../components/ContactForm';

function ContactPage() {
  return (
    <section className="container mx-auto py-8">
      <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg max-w-lg mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Contact Us</h2>
        <ContactForm />
      </div>
    </section>
  );
}

export default ContactPage;