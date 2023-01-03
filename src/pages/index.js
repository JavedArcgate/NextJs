import Layout from "../components/Layout";
import HomePage from "../components/HomePage";

export default function index() {
  return (
    <Layout>
      <div className="container">
        <HomePage />
      </div>
    </Layout>
  );
}
