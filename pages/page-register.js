import Link from "next/link";
import Layout from "../components/layout/Layout";


function Login() {

    const handleSubmit = event => {
        debugger;
        event.preventDefault();
    };


    return (
        <>
            <Layout parent="Home" sub="Pages" subChild="Login & Register">
            <div className="page-content pt-150 pb-150">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-10 col-md-12 m-auto">
                            <div className="row">
                                <div className="col-lg-6 pr-30 d-none d-lg-block">
                                    <img className="border-radius-15" src="assets/imgs/page/login-1.png" alt="" />
                                </div>
                                <div className="col-lg-6 col-md-8">
                                    <div className="login_wrap widget-taber-content background-white">
                                        <div className="padding_eight_all bg-white">
                                            <div className="heading_s1">
                                                <h1 className="mb-5">ثبت نام</h1>
                                                <p className="mb-30">آیا اکانت دارید ؟ <Link href="/page-login"><a>ورود</a></Link></p>
                                            </div>
                                            <form onSubmit={(event)=>handleSubmit(event)}>
                                                <div className="form-group">
                                                    <input type="text" required="" name="firstname" placeholder="نام" />
                                                </div>
                                                <div className="form-group">
                                                    <input type="text" required="" name="lastname" placeholder="نام خانوادگی" />
                                                </div>
                                                <div className="form-group">
                                                    <input type="text" required="" name="nationalCode" placeholder="کد ملی" />
                                                </div>
                                                <div className="form-group">
                                                    <input type="text" required="" name="uniId" placeholder="شماره دانشجویی / کد پرسنلی" />
                                                </div>
                                                <div className="form-group">
                                                    <input required="" type="password" name="password" placeholder="گذرواژه" />
                                                </div>
                                                <div className="form-group">
                                                    <button type="submit" className="btn btn-heading btn-block hover-up" name="login">ثبت نام</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Layout>
        </>
    );
}

export default Login;
