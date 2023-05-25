import CategoryTab from "../components/ecommerce/categoryTab";
import Layout from "./../components/layout/Layout";

export default function Home() {
    return (
        <>
            {/* <IntroPopup /> */}

            <Layout noBreadcrumb="d-none">
                <section className="product-tabs section-padding position-relative">
                    <div className="container">
                        <div className="col-lg-12">
                            <CategoryTab />
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}
