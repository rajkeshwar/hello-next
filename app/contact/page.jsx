import Link from "next/link";

const ContactUsPage = () => {
  return (
    <div className="container">
      <h3>This is Contact Us Page</h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos
        quo repudiandae, sint illo numquam magni enim aliquid. Excepturi
        consequatur quam dolores veniam debitis voluptatibus accusantium iusto,
        fuga qui necessitatibus error.
      </p>

      <Link href={`/`}>Go back</Link>
    </div>
  );
};

export default ContactUsPage;
