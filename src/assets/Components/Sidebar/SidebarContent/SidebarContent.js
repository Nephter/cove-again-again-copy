import React from 'react';

import {
  FaHome,
  FaBookReader,
  FaTools,
  FaShip,
  FaUserLock,
  FaFileAlt,
  FaNetworkWired,
  FaClipboardList,
} from 'react-icons/fa';
import DashboardsDropdown from './DashboardsDropdown.js';
import Pages from './Pages.js';

export default function SidebarContent() {
  return (
    <div
      className="collapse navbar-collapse  w-auto h-auto max-height-vh-100 h-100"
      id="sidenav-collapse-main"
    >
      <ul className="navbar-nav">
        <DashboardsDropdown />
        Includes: Default, Automotive, Smart Home, VR, CRM
        <li className="nav-item mt-3">
          <h6 className="ps-4  ms-2 text-uppercase text-xs font-weight-bolder opacity-6">
            PAGES
          </h6>
        </li>
        <Pages />
        Includes: Pages, Applications, Ecommerce, Authentication
        <hr className="horizontal dark mt-0" />
        <li className="nav-item mt-3">
          <h6 className="ps-4  ms-2 text-uppercase text-xs font-weight-bolder opacity-6">
            DOCS
          </h6>
        </li>
        Includes: Basic, Components, Changelog
      </ul>
    </div>
  );
}
