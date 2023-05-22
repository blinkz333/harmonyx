import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          {/* Favicons, Google site verification and other common meta tags across the site. */}
          <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
        />
        </Head>
        <body>
          
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
