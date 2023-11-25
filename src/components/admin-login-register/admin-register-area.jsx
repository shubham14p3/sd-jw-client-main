import React from "react";
import Link from "next/link";
// internal
import AdminLoginShapes from "./admin-login-shapes";
import AdminRegisterForm from "../admin-forms/admin-register-form";
import AdminGoogleSignUp from "./admin-google-sign-up";


const AdminRegisterArea = () => {
  return (
    <>
      <section className="tp-login-area pb-140 p-relative z-index-1 fix">
        <AdminLoginShapes />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <div className="tp-login-wrapper">
                <div className="tp-login-top text-center mb-30">
                  <h3 className="tp-login-title">Sign Up Shofy.</h3>
                  <p>
                    Already have an account?{" "}
                    <span>
                      <Link href="/admin-login">Sign In</Link>
                    </span>
                  </p>
                </div>
                <div className="tp-login-option">
                  <div className="tp-login-social mb-10 d-flex flex-wrap align-items-center justify-content-center">
                    <div className="tp-login-option-item has-google">
                      <AdminGoogleSignUp/>
                    </div>
                  </div>
                  <div className="tp-login-mail text-center mb-40">
                    <p>
                      or Sign up with <a href="#">Email</a>
                    </p>
                  </div>
                  {/* form start */}
                  <AdminRegisterForm />
                  {/* form end */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminRegisterArea;
