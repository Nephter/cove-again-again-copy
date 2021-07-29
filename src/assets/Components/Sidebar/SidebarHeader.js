import React from 'react';
import { Logo } from '../../img/exportImages.js';

export default function SidebarHeader() {
  return (
    <div className="sidenav-header">
      <i
        className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
        aria-hidden="true"
        id="iconSidenav"
      />
      <a
        className="navbar-brand m-0"
        href="https://demos.creative-tim.com/soft-ui-dashboard-pro/pages/dashboards/default.html"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Logo} className="navbar-brand-img h-100" alt="main_logo" />
        <span className="ms-1 font-weight-bold">Soft UI Dashboard PRO</span>
      </a>
    </div>
  );
}
