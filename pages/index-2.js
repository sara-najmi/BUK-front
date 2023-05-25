import CategoryTab from "../components/ecommerce/categoryTab";
import Layout from "../components/layout/Layout";


function Index2() {
    return (
        <>
            <Layout noBreadcrumb="d-none" headerStyle="header-style-1">

                <section className="product-tabs section-padding position-relative">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                            <CategoryTab/>
                            </div>
                        </div>
                    </div>
                </section>
                
            </Layout>
        </>
    );
}

export default Index2;
