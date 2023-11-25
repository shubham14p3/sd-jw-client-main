import React from "react";
import Link from "next/link";
// internal
import AdminLoginForm from "../admin-forms/admin-login-form";
import AdminLoginShapes from "./admin-login-shapes";
import AdminGoogleSignUp from "./admin-google-sign-up";

const AdminLoginArea = () => {

  return (
    <>
      <section className="tp-login-area pb-140 p-relative z-index-1 fix">
        <AdminLoginShapes />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <div className="tp-login-wrapper">
                <div className="tp-login-top text-center mb-30">
                  <h3 className="tp-login-title">Admin Login to Shofy.</h3>
                  <p>
                    Don’t have an account?{" "}
                    <span>
                      <Link href="/register">Create a free account</Link>
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
                      or Sign in with <a href="#">Email</a>
                    </p>
                  </div>
                  <AdminLoginForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminLoginArea;
