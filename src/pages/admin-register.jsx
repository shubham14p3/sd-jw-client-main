import React from 'react';
import SEO from '@/components/seo';
import HeaderTwo from '@/layout/headers/header-2';
import Footer from '@/layout/footers/footer';
import Wrapper from '@/layout/wrapper';
import CommonBreadcrumb from '@/components/breadcrumb/common-breadcrumb';
import AdminRegisterArea from '@/components/admin-login-register/admin-register-area';

const AdminRegisterPage = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Admin Register" />
      <HeaderTwo style_2={true} />
      <CommonBreadcrumb title="Admin Register" subtitle="Admin Register" center={true} />
      <AdminRegisterArea />
      <Footer primary_style={true} />
    </Wrapper>
  );
};

export default AdminRegisterPage;