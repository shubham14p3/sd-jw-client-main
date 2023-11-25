import React from 'react';
import SEO from '@/components/seo';
import HeaderTwo from '@/layout/headers/header-2';
import Footer from '@/layout/footers/footer';
import Wrapper from '@/layout/wrapper';
import CommonBreadcrumb from '@/components/breadcrumb/common-breadcrumb';
import AdminLoginArea from '@/components/admin-login-register/admin-login-area';

const AdminLoginPage = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Admin Login" />
      <HeaderTwo style_2={true} />
      <CommonBreadcrumb title="Admin Login" subtitle="Admin Login" center={true} />
      <AdminLoginArea/>
      <Footer primary_style={true} />
    </Wrapper>
  );
};

export default AdminLoginPage;