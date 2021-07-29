import React from 'react';
import './assets/css/soft-ui-dashboard.css';
import './assets/js/soft-ui-dashboard.js';
import './assets/css/nucleo-icons.css';
import './assets/css/nucleo-icons.svg';
import './assets/css/nucleo-svg.css';
import './assets/img/logo-ct.png';
import SidebarHeader from './assets/Components/Sidebar/SidebarHeader';
import DashboardButton from './assets/Components/Sidebar/SidebarContent/DashboardButton';

function App() {
  return (
    <body className="g-sidenav-show bg-gray-100">
      <aside
        className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 "
        id="sidenav-main"
      >
        <SidebarHeader />
        <hr className="horizontal dark mt-0" />
        <div
          className="collapse navbar-collapse  w-auto h-auto max-height-vh-100 h-100"
          id="sidenav-collapse-main"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <DashboardButton />
              <div className="collapse " id="dashboardsExamples">
                <ul className="nav ms-4 ps-3">
                  <li className="nav-item ">
                    <a className="nav-link " href="./dashboards/default.html">
                      <span className="sidenav-mini-icon"> D </span>
                      <span className="sidenav-normal"> Default </span>
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a
                      className="nav-link "
                      href="./dashboards/automotive.html"
                    >
                      <span className="sidenav-mini-icon"> A </span>
                      <span className="sidenav-normal"> Automotive </span>
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a
                      className="nav-link "
                      href="./dashboards/smart-home.html"
                    >
                      <span className="sidenav-mini-icon"> S </span>
                      <span className="sidenav-normal"> Smart Home </span>
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a
                      className="nav-link "
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                      href="#vrExamples"
                    >
                      <span className="sidenav-mini-icon"> V </span>
                      <span className="sidenav-normal">
                        {' '}
                        Virtual Reality <b className="caret" />
                      </span>
                    </a>
                    <div className="collapse " id="vrExamples">
                      <ul className="nav nav-sm flex-column">
                        <li className="nav-item">
                          <a
                            className="nav-link "
                            href="./dashboards/vr/vr-default.html"
                          >
                            <span className="sidenav-mini-icon text-xs">
                              {' '}
                              V{' '}
                            </span>
                            <span className="sidenav-normal"> VR Default </span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link "
                            href="./dashboards/vr/vr-info.html"
                          >
                            <span className="sidenav-mini-icon text-xs">
                              {' '}
                              V{' '}
                            </span>
                            <span className="sidenav-normal"> VR Info </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item ">
                    <a className="nav-link " href="./dashboards/crm.html">
                      <span className="sidenav-mini-icon"> C </span>
                      <span className="sidenav-normal"> CRM </span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item mt-3">
              <h6 className="ps-4  ms-2 text-uppercase text-xs font-weight-bolder opacity-6">
                PAGES
              </h6>
            </li>
            <li className="nav-item">
              <a
                data-bs-toggle="collapse"
                href="#pagesExamples"
                className="nav-link "
                aria-controls="pagesExamples"
                role="button"
                aria-expanded="false"
              >
                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center d-flex align-items-center justify-content-center  me-2">
                  <svg
                    width="12px"
                    height="12px"
                    viewBox="0 0 42 42"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <title>office</title>
                    <g
                      stroke="none"
                      strokeWidth={1}
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g
                        transform="translate(-1869.000000, -293.000000)"
                        fill="#FFFFFF"
                        fillRule="nonzero"
                      >
                        <g transform="translate(1716.000000, 291.000000)">
                          <g
                            id="office"
                            transform="translate(153.000000, 2.000000)"
                          >
                            <path
                              className="color-background"
                              d="M12.25,17.5 L8.75,17.5 L8.75,1.75 C8.75,0.78225 9.53225,0 10.5,0 L31.5,0 C32.46775,0 33.25,0.78225 33.25,1.75 L33.25,12.25 L29.75,12.25 L29.75,3.5 L12.25,3.5 L12.25,17.5 Z"
                              opacity="0.6"
                            />
                            <path
                              className="color-background"
                              d="M40.25,14 L24.5,14 C23.53225,14 22.75,14.78225 22.75,15.75 L22.75,38.5 L19.25,38.5 L19.25,22.75 C19.25,21.78225 18.46775,21 17.5,21 L1.75,21 C0.78225,21 0,21.78225 0,22.75 L0,40.25 C0,41.21775 0.78225,42 1.75,42 L40.25,42 C41.21775,42 42,41.21775 42,40.25 L42,15.75 C42,14.78225 41.21775,14 40.25,14 Z M12.25,36.75 L7,36.75 L7,33.25 L12.25,33.25 L12.25,36.75 Z M12.25,29.75 L7,29.75 L7,26.25 L12.25,26.25 L12.25,29.75 Z M35,36.75 L29.75,36.75 L29.75,33.25 L35,33.25 L35,36.75 Z M35,29.75 L29.75,29.75 L29.75,26.25 L35,26.25 L35,29.75 Z M35,22.75 L29.75,22.75 L29.75,19.25 L35,19.25 L35,22.75 Z"
                            />
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <span className="nav-link-text ms-1">Pages</span>
              </a>
              <div className="collapse " id="pagesExamples">
                <ul className="nav ms-4 ps-3">
                  <li className="nav-item ">
                    <a
                      className="nav-link "
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                      href="#profileExample"
                    >
                      <span className="sidenav-mini-icon"> P </span>
                      <span className="sidenav-normal">
                        {' '}
                        Profile <b className="caret" />
                      </span>
                    </a>
                    <div className="collapse " id="profileExample">
                      <ul className="nav nav-sm flex-column">
                        <li className="nav-item">
                          <a
                            className="nav-link "
                            href="./pages/profile/overview.html"
                          >
                            <span className="sidenav-mini-icon text-xs">
                              {' '}
                              P{' '}
                            </span>
                            <span className="sidenav-normal">
                              {' '}
                              Profile Overview{' '}
                            </span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link "
                            href="./pages/profile/teams.html"
                          >
                            <span className="sidenav-mini-icon text-xs">
                              {' '}
                              T{' '}
                            </span>
                            <span className="sidenav-normal"> Teams </span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link "
                            href="./pages/profile/projects.html"
                          >
                            <span className="sidenav-mini-icon text-xs">
                              {' '}
                              A{' '}
                            </span>
                            <span className="sidenav-normal">
                              {' '}
                              All Projects{' '}
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item ">
                    <a
                      className="nav-link "
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                      href="#usersExample"
                    >
                      <span className="sidenav-mini-icon"> U </span>
                      <span className="sidenav-normal">
                        {' '}
                        Users <b className="caret" />
                      </span>
                    </a>
                    <div className="collapse " id="usersExample">
                      <ul className="nav nav-sm flex-column">
                        <li className="nav-item">
                          <a
                            className="nav-link "
                            href="./pages/users/reports.html"
                          >
                            <span className="sidenav-mini-icon text-xs">
                              {' '}
                              R{' '}
                            </span>
                            <span className="sidenav-normal"> Reports </span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link "
                            href="./pages/users/new-user.html"
                          >
                            <span className="sidenav-mini-icon text-xs">
                              {' '}
                              N{' '}
                            </span>
                            <span className="sidenav-normal"> New User </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item ">
                    <a
                      className="nav-link "
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                      href="#accountExample"
                    >
                      <span className="sidenav-mini-icon"> A </span>
                      <span className="sidenav-normal">
                        {' '}
                        Account <b className="caret" />
                      </span>
                    </a>
                    <div className="collapse " id="accountExample">
                      <ul className="nav nav-sm flex-column">
                        <li className="nav-item">
                          <a
                            className="nav-link "
                            href="./pages/account/settings.html"
                          >
                            <span className="sidenav-mini-icon text-xs">
                              {' '}
                              S{' '}
                            </span>
                            <span className="sidenav-normal"> Settings </span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link "
                            href="./pages/account/billing.html"
                          >
                            <span className="sidenav-mini-icon text-xs">
                              {' '}
                              B{' '}
                            </span>
                            <span className="sidenav-normal"> Billing </span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link "
                            href="./pages/account/invoice.html"
                          >
                            <span className="sidenav-mini-icon text-xs">
                              {' '}
                              I{' '}
                            </span>
                            <span className="sidenav-normal"> Invoice </span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link "
                            href="./pages/account/security.html"
                          >
                            <span className="sidenav-mini-icon text-xs">
                              {' '}
                              S{' '}
                            </span>
                            <span className="sidenav-normal"> Security </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item ">
                    <a
                      className="nav-link "
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                      href="#projectsExample"
                    >
                      <span className="sidenav-mini-icon"> P </span>
                      <span className="sidenav-normal">
                        {' '}
                        Projects <b className="caret" />
                      </span>
                    </a>
                    <div className="collapse " id="projectsExample">
                      <ul className="nav nav-sm flex-column">
                        <li className="nav-item">
                          <a
                            className="nav-link "
                            href="./pages/projects/general.html"
                          >
                            <span className="sidenav-mini-icon text-xs">
                              {' '}
                              G{' '}
                            </span>
                            <span className="sidenav-normal"> General </span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link "
                            href="./pages/projects/timeline.html"
                          >
                            <span className="sidenav-mini-icon text-xs">
                              {' '}
                              T{' '}
                            </span>
                            <span className="sidenav-normal"> Timeline </span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link "
                            href="./pages/projects/new-project.html"
                          >
                            <span className="sidenav-mini-icon text-xs">
                              {' '}
                              N{' '}
                            </span>
                            <span className="sidenav-normal">
                              {' '}
                              New Project{' '}
                            </span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link "
                            href="./pages/pages/Cove/contractUI.html"
                          >
                            <span className="sidenav-mini-icon text-xs">
                              {' '}
                              N{' '}
                            </span>
                            <span className="sidenav-normal"> Cove </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item ">
                    <a className="nav-link " href="./pages/pricing-page.html">
                      <span className="sidenav-mini-icon"> P </span>
                      <span className="sidenav-normal"> Pricing Page </span>
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a className="nav-link " href="./pages/rtl-page.html">
                      <span className="sidenav-mini-icon"> R </span>
                      <span className="sidenav-normal"> RTL </span>
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a className="nav-link " href="./pages/widgets.html">
                      <span className="sidenav-mini-icon"> W </span>
                      <span className="sidenav-normal"> Widgets </span>
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a className="nav-link " href="./pages/charts.html">
                      <span className="sidenav-mini-icon"> C </span>
                      <span className="sidenav-normal"> Charts </span>
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a className="nav-link " href="./pages/sweet-alerts.html">
                      <span className="sidenav-mini-icon"> S </span>
                      <span className="sidenav-normal"> Sweet Alerts </span>
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a className="nav-link " href="./pages/notifications.html">
                      <span className="sidenav-mini-icon"> N </span>
                      <span className="sidenav-normal"> Notifications </span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a
                data-bs-toggle="collapse"
                href="#applicationsExamples"
                className="nav-link "
                aria-controls="applicationsExamples"
                role="button"
                aria-expanded="false"
              >
                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center d-flex align-items-center justify-content-center  me-2">
                  <svg
                    width="12px"
                    height="12px"
                    viewBox="0 0 40 40"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <title>settings</title>
                    <g
                      stroke="none"
                      strokeWidth={1}
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g
                        transform="translate(-2020.000000, -442.000000)"
                        fill="#FFFFFF"
                        fillRule="nonzero"
                      >
                        <g transform="translate(1716.000000, 291.000000)">
                          <g transform="translate(304.000000, 151.000000)">
                            <polygon
                              className="color-background"
                              opacity="0.596981957"
                              points="18.0883333 15.7316667 11.1783333 8.82166667 13.3333333 6.66666667 6.66666667 0 0 6.66666667 6.66666667 13.3333333 8.82166667 11.1783333 15.315 17.6716667"
                            />
                            <path
                              className="color-background"
                              d="M31.5666667,23.2333333 C31.0516667,23.2933333 30.53,23.3333333 30,23.3333333 C29.4916667,23.3333333 28.9866667,23.3033333 28.48,23.245 L22.4116667,30.7433333 L29.9416667,38.2733333 C32.2433333,40.575 35.9733333,40.575 38.275,38.2733333 L38.275,38.2733333 C40.5766667,35.9716667 40.5766667,32.2416667 38.275,29.94 L31.5666667,23.2333333 Z"
                              opacity="0.596981957"
                            />
                            <path
                              className="color-background"
                              d="M33.785,11.285 L28.715,6.215 L34.0616667,0.868333333 C32.82,0.315 31.4483333,0 30,0 C24.4766667,0 20,4.47666667 20,10 C20,10.99 20.1483333,11.9433333 20.4166667,12.8466667 L2.435,27.3966667 C0.95,28.7083333 0.0633333333,30.595 0.00333333333,32.5733333 C-0.0583333333,34.5533333 0.71,36.4916667 2.11,37.89 C3.47,39.2516667 5.27833333,40 7.20166667,40 C9.26666667,40 11.2366667,39.1133333 12.6033333,37.565 L27.1533333,19.5833333 C28.0566667,19.8516667 29.01,20 30,20 C35.5233333,20 40,15.5233333 40,10 C40,8.55166667 39.685,7.18 39.1316667,5.93666667 L33.785,11.285 Z"
                            />
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <span className="nav-link-text ms-1">Applications</span>
              </a>
              <div className="collapse " id="applicationsExamples">
                <ul className="nav ms-4 ps-3">
                  <li className="nav-item ">
                    <a className="nav-link " href="./applications/kanban.html">
                      <span className="sidenav-mini-icon"> K </span>
                      <span className="sidenav-normal"> Kanban </span>
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a className="nav-link " href="./applications/wizard.html">
                      <span className="sidenav-mini-icon"> W </span>
                      <span className="sidenav-normal"> Wizard </span>
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a
                      className="nav-link "
                      href="./applications/datatables.html"
                    >
                      <span className="sidenav-mini-icon"> D </span>
                      <span className="sidenav-normal"> DataTables </span>
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a
                      className="nav-link "
                      href="./applications/calendar.html"
                    >
                      <span className="sidenav-mini-icon"> C </span>
                      <span className="sidenav-normal"> Calendar </span>
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a
                      className="nav-link "
                      href="./applications/analytics.html"
                    >
                      <span className="sidenav-mini-icon"> A </span>
                      <span className="sidenav-normal"> Analytics </span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a
                data-bs-toggle="collapse"
                href="#ecommerceExamples"
                className="nav-link "
                aria-controls="ecommerceExamples"
                role="button"
                aria-expanded="false"
              >
                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center d-flex align-items-center justify-content-center  me-2">
                  <svg
                    className="text-dark"
                    width="12px"
                    height="12px"
                    viewBox="0 0 42 44"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <title>basket</title>
                    <g
                      stroke="none"
                      strokeWidth={1}
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g
                        transform="translate(-1869.000000, -741.000000)"
                        fill="#FFFFFF"
                        fillRule="nonzero"
                      >
                        <g transform="translate(1716.000000, 291.000000)">
                          <g
                            id="basket"
                            transform="translate(153.000000, 450.000000)"
                          >
                            <path
                              className="color-background"
                              d="M34.080375,13.125 L27.3748125,1.9490625 C27.1377583,1.53795093 26.6972449,1.28682264 26.222716,1.29218729 C25.748187,1.29772591 25.3135593,1.55890827 25.0860125,1.97535742 C24.8584658,2.39180657 24.8734447,2.89865282 25.1251875,3.3009375 L31.019625,13.125 L10.980375,13.125 L16.8748125,3.3009375 C17.1265553,2.89865282 17.1415342,2.39180657 16.9139875,1.97535742 C16.6864407,1.55890827 16.251813,1.29772591 15.777284,1.29218729 C15.3027551,1.28682264 14.8622417,1.53795093 14.6251875,1.9490625 L7.919625,13.125 L0,13.125 L0,18.375 L42,18.375 L42,13.125 L34.080375,13.125 Z"
                              opacity="0.595377604"
                            />
                            <path
                              className="color-background"
                              d="M3.9375,21 L3.9375,38.0625 C3.9375,40.9619949 6.28800506,43.3125 9.1875,43.3125 L32.8125,43.3125 C35.7119949,43.3125 38.0625,40.9619949 38.0625,38.0625 L38.0625,21 L3.9375,21 Z M14.4375,36.75 L11.8125,36.75 L11.8125,26.25 L14.4375,26.25 L14.4375,36.75 Z M22.3125,36.75 L19.6875,36.75 L19.6875,26.25 L22.3125,26.25 L22.3125,36.75 Z M30.1875,36.75 L27.5625,36.75 L27.5625,26.25 L30.1875,26.25 L30.1875,36.75 Z"
                            />
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <span className="nav-link-text ms-1">Ecommerce</span>
              </a>
              <div className="collapse " id="ecommerceExamples">
                <ul className="nav ms-4 ps-3">
                  <li className="nav-item ">
                    <a className="nav-link " href="./ecommerce/overview.html">
                      <span className="sidenav-mini-icon"> O </span>
                      <span className="sidenav-normal"> Overview </span>
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a
                      className="nav-link "
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                      href="#productsExample"
                    >
                      <span className="sidenav-mini-icon"> P </span>
                      <span className="sidenav-normal">
                        {' '}
                        Products <b className="caret" />
                      </span>
                    </a>
                    <div className="collapse " id="productsExample">
                      <ul className="nav nav-sm flex-column">
                        <li className="nav-item">
                          <a
                            className="nav-link "
                            href="./ecommerce/products/new-product.html"
                          >
                            <span className="sidenav-mini-icon text-xs">
                              {' '}
                              N{' '}
                            </span>
                            <span className="sidenav-normal">
                              {' '}
                              New Product{' '}
                            </span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link "
                            href="./ecommerce/products/edit-product.html"
                          >
                            <span className="sidenav-mini-icon text-xs">
                              {' '}
                              E{' '}
                            </span>
                            <span className="sidenav-normal">
                              {' '}
                              Edit Product{' '}
                            </span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link "
                            href="./ecommerce/products/product-page.html"
                          >
                            <span className="sidenav-mini-icon text-xs">
                              {' '}
                              P{' '}
                            </span>
                            <span className="sidenav-normal">
                              {' '}
                              Product Page{' '}
                            </span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link "
                            href="./ecommerce/products/products-list.html"
                          >
                            <span className="sidenav-mini-icon text-xs">
                              {' '}
                              P{' '}
                            </span>
                            <span className="sidenav-normal">
                              {' '}
                              Products List{' '}
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item ">
                    <a
                      className="nav-link "
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                      href="#ordersExample"
                    >
                      <span className="sidenav-mini-icon"> O </span>
                      <span className="sidenav-normal">
                        {' '}
                        Orders <b className="caret" />
                      </span>
                    </a>
                    <div className="collapse " id="ordersExample">
                      <ul className="nav nav-sm flex-column">
                        <li className="nav-item">
                          <a
                            className="nav-link "
                            href="./ecommerce/orders/list.html"
                          >
                            <span className="sidenav-mini-icon text-xs">
                              {' '}
                              O{' '}
                            </span>
                            <span className="sidenav-normal"> Order List </span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link "
                            href="./ecommerce/orders/details.html"
                          >
                            <span className="sidenav-mini-icon text-xs">
                              {' '}
                              O{' '}
                            </span>
                            <span className="sidenav-normal">
                              {' '}
                              Order Details{' '}
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item ">
                    <a className="nav-link " href="./ecommerce/referral.html">
                      <span className="sidenav-mini-icon"> R </span>
                      <span className="sidenav-normal"> Referral </span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a
                data-bs-toggle="collapse"
                href="#authExamples"
                className="nav-link "
                aria-controls="authExamples"
                role="button"
                aria-expanded="false"
              >
                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center d-flex align-items-center justify-content-center  me-2">
                  <svg
                    width="12px"
                    height="12px"
                    viewBox="0 0 40 44"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <title>document</title>
                    <g
                      stroke="none"
                      strokeWidth={1}
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g
                        transform="translate(-1870.000000, -591.000000)"
                        fill="#FFFFFF"
                        fillRule="nonzero"
                      >
                        <g transform="translate(1716.000000, 291.000000)">
                          <g transform="translate(154.000000, 300.000000)">
                            <path
                              className="color-background"
                              d="M40,40 L36.3636364,40 L36.3636364,3.63636364 L5.45454545,3.63636364 L5.45454545,0 L38.1818182,0 C39.1854545,0 40,0.814545455 40,1.81818182 L40,40 Z"
                              opacity="0.603585379"
                            />
                            <path
                              className="color-background"
                              d="M30.9090909,7.27272727 L1.81818182,7.27272727 C0.814545455,7.27272727 0,8.08727273 0,9.09090909 L0,41.8181818 C0,42.8218182 0.814545455,43.6363636 1.81818182,43.6363636 L30.9090909,43.6363636 C31.9127273,43.6363636 32.7272727,42.8218182 32.7272727,41.8181818 L32.7272727,9.09090909 C32.7272727,8.08727273 31.9127273,7.27272727 30.9090909,7.27272727 Z M18.1818182,34.5454545 L7.27272727,34.5454545 L7.27272727,30.9090909 L18.1818182,30.9090909 L18.1818182,34.5454545 Z M25.4545455,27.2727273 L7.27272727,27.2727273 L7.27272727,23.6363636 L25.4545455,23.6363636 L25.4545455,27.2727273 Z M25.4545455,20 L7.27272727,20 L7.27272727,16.3636364 L25.4545455,16.3636364 L25.4545455,20 Z"
                            />
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <span className="nav-link-text ms-1">Authentication</span>
              </a>
              <div className="collapse " id="authExamples">
                <ul className="nav ms-4 ps-3">
                  <li className="nav-item ">
                    <a
                      className="nav-link "
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                      href="#signinExample"
                    >
                      <span className="sidenav-mini-icon"> S </span>
                      <span className="sidenav-normal">
                        {' '}
                        Sign In <b className="caret" />
                      </span>
                    </a>
                    <div className="collapse " id="signinExample">
                      <ul className="nav nav-sm flex-column">
                        <li className="nav-item">
                          <a
                            className="nav-link "
                            href="./authentication/signin/basic.html"
                          >
                            <span className="sidenav-mini-icon text-xs">
                              {' '}
                              B{' '}
                            </span>
                            <span className="sidenav-normal"> Basic </span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link "
                            href="./authentication/signin/cover.html"
                          >
                            <span className="sidenav-mini-icon text-xs">
                              {' '}
                              C{' '}
                            </span>
                            <span className="sidenav-normal"> Cover </span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link "
                            href="./authentication/signin/illustration.html"
                          >
                            <span className="sidenav-mini-icon text-xs">
                              {' '}
                              I{' '}
                            </span>
                            <span className="sidenav-normal">
                              {' '}
                              Illustration{' '}
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item ">
                    <a
                      className="nav-link "
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                      href="#signupExample"
                    >
                      <span className="sidenav-mini-icon"> S </span>
                      <span className="sidenav-normal">
                        {' '}
                        Sign Up <b className="caret" />
                      </span>
                    </a>
                    <div className="collapse " id="signupExample">
                      <ul className="nav nav-sm flex-column">
                        <li className="nav-item">
                          <a
                            className="nav-link "
                            href="./authentication/signup/basic.html"
                          >
                            <span className="sidenav-mini-icon text-xs">
                              {' '}
                              B{' '}
                            </span>
                            <span className="sidenav-normal"> Basic </span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link "
                            href="./authentication/signup/cover.html"
                          >
                            <span className="sidenav-mini-icon text-xs">
                              {' '}
                              C{' '}
                            </span>
                            <span className="sidenav-normal"> Cover </span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link "
                            href="./authentication/signup/illustration.html"
                          >
                            <span className="sidenav-mini-icon text-xs">
                              {' '}
                              I{' '}
                            </span>
                            <span className="sidenav-normal">
                              {' '}
                              Illustration{' '}
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item ">
                    <a
                      className="nav-link "
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                      href="#resetExample"
                    >
                      <span className="sidenav-mini-icon"> R </span>
                      <span className="sidenav-normal">
                        {' '}
                        Reset Password <b className="caret" />
                      </span>
                    </a>
                    <div className="collapse " id="resetExample">
                      <ul className="nav nav-sm flex-column">
                        <li className="nav-item">
                          <a
                            className="nav-link "
                            href="./authentication/reset/basic.html"
                          >
                            <span className="sidenav-mini-icon text-xs">
                              {' '}
                              B{' '}
                            </span>
                            <span className="sidenav-normal"> Basic </span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link "
                            href="./authentication/reset/cover.html"
                          >
                            <span className="sidenav-mini-icon text-xs">
                              {' '}
                              C{' '}
                            </span>
                            <span className="sidenav-normal"> Cover </span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link "
                            href="./authentication/reset/illustration.html"
                          >
                            <span className="sidenav-mini-icon text-xs">
                              {' '}
                              I{' '}
                            </span>
                            <span className="sidenav-normal">
                              {' '}
                              Illustration{' '}
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item ">
                    <a
                      className="nav-link "
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                      href="#lockExample"
                    >
                      <span className="sidenav-mini-icon"> L </span>
                      <span className="sidenav-normal">
                        {' '}
                        Lock <b className="caret" />
                      </span>
                    </a>
                    <div className="collapse " id="lockExample">
                      <ul className="nav nav-sm flex-column">
                        <li className="nav-item">
                          <a
                            className="nav-link "
                            href="./authentication/lock/basic.html"
                          >
                            <span className="sidenav-mini-icon text-xs">
                              {' '}
                              B{' '}
                            </span>
                            <span className="sidenav-normal"> Basic </span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link "
                            href="./authentication/lock/cover.html"
                          >
                            <span className="sidenav-mini-icon text-xs">
                              {' '}
                              C{' '}
                            </span>
                            <span className="sidenav-normal"> Cover </span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link "
                            href="./authentication/lock/illustration.html"
                          >
                            <span className="sidenav-mini-icon text-xs">
                              {' '}
                              I{' '}
                            </span>
                            <span className="sidenav-normal">
                              {' '}
                              Illustration{' '}
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item ">
                    <a
                      className="nav-link "
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                      href="#StepExample"
                    >
                      <span className="sidenav-mini-icon"> 2 </span>
                      <span className="sidenav-normal">
                        {' '}
                        2-Step Verification <b className="caret" />
                      </span>
                    </a>
                    <div className="collapse " id="StepExample">
                      <ul className="nav nav-sm flex-column">
                        <li className="nav-item">
                          <a
                            className="nav-link "
                            href="./authentication/verification/basic.html"
                          >
                            <span className="sidenav-mini-icon text-xs">
                              {' '}
                              B{' '}
                            </span>
                            <span className="sidenav-normal"> Basic </span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link "
                            href="./authentication/verification/cover.html"
                          >
                            <span className="sidenav-mini-icon text-xs">
                              {' '}
                              C{' '}
                            </span>
                            <span className="sidenav-normal"> Cover </span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link "
                            href="./authentication/verification/illustration.html"
                          >
                            <span className="sidenav-mini-icon text-xs">
                              {' '}
                              I{' '}
                            </span>
                            <span className="sidenav-normal">
                              {' '}
                              Illustration{' '}
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item ">
                    <a
                      className="nav-link "
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                      href="#errorExample"
                    >
                      <span className="sidenav-mini-icon"> E </span>
                      <span className="sidenav-normal">
                        {' '}
                        Error <b className="caret" />
                      </span>
                    </a>
                    <div className="collapse " id="errorExample">
                      <ul className="nav nav-sm flex-column">
                        <li className="nav-item">
                          <a
                            className="nav-link "
                            href="./authentication/error/404.html"
                          >
                            <span className="sidenav-mini-icon text-xs">
                              {' '}
                              E{' '}
                            </span>
                            <span className="sidenav-normal"> Error 404 </span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link "
                            href="./authentication/error/500.html"
                          >
                            <span className="sidenav-mini-icon text-xs">
                              {' '}
                              E{' '}
                            </span>
                            <span className="sidenav-normal"> Error 500 </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <hr className="horizontal dark" />
              <h6 className="ps-4  ms-2 text-uppercase text-xs font-weight-bolder opacity-6">
                DOCS
              </h6>
            </li>
            <li className="nav-item">
              <a
                data-bs-toggle="collapse"
                href="#basicExamples"
                className="nav-link "
                aria-controls="basicExamples"
                role="button"
                aria-expanded="false"
              >
                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center d-flex align-items-center justify-content-center  me-2">
                  <svg
                    width="12px"
                    height="20px"
                    viewBox="0 0 40 40"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <title>spaceship</title>
                    <g
                      stroke="none"
                      strokeWidth={1}
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g
                        transform="translate(-1720.000000, -592.000000)"
                        fill="#FFFFFF"
                        fillRule="nonzero"
                      >
                        <g transform="translate(1716.000000, 291.000000)">
                          <g transform="translate(4.000000, 301.000000)">
                            <path
                              className="color-background"
                              d="M39.3,0.706666667 C38.9660984,0.370464027 38.5048767,0.192278529 38.0316667,0.216666667 C14.6516667,1.43666667 6.015,22.2633333 5.93166667,22.4733333 C5.68236407,23.0926189 5.82664679,23.8009159 6.29833333,24.2733333 L15.7266667,33.7016667 C16.2013871,34.1756798 16.9140329,34.3188658 17.535,34.065 C17.7433333,33.98 38.4583333,25.2466667 39.7816667,1.97666667 C39.8087196,1.50414529 39.6335979,1.04240574 39.3,0.706666667 Z M25.69,19.0233333 C24.7367525,19.9768687 23.3029475,20.2622391 22.0572426,19.7463614 C20.8115377,19.2304837 19.9992882,18.0149658 19.9992882,16.6666667 C19.9992882,15.3183676 20.8115377,14.1028496 22.0572426,13.5869719 C23.3029475,13.0710943 24.7367525,13.3564646 25.69,14.31 C26.9912731,15.6116662 26.9912731,17.7216672 25.69,19.0233333 L25.69,19.0233333 Z"
                            />
                            <path
                              className="color-background"
                              d="M1.855,31.4066667 C3.05106558,30.2024182 4.79973884,29.7296005 6.43969145,30.1670277 C8.07964407,30.6044549 9.36054508,31.8853559 9.7979723,33.5253085 C10.2353995,35.1652612 9.76258177,36.9139344 8.55833333,38.11 C6.70666667,39.9616667 0,40 0,40 C0,40 0,33.2566667 1.855,31.4066667 Z"
                            />
                            <path
                              className="color-background"
                              d="M17.2616667,3.90166667 C12.4943643,3.07192755 7.62174065,4.61673894 4.20333333,8.04166667 C3.31200265,8.94126033 2.53706177,9.94913142 1.89666667,11.0416667 C1.5109569,11.6966059 1.61721591,12.5295394 2.155,13.0666667 L5.47,16.3833333 C8.55036617,11.4946947 12.5559074,7.25476565 17.2616667,3.90166667 L17.2616667,3.90166667 Z"
                              opacity="0.598539807"
                            />
                            <path
                              className="color-background"
                              d="M36.0983333,22.7383333 C36.9280725,27.5056357 35.3832611,32.3782594 31.9583333,35.7966667 C31.0587397,36.6879974 30.0508686,37.4629382 28.9583333,38.1033333 C28.3033941,38.4890431 27.4704606,38.3827841 26.9333333,37.845 L23.6166667,34.53 C28.5053053,31.4496338 32.7452344,27.4440926 36.0983333,22.7383333 L36.0983333,22.7383333 Z"
                              opacity="0.598539807"
                            />
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <span className="nav-link-text ms-1">Basic</span>
              </a>
              <div className="collapse " id="basicExamples">
                <ul className="nav ms-4 ps-3">
                  <li className="nav-item ">
                    <a
                      className="nav-link "
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                      href="#gettingStartedExample"
                    >
                      <span className="sidenav-mini-icon"> G </span>
                      <span className="sidenav-normal">
                        {' '}
                        Getting Started <b className="caret" />
                      </span>
                    </a>
                    <div className="collapse " id="gettingStartedExample">
                      <ul className="nav nav-sm flex-column">
                        <li className="nav-item">
                          <a
                            className="nav-link "
                            href="https://www.creative-tim.com/learning-lab/bootstrap/quick-start/soft-ui-dashboard"
                            target="_blank"
                          >
                            <span className="sidenav-mini-icon text-xs">
                              {' '}
                              Q{' '}
                            </span>
                            <span className="sidenav-normal">
                              {' '}
                              Quick Start{' '}
                            </span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link "
                            href="https://www.creative-tim.com/learning-lab/bootstrap/license/soft-ui-dashboard"
                            target="_blank"
                          >
                            <span className="sidenav-mini-icon text-xs">
                              {' '}
                              L{' '}
                            </span>
                            <span className="sidenav-normal"> License </span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link "
                            href="https://www.creative-tim.com/learning-lab/bootstrap/overview/soft-ui-dashboard"
                            target="_blank"
                          >
                            <span className="sidenav-mini-icon text-xs">
                              {' '}
                              C{' '}
                            </span>
                            <span className="sidenav-normal"> Contents </span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link "
                            href="https://www.creative-tim.com/learning-lab/bootstrap/build-tools/soft-ui-dashboard"
                            target="_blank"
                          >
                            <span className="sidenav-mini-icon text-xs">
                              {' '}
                              B{' '}
                            </span>
                            <span className="sidenav-normal">
                              {' '}
                              Build Tools{' '}
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item ">
                    <a
                      className="nav-link "
                      data-bs-toggle="collapse"
                      aria-expanded="false"
                      href="#foundationExample"
                    >
                      <span className="sidenav-mini-icon"> F </span>
                      <span className="sidenav-normal">
                        {' '}
                        Foundation <b className="caret" />
                      </span>
                    </a>
                    <div className="collapse " id="foundationExample">
                      <ul className="nav nav-sm flex-column">
                        <li className="nav-item">
                          <a
                            className="nav-link "
                            href="https://www.creative-tim.com/learning-lab/bootstrap/colors/soft-ui-dashboard"
                            target="_blank"
                          >
                            <span className="sidenav-mini-icon text-xs">
                              {' '}
                              C{' '}
                            </span>
                            <span className="sidenav-normal"> Colors </span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link "
                            href="https://www.creative-tim.com/learning-lab/bootstrap/grid/soft-ui-dashboard"
                            target="_blank"
                          >
                            <span className="sidenav-mini-icon text-xs">
                              {' '}
                              G{' '}
                            </span>
                            <span className="sidenav-normal"> Grid </span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link "
                            href="https://www.creative-tim.com/learning-lab/bootstrap/typography/soft-ui-dashboard"
                            target="_blank"
                          >
                            <span className="sidenav-mini-icon text-xs">
                              {' '}
                              T{' '}
                            </span>
                            <span className="sidenav-normal"> Typography </span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link "
                            href="https://www.creative-tim.com/learning-lab/bootstrap/icons/soft-ui-dashboard"
                            target="_blank"
                          >
                            <span className="sidenav-mini-icon text-xs">
                              {' '}
                              I{' '}
                            </span>
                            <span className="sidenav-normal"> Icons </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a
                data-bs-toggle="collapse"
                href="#componentsExamples"
                className="nav-link "
                aria-controls="componentsExamples"
                role="button"
                aria-expanded="false"
              >
                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center d-flex align-items-center justify-content-center  me-2">
                  <svg
                    width="12px"
                    height="12px"
                    viewBox="0 0 46 42"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <title>customer-support</title>
                    <g
                      stroke="none"
                      strokeWidth={1}
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g
                        transform="translate(-1717.000000, -291.000000)"
                        fill="#FFFFFF"
                        fillRule="nonzero"
                      >
                        <g transform="translate(1716.000000, 291.000000)">
                          <g transform="translate(1.000000, 0.000000)">
                            <path
                              className="color-background"
                              d="M45,0 L26,0 C25.447,0 25,0.447 25,1 L25,20 C25,20.379 25.214,20.725 25.553,20.895 C25.694,20.965 25.848,21 26,21 C26.212,21 26.424,20.933 26.6,20.8 L34.333,15 L45,15 C45.553,15 46,14.553 46,14 L46,1 C46,0.447 45.553,0 45,0 Z"
                              opacity="0.59858631"
                            />
                            <path
                              className="color-foreground"
                              d="M22.883,32.86 C20.761,32.012 17.324,31 13,31 C8.676,31 5.239,32.012 3.116,32.86 C1.224,33.619 0,35.438 0,37.494 L0,41 C0,41.553 0.447,42 1,42 L25,42 C25.553,42 26,41.553 26,41 L26,37.494 C26,35.438 24.776,33.619 22.883,32.86 Z"
                            />
                            <path
                              className="color-foreground"
                              d="M13,28 C17.432,28 21,22.529 21,18 C21,13.589 17.411,10 13,10 C8.589,10 5,13.589 5,18 C5,22.529 8.568,28 13,28 Z"
                            />
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <span className="nav-link-text ms-1">Components</span>
              </a>
              <div className="collapse " id="componentsExamples">
                <ul className="nav ms-4 ps-3">
                  <li className="nav-item ">
                    <a
                      className="nav-link "
                      href="https://www.creative-tim.com/learning-lab/bootstrap/alerts/soft-ui-dashboard"
                      target="_blank"
                    >
                      <span className="sidenav-mini-icon"> A </span>
                      <span className="sidenav-normal"> Alerts </span>
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a
                      className="nav-link "
                      href="https://www.creative-tim.com/learning-lab/bootstrap/badge/soft-ui-dashboard"
                      target="_blank"
                    >
                      <span className="sidenav-mini-icon"> B </span>
                      <span className="sidenav-normal"> Badge </span>
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a
                      className="nav-link "
                      href="https://www.creative-tim.com/learning-lab/bootstrap/buttons/soft-ui-dashboard"
                      target="_blank"
                    >
                      <span className="sidenav-mini-icon"> B </span>
                      <span className="sidenav-normal"> Buttons </span>
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a
                      className="nav-link "
                      href="https://www.creative-tim.com/learning-lab/bootstrap/cards/soft-ui-dashboard"
                      target="_blank"
                    >
                      <span className="sidenav-mini-icon"> C </span>
                      <span className="sidenav-normal"> Card </span>
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a
                      className="nav-link "
                      href="https://www.creative-tim.com/learning-lab/bootstrap/carousel/soft-ui-dashboard"
                      target="_blank"
                    >
                      <span className="sidenav-mini-icon"> C </span>
                      <span className="sidenav-normal"> Carousel </span>
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a
                      className="nav-link "
                      href="https://www.creative-tim.com/learning-lab/bootstrap/collapse/soft-ui-dashboard"
                      target="_blank"
                    >
                      <span className="sidenav-mini-icon"> C </span>
                      <span className="sidenav-normal"> Collapse </span>
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a
                      className="nav-link "
                      href="https://www.creative-tim.com/learning-lab/bootstrap/dropdowns/soft-ui-dashboard"
                      target="_blank"
                    >
                      <span className="sidenav-mini-icon"> D </span>
                      <span className="sidenav-normal"> Dropdowns </span>
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a
                      className="nav-link "
                      href="https://www.creative-tim.com/learning-lab/bootstrap/forms/soft-ui-dashboard"
                      target="_blank"
                    >
                      <span className="sidenav-mini-icon"> F </span>
                      <span className="sidenav-normal"> Forms </span>
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a
                      className="nav-link "
                      href="https://www.creative-tim.com/learning-lab/bootstrap/modal/soft-ui-dashboard"
                      target="_blank"
                    >
                      <span className="sidenav-mini-icon"> M </span>
                      <span className="sidenav-normal"> Modal </span>
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a
                      className="nav-link "
                      href="https://www.creative-tim.com/learning-lab/bootstrap/navs/soft-ui-dashboard"
                      target="_blank"
                    >
                      <span className="sidenav-mini-icon"> N </span>
                      <span className="sidenav-normal"> Navs </span>
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a
                      className="nav-link "
                      href="https://www.creative-tim.com/learning-lab/bootstrap/navbar/soft-ui-dashboard"
                      target="_blank"
                    >
                      <span className="sidenav-mini-icon"> N </span>
                      <span className="sidenav-normal"> Navbar </span>
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a
                      className="nav-link "
                      href="https://www.creative-tim.com/learning-lab/bootstrap/pagination/soft-ui-dashboard"
                      target="_blank"
                    >
                      <span className="sidenav-mini-icon"> P </span>
                      <span className="sidenav-normal"> Pagination </span>
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a
                      className="nav-link "
                      href="https://www.creative-tim.com/learning-lab/bootstrap/popovers/soft-ui-dashboard"
                      target="_blank"
                    >
                      <span className="sidenav-mini-icon"> P </span>
                      <span className="sidenav-normal"> Popovers </span>
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a
                      className="nav-link "
                      href="https://www.creative-tim.com/learning-lab/bootstrap/progress/soft-ui-dashboard"
                      target="_blank"
                    >
                      <span className="sidenav-mini-icon"> P </span>
                      <span className="sidenav-normal"> Progress </span>
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a
                      className="nav-link "
                      href="https://www.creative-tim.com/learning-lab/bootstrap/spinners/soft-ui-dashboard"
                      target="_blank"
                    >
                      <span className="sidenav-mini-icon"> S </span>
                      <span className="sidenav-normal"> Spinners </span>
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a
                      className="nav-link "
                      href="https://www.creative-tim.com/learning-lab/bootstrap/tables/soft-ui-dashboard"
                      target="_blank"
                    >
                      <span className="sidenav-mini-icon"> T </span>
                      <span className="sidenav-normal"> Tables </span>
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a
                      className="nav-link "
                      href="https://www.creative-tim.com/learning-lab/bootstrap/tooltips/soft-ui-dashboard"
                      target="_blank"
                    >
                      <span className="sidenav-mini-icon"> T </span>
                      <span className="sidenav-normal"> Tooltips </span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://github.com/creativetimofficial/ct-soft-ui-dashboard-pro/blob/main/CHANGELOG.md"
                target="_blank"
              >
                <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center  me-2 d-flex align-items-center justify-content-center">
                  <svg
                    width="12px"
                    height="12px"
                    viewBox="0 0 43 36"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <title>credit-card</title>
                    <g
                      stroke="none"
                      strokeWidth={1}
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g
                        transform="translate(-2169.000000, -745.000000)"
                        fill="#FFFFFF"
                        fillRule="nonzero"
                      >
                        <g transform="translate(1716.000000, 291.000000)">
                          <g transform="translate(453.000000, 454.000000)">
                            <path
                              className="color-background"
                              d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z"
                              opacity="0.593633743"
                            />
                            <path
                              className="color-background"
                              d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"
                            />
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <span className="nav-link-text ms-1">Changelog</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="sidenav-footer mx-3 mt-3 pt-3">
          <div
            className="card card-background shadow-none card-background-mask-secondary"
            id="sidenavCard"
          >
            <div
              className="full-background"
              style={{
                backgroundImage:
                  'url("./assets/img/curved-images/white-curved.jpeg")',
              }}
            />
            <div className="card-body text-start p-3 w-100">
              <div className="icon icon-shape icon-sm bg-white shadow text-center mb-3 d-flex align-items-center justify-content-center border-radius-md">
                <i
                  className="ni ni-diamond text-dark text-gradient text-lg top-0"
                  aria-hidden="true"
                  id="sidenavCardIcon"
                />
              </div>
              <div className="docs-info">
                <h6 className="text-white up mb-0">Need help?</h6>
                <p className="text-xs font-weight-bold">
                  Please check our docs
                </p>
                <a
                  href="https://www.creative-tim.com/learning-lab/bootstrap/overview/soft-ui-dashboard"
                  target="_blank"
                  className="btn btn-white btn-sm w-100 mb-0"
                >
                  Documentation
                </a>
              </div>
            </div>
          </div>
        </div>
      </aside>
      <main className="main-content border-radius-lg ">
        {/* Navbar */}
        <nav
          className="navbar navbar-main navbar-expand-lg position-sticky mt-4 top-1 px-0 mx-4 shadow-none border-radius-xl z-index-sticky"
          id="navbarBlur"
          data-scroll="true"
        >
          <div className="container-fluid py-1 px-3">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                <li className="breadcrumb-item text-sm">
                  <a className="opacity-3 text-dark" href="javascript:;">
                    <svg
                      width="12px"
                      height="12px"
                      className="mb-1"
                      viewBox="0 0 45 40"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <title>shop </title>
                      <g
                        stroke="none"
                        strokeWidth={1}
                        fill="none"
                        fillRule="evenodd"
                      >
                        <g
                          transform="translate(-1716.000000, -439.000000)"
                          fill="#252f40"
                          fillRule="nonzero"
                        >
                          <g transform="translate(1716.000000, 291.000000)">
                            <g transform="translate(0.000000, 148.000000)">
                              <path d="M46.7199583,10.7414583 L40.8449583,0.949791667 C40.4909749,0.360605034 39.8540131,0 39.1666667,0 L7.83333333,0 C7.1459869,0 6.50902508,0.360605034 6.15504167,0.949791667 L0.280041667,10.7414583 C0.0969176761,11.0460037 -1.23209662e-05,11.3946378 -1.23209662e-05,11.75 C-0.00758042603,16.0663731 3.48367543,19.5725301 7.80004167,19.5833333 L7.81570833,19.5833333 C9.75003686,19.5882688 11.6168794,18.8726691 13.0522917,17.5760417 C16.0171492,20.2556967 20.5292675,20.2556967 23.494125,17.5760417 C26.4604562,20.2616016 30.9794188,20.2616016 33.94575,17.5760417 C36.2421905,19.6477597 39.5441143,20.1708521 42.3684437,18.9103691 C45.1927731,17.649886 47.0084685,14.8428276 47.0000295,11.75 C47.0000295,11.3946378 46.9030823,11.0460037 46.7199583,10.7414583 Z" />
                              <path d="M39.198,22.4912623 C37.3776246,22.4928106 35.5817531,22.0149171 33.951625,21.0951667 L33.92225,21.1107282 C31.1430221,22.6838032 27.9255001,22.9318916 24.9844167,21.7998837 C24.4750389,21.605469 23.9777983,21.3722567 23.4960833,21.1018359 L23.4745417,21.1129513 C20.6961809,22.6871153 17.4786145,22.9344611 14.5386667,21.7998837 C14.029926,21.6054643 13.533337,21.3722507 13.0522917,21.1018359 C11.4250962,22.0190609 9.63246555,22.4947009 7.81570833,22.4912623 C7.16510551,22.4842162 6.51607673,22.4173045 5.875,22.2911849 L5.875,44.7220845 C5.875,45.9498589 6.7517757,46.9451667 7.83333333,46.9451667 L19.5833333,46.9451667 L19.5833333,33.6066734 L27.4166667,33.6066734 L27.4166667,46.9451667 L39.1666667,46.9451667 C40.2482243,46.9451667 41.125,45.9498589 41.125,44.7220845 L41.125,22.2822926 C40.4887822,22.4116582 39.8442868,22.4815492 39.198,22.4912623 Z" />
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </a>
                </li>
                <li className="breadcrumb-item text-sm">
                  <a className="opacity-5 text-dark" href="javascript:;">
                    Pages
                  </a>
                </li>
                <li
                  className="breadcrumb-item text-sm text-dark active"
                  aria-current="page"
                >
                  index
                </li>
              </ol>
              <h6 className="font-weight-bolder mb-0">index</h6>
            </nav>
            <div className="sidenav-toggler sidenav-toggler-inner d-xl-block d-none ">
              <a href="javascript:;" className="nav-link text-body p-0">
                <div className="sidenav-toggler-inner">
                  <i className="sidenav-toggler-line" />
                  <i className="sidenav-toggler-line" />
                  <i className="sidenav-toggler-line" />
                </div>
              </a>
            </div>
            <div
              className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4"
              id="navbar"
            >
              <div className="ms-md-auto pe-md-3 d-flex align-items-center">
                <div className="input-group">
                  <span className="input-group-text text-body">
                    <i className="fas fa-search" aria-hidden="true" />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Type here..."
                  />
                </div>
              </div>
              <ul className="navbar-nav  justify-content-end">
                <li className="nav-item d-flex align-items-center">
                  <a
                    href="./pages/authentication/signin/illustration.html"
                    className="nav-link text-body font-weight-bold px-0"
                    target="_blank"
                  >
                    <i className="fa fa-user me-sm-1" />
                    <span className="d-sm-inline d-none">Sign In</span>
                  </a>
                </li>
                <li className="nav-item d-xl-none ps-3 d-flex align-items-center">
                  <a
                    href="javascript:;"
                    className="nav-link text-body p-0"
                    id="iconNavbarSidenav"
                  >
                    <div className="sidenav-toggler-inner">
                      <i className="sidenav-toggler-line" />
                      <i className="sidenav-toggler-line" />
                      <i className="sidenav-toggler-line" />
                    </div>
                  </a>
                </li>
                <li className="nav-item px-3 d-flex align-items-center">
                  <a href="javascript:;" className="nav-link text-body p-0">
                    <i className="fa fa-cog fixed-plugin-button-nav cursor-pointer" />
                  </a>
                </li>
                <li className="nav-item dropdown pe-2 d-flex align-items-center">
                  <a
                    href="javascript:;"
                    className="nav-link text-body p-0"
                    id="dropdownMenuButton"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fa fa-bell cursor-pointer" />
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-end px-2 py-3 me-sm-n4"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <li className="mb-2">
                      <a
                        className="dropdown-item border-radius-md"
                        href="javascript:;"
                      >
                        <div className="d-flex py-1">
                          <div className="my-auto">
                            <img
                              src="./assets/img/team-2.jpg"
                              className="avatar avatar-sm  me-3 "
                              alt="user image"
                            />
                          </div>
                          <div className="d-flex flex-column justify-content-center">
                            <h6 className="text-sm font-weight-normal mb-1">
                              <span className="font-weight-bold">
                                New message
                              </span>{' '}
                              from Laur
                            </h6>
                            <p className="text-xs text-secondary mb-0">
                              <i className="fa fa-clock me-1" />
                              13 minutes ago
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        className="dropdown-item border-radius-md"
                        href="javascript:;"
                      >
                        <div className="d-flex py-1">
                          <div className="my-auto">
                            <img
                              src="./assets/img/small-logos/logo-spotify.svg"
                              className="avatar avatar-sm bg-gradient-dark  me-3 "
                              alt="logo spotify"
                            />
                          </div>
                          <div className="d-flex flex-column justify-content-center">
                            <h6 className="text-sm font-weight-normal mb-1">
                              <span className="font-weight-bold">
                                New album
                              </span>{' '}
                              by Travis Scott
                            </h6>
                            <p className="text-xs text-secondary mb-0">
                              <i className="fa fa-clock me-1" />1 day
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item border-radius-md"
                        href="javascript:;"
                      >
                        <div className="d-flex py-1">
                          <div className="avatar avatar-sm bg-gradient-secondary  me-3  my-auto">
                            <svg
                              width="12px"
                              height="12px"
                              viewBox="0 0 43 36"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                              <title>credit-card</title>
                              <g
                                stroke="none"
                                strokeWidth={1}
                                fill="none"
                                fillRule="evenodd"
                              >
                                <g
                                  transform="translate(-2169.000000, -745.000000)"
                                  fill="#FFFFFF"
                                  fillRule="nonzero"
                                >
                                  <g transform="translate(1716.000000, 291.000000)">
                                    <g transform="translate(453.000000, 454.000000)">
                                      <path
                                        className="color-background"
                                        d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z"
                                        opacity="0.593633743"
                                      />
                                      <path
                                        className="color-background"
                                        d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"
                                      />
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </svg>
                          </div>
                          <div className="d-flex flex-column justify-content-center">
                            <h6 className="text-sm font-weight-normal mb-1">
                              Payment successfully completed
                            </h6>
                            <p className="text-xs text-secondary mb-0">
                              <i className="fa fa-clock me-1" />2 days
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* End Navbar */}
        <div className="container-fluid py-4">
          <h6>
            If you are not redirected automatically, follow{' '}
            <a href="https://demos.creative-tim.com/soft-ui-dashboard-pro/pages/dashboards/default.html">
              this link
            </a>
            .
          </h6>
          <div className="row">
            <div className="col-lg-7 position-relative z-index-2">
              <div className="card card-plain mb-4">
                <div className="card-body p-3">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="d-flex flex-column h-100">
                        <h2 className="font-weight-bolder mb-0">
                          General Statistics
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-5 col-sm-5">
                  <div className="card  mb-4">
                    <div className="card-body p-3">
                      <div className="row">
                        <div className="col-8">
                          <div className="numbers">
                            <p className="text-sm mb-0 text-capitalize font-weight-bold">
                              Today's Money
                            </p>
                            <h5 className="font-weight-bolder mb-0">
                              $53,000
                              <span className="text-success text-sm font-weight-bolder">
                                +55%
                              </span>
                            </h5>
                          </div>
                        </div>
                        <div className="col-4 text-end">
                          <div className="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                            <i
                              className="ni ni-money-coins text-lg opacity-10"
                              aria-hidden="true"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card ">
                    <div className="card-body p-3">
                      <div className="row">
                        <div className="col-8">
                          <div className="numbers">
                            <p className="text-sm mb-0 text-capitalize font-weight-bold">
                              Today's Users
                            </p>
                            <h5 className="font-weight-bolder mb-0">
                              2,300
                              <span className="text-success text-sm font-weight-bolder">
                                +3%
                              </span>
                            </h5>
                          </div>
                        </div>
                        <div className="col-4 text-end">
                          <div className="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                            <i
                              className="ni ni-world text-lg opacity-10"
                              aria-hidden="true"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-sm-5 mt-sm-0 mt-4">
                  <div className="card  mb-4">
                    <div className="card-body p-3">
                      <div className="row">
                        <div className="col-8">
                          <div className="numbers">
                            <p className="text-sm mb-0 text-capitalize font-weight-bold">
                              New Clients
                            </p>
                            <h5 className="font-weight-bolder mb-0">
                              +3,462
                              <span className="text-danger text-sm font-weight-bolder">
                                -2%
                              </span>
                            </h5>
                          </div>
                        </div>
                        <div className="col-4 text-end">
                          <div className="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                            <i
                              className="ni ni-paper-diploma text-lg opacity-10"
                              aria-hidden="true"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card ">
                    <div className="card-body p-3">
                      <div className="row">
                        <div className="col-8">
                          <div className="numbers">
                            <p className="text-sm mb-0 text-capitalize font-weight-bold">
                              Sales
                            </p>
                            <h5 className="font-weight-bolder mb-0">
                              $103,430
                              <span className="text-success text-sm font-weight-bolder">
                                +5%
                              </span>
                            </h5>
                          </div>
                        </div>
                        <div className="col-4 text-end">
                          <div className="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                            <i
                              className="ni ni-cart text-lg opacity-10"
                              aria-hidden="true"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-10">
                  <div className="card ">
                    <div className="card-header pb-0 p-3">
                      <div className="d-flex justify-content-between">
                        <h6 className="mb-2">Sales by Country</h6>
                      </div>
                    </div>
                    <div className="table-responsive">
                      <table className="table align-items-center ">
                        <tbody>
                          <tr>
                            <td className="w-30">
                              <div className="d-flex px-2 py-1 align-items-center">
                                <div>
                                  <img
                                    src="./assets/img/icons/flags/US.png"
                                    alt="Country flag"
                                  />
                                </div>
                                <div className="ms-4">
                                  <p className="text-xs font-weight-bold mb-0">
                                    Country:
                                  </p>
                                  <h6 className="text-sm mb-0">
                                    United States
                                  </h6>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="text-center">
                                <p className="text-xs font-weight-bold mb-0">
                                  Sales:
                                </p>
                                <h6 className="text-sm mb-0">2500</h6>
                              </div>
                            </td>
                            <td>
                              <div className="text-center">
                                <p className="text-xs font-weight-bold mb-0">
                                  Value:
                                </p>
                                <h6 className="text-sm mb-0">$230,900</h6>
                              </div>
                            </td>
                            <td className="align-middle text-sm">
                              <div className="col text-center">
                                <p className="text-xs font-weight-bold mb-0">
                                  Bounce:
                                </p>
                                <h6 className="text-sm mb-0">29.9%</h6>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="w-30">
                              <div className="d-flex px-2 py-1 align-items-center">
                                <div>
                                  <img
                                    src="./assets/img/icons/flags/DE.png"
                                    alt="Country flag"
                                  />
                                </div>
                                <div className="ms-4">
                                  <p className="text-xs font-weight-bold mb-0">
                                    Country:
                                  </p>
                                  <h6 className="text-sm mb-0">Germany</h6>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="text-center">
                                <p className="text-xs font-weight-bold mb-0">
                                  Sales:
                                </p>
                                <h6 className="text-sm mb-0">3.900</h6>
                              </div>
                            </td>
                            <td>
                              <div className="text-center">
                                <p className="text-xs font-weight-bold mb-0">
                                  Value:
                                </p>
                                <h6 className="text-sm mb-0">$440,000</h6>
                              </div>
                            </td>
                            <td className="align-middle text-sm">
                              <div className="col text-center">
                                <p className="text-xs font-weight-bold mb-0">
                                  Bounce:
                                </p>
                                <h6 className="text-sm mb-0">40.22%</h6>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="w-30">
                              <div className="d-flex px-2 py-1 align-items-center">
                                <div>
                                  <img
                                    src="./assets/img/icons/flags/GB.png"
                                    alt="Country flag"
                                  />
                                </div>
                                <div className="ms-4">
                                  <p className="text-xs font-weight-bold mb-0">
                                    Country:
                                  </p>
                                  <h6 className="text-sm mb-0">
                                    Great Britain
                                  </h6>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="text-center">
                                <p className="text-xs font-weight-bold mb-0">
                                  Sales:
                                </p>
                                <h6 className="text-sm mb-0">1.400</h6>
                              </div>
                            </td>
                            <td>
                              <div className="text-center">
                                <p className="text-xs font-weight-bold mb-0">
                                  Value:
                                </p>
                                <h6 className="text-sm mb-0">$190,700</h6>
                              </div>
                            </td>
                            <td className="align-middle text-sm">
                              <div className="col text-center">
                                <p className="text-xs font-weight-bold mb-0">
                                  Bounce:
                                </p>
                                <h6 className="text-sm mb-0">23.44%</h6>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="w-30">
                              <div className="d-flex px-2 py-1 align-items-center">
                                <div>
                                  <img
                                    src="./assets/img/icons/flags/BR.png"
                                    alt="Country flag"
                                  />
                                </div>
                                <div className="ms-4">
                                  <p className="text-xs font-weight-bold mb-0">
                                    Country:
                                  </p>
                                  <h6 className="text-sm mb-0">Brasil</h6>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="text-center">
                                <p className="text-xs font-weight-bold mb-0">
                                  Sales:
                                </p>
                                <h6 className="text-sm mb-0">562</h6>
                              </div>
                            </td>
                            <td>
                              <div className="text-center">
                                <p className="text-xs font-weight-bold mb-0">
                                  Value:
                                </p>
                                <h6 className="text-sm mb-0">$143,960</h6>
                              </div>
                            </td>
                            <td className="align-middle text-sm">
                              <div className="col text-center">
                                <p className="text-xs font-weight-bold mb-0">
                                  Bounce:
                                </p>
                                <h6 className="text-sm mb-0">32.14%</h6>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-5 mb-lg-0 mb-4">
              <div className="card z-index-2">
                <div className="card-body p-3">
                  <div className="bg-gradient-dark border-radius-lg py-3 pe-1 mb-3">
                    <div className="chart">
                      <canvas
                        id="chart-bars"
                        className="chart-canvas"
                        height={170}
                      />
                    </div>
                  </div>
                  <h6 className="ms-2 mt-4 mb-0"> Active Users </h6>
                  <p className="text-sm ms-2">
                    {' '}
                    (<span className="font-weight-bolder">+23%</span>) than last
                    week{' '}
                  </p>
                  <div className="container border-radius-lg">
                    <div className="row">
                      <div className="col-3 py-3 ps-0">
                        <div className="d-flex mb-2">
                          <div className="icon icon-shape icon-xxs shadow border-radius-sm bg-gradient-primary text-center me-2 d-flex align-items-center justify-content-center">
                            <svg
                              width="10px"
                              height="10px"
                              viewBox="0 0 40 44"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                              <title>document</title>
                              <g
                                stroke="none"
                                strokeWidth={1}
                                fill="none"
                                fillRule="evenodd"
                              >
                                <g
                                  transform="translate(-1870.000000, -591.000000)"
                                  fill="#FFFFFF"
                                  fillRule="nonzero"
                                >
                                  <g transform="translate(1716.000000, 291.000000)">
                                    <g transform="translate(154.000000, 300.000000)">
                                      <path
                                        className="color-background"
                                        d="M40,40 L36.3636364,40 L36.3636364,3.63636364 L5.45454545,3.63636364 L5.45454545,0 L38.1818182,0 C39.1854545,0 40,0.814545455 40,1.81818182 L40,40 Z"
                                        opacity="0.603585379"
                                      />
                                      <path
                                        className="color-background"
                                        d="M30.9090909,7.27272727 L1.81818182,7.27272727 C0.814545455,7.27272727 0,8.08727273 0,9.09090909 L0,41.8181818 C0,42.8218182 0.814545455,43.6363636 1.81818182,43.6363636 L30.9090909,43.6363636 C31.9127273,43.6363636 32.7272727,42.8218182 32.7272727,41.8181818 L32.7272727,9.09090909 C32.7272727,8.08727273 31.9127273,7.27272727 30.9090909,7.27272727 Z M18.1818182,34.5454545 L7.27272727,34.5454545 L7.27272727,30.9090909 L18.1818182,30.9090909 L18.1818182,34.5454545 Z M25.4545455,27.2727273 L7.27272727,27.2727273 L7.27272727,23.6363636 L25.4545455,23.6363636 L25.4545455,27.2727273 Z M25.4545455,20 L7.27272727,20 L7.27272727,16.3636364 L25.4545455,16.3636364 L25.4545455,20 Z"
                                      />
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </svg>
                          </div>
                          <p className="text-xs mt-1 mb-0 font-weight-bold">
                            Users
                          </p>
                        </div>
                        <h4 className="font-weight-bolder">36K</h4>
                        <div className="progress w-75">
                          <div
                            className="progress-bar bg-dark w-60"
                            role="progressbar"
                            aria-valuenow={60}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                      <div className="col-3 py-3 ps-0">
                        <div className="d-flex mb-2">
                          <div className="icon icon-shape icon-xxs shadow border-radius-sm bg-gradient-info text-center me-2 d-flex align-items-center justify-content-center">
                            <svg
                              width="10px"
                              height="10px"
                              viewBox="0 0 40 40"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                              <title>spaceship</title>
                              <g
                                stroke="none"
                                strokeWidth={1}
                                fill="none"
                                fillRule="evenodd"
                              >
                                <g
                                  transform="translate(-1720.000000, -592.000000)"
                                  fill="#FFFFFF"
                                  fillRule="nonzero"
                                >
                                  <g transform="translate(1716.000000, 291.000000)">
                                    <g transform="translate(4.000000, 301.000000)">
                                      <path
                                        className="color-background"
                                        d="M39.3,0.706666667 C38.9660984,0.370464027 38.5048767,0.192278529 38.0316667,0.216666667 C14.6516667,1.43666667 6.015,22.2633333 5.93166667,22.4733333 C5.68236407,23.0926189 5.82664679,23.8009159 6.29833333,24.2733333 L15.7266667,33.7016667 C16.2013871,34.1756798 16.9140329,34.3188658 17.535,34.065 C17.7433333,33.98 38.4583333,25.2466667 39.7816667,1.97666667 C39.8087196,1.50414529 39.6335979,1.04240574 39.3,0.706666667 Z M25.69,19.0233333 C24.7367525,19.9768687 23.3029475,20.2622391 22.0572426,19.7463614 C20.8115377,19.2304837 19.9992882,18.0149658 19.9992882,16.6666667 C19.9992882,15.3183676 20.8115377,14.1028496 22.0572426,13.5869719 C23.3029475,13.0710943 24.7367525,13.3564646 25.69,14.31 C26.9912731,15.6116662 26.9912731,17.7216672 25.69,19.0233333 L25.69,19.0233333 Z"
                                      />
                                      <path
                                        className="color-background"
                                        d="M1.855,31.4066667 C3.05106558,30.2024182 4.79973884,29.7296005 6.43969145,30.1670277 C8.07964407,30.6044549 9.36054508,31.8853559 9.7979723,33.5253085 C10.2353995,35.1652612 9.76258177,36.9139344 8.55833333,38.11 C6.70666667,39.9616667 0,40 0,40 C0,40 0,33.2566667 1.855,31.4066667 Z"
                                      />
                                      <path
                                        className="color-background"
                                        d="M17.2616667,3.90166667 C12.4943643,3.07192755 7.62174065,4.61673894 4.20333333,8.04166667 C3.31200265,8.94126033 2.53706177,9.94913142 1.89666667,11.0416667 C1.5109569,11.6966059 1.61721591,12.5295394 2.155,13.0666667 L5.47,16.3833333 C8.55036617,11.4946947 12.5559074,7.25476565 17.2616667,3.90166667 L17.2616667,3.90166667 Z"
                                        opacity="0.598539807"
                                      />
                                      <path
                                        className="color-background"
                                        d="M36.0983333,22.7383333 C36.9280725,27.5056357 35.3832611,32.3782594 31.9583333,35.7966667 C31.0587397,36.6879974 30.0508686,37.4629382 28.9583333,38.1033333 C28.3033941,38.4890431 27.4704606,38.3827841 26.9333333,37.845 L23.6166667,34.53 C28.5053053,31.4496338 32.7452344,27.4440926 36.0983333,22.7383333 L36.0983333,22.7383333 Z"
                                        opacity="0.598539807"
                                      />
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </svg>
                          </div>
                          <p className="text-xs mt-1 mb-0 font-weight-bold">
                            Clicks
                          </p>
                        </div>
                        <h4 className="font-weight-bolder">2m</h4>
                        <div className="progress w-75">
                          <div
                            className="progress-bar bg-dark w-90"
                            role="progressbar"
                            aria-valuenow={90}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                      <div className="col-3 py-3 ps-0">
                        <div className="d-flex mb-2">
                          <div className="icon icon-shape icon-xxs shadow border-radius-sm bg-gradient-warning text-center me-2 d-flex align-items-center justify-content-center">
                            <svg
                              width="10px"
                              height="10px"
                              viewBox="0 0 43 36"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                              <title>credit-card</title>
                              <g
                                stroke="none"
                                strokeWidth={1}
                                fill="none"
                                fillRule="evenodd"
                              >
                                <g
                                  transform="translate(-2169.000000, -745.000000)"
                                  fill="#FFFFFF"
                                  fillRule="nonzero"
                                >
                                  <g transform="translate(1716.000000, 291.000000)">
                                    <g transform="translate(453.000000, 454.000000)">
                                      <path
                                        className="color-background"
                                        d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z"
                                        opacity="0.593633743"
                                      />
                                      <path
                                        className="color-background"
                                        d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"
                                      />
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </svg>
                          </div>
                          <p className="text-xs mt-1 mb-0 font-weight-bold">
                            Sales
                          </p>
                        </div>
                        <h4 className="font-weight-bolder">435$</h4>
                        <div className="progress w-75">
                          <div
                            className="progress-bar bg-dark w-30"
                            role="progressbar"
                            aria-valuenow={30}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                      <div className="col-3 py-3 ps-0">
                        <div className="d-flex mb-2">
                          <div className="icon icon-shape icon-xxs shadow border-radius-sm bg-gradient-danger text-center me-2 d-flex align-items-center justify-content-center">
                            <svg
                              width="10px"
                              height="10px"
                              viewBox="0 0 40 40"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                              <title>settings</title>
                              <g
                                stroke="none"
                                strokeWidth={1}
                                fill="none"
                                fillRule="evenodd"
                              >
                                <g
                                  transform="translate(-2020.000000, -442.000000)"
                                  fill="#FFFFFF"
                                  fillRule="nonzero"
                                >
                                  <g transform="translate(1716.000000, 291.000000)">
                                    <g transform="translate(304.000000, 151.000000)">
                                      <polygon
                                        className="color-background"
                                        opacity="0.596981957"
                                        points="18.0883333 15.7316667 11.1783333 8.82166667 13.3333333 6.66666667 6.66666667 0 0 6.66666667 6.66666667 13.3333333 8.82166667 11.1783333 15.315 17.6716667"
                                      />
                                      <path
                                        className="color-background"
                                        d="M31.5666667,23.2333333 C31.0516667,23.2933333 30.53,23.3333333 30,23.3333333 C29.4916667,23.3333333 28.9866667,23.3033333 28.48,23.245 L22.4116667,30.7433333 L29.9416667,38.2733333 C32.2433333,40.575 35.9733333,40.575 38.275,38.2733333 L38.275,38.2733333 C40.5766667,35.9716667 40.5766667,32.2416667 38.275,29.94 L31.5666667,23.2333333 Z"
                                        opacity="0.596981957"
                                      />
                                      <path
                                        className="color-background"
                                        d="M33.785,11.285 L28.715,6.215 L34.0616667,0.868333333 C32.82,0.315 31.4483333,0 30,0 C24.4766667,0 20,4.47666667 20,10 C20,10.99 20.1483333,11.9433333 20.4166667,12.8466667 L2.435,27.3966667 C0.95,28.7083333 0.0633333333,30.595 0.00333333333,32.5733333 C-0.0583333333,34.5533333 0.71,36.4916667 2.11,37.89 C3.47,39.2516667 5.27833333,40 7.20166667,40 C9.26666667,40 11.2366667,39.1133333 12.6033333,37.565 L27.1533333,19.5833333 C28.0566667,19.8516667 29.01,20 30,20 C35.5233333,20 40,15.5233333 40,10 C40,8.55166667 39.685,7.18 39.1316667,5.93666667 L33.785,11.285 Z"
                                      />
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </svg>
                          </div>
                          <p className="text-xs mt-1 mb-0 font-weight-bold">
                            Items
                          </p>
                        </div>
                        <h4 className="font-weight-bolder">43</h4>
                        <div className="progress w-75">
                          <div
                            className="progress-bar bg-dark w-50"
                            role="progressbar"
                            aria-valuenow={50}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="card z-index-2">
                <div className="card-header pb-0">
                  <h6>Sales overview</h6>
                  <p className="text-sm">
                    <i className="fa fa-arrow-up text-success" />
                    <span className="font-weight-bold">4% more</span> in 2021
                  </p>
                </div>
                <div className="card-body p-3">
                  <div className="chart">
                    <canvas
                      id="chart-line"
                      className="chart-canvas"
                      height={300}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div
                id="globe"
                className="position-absolute end-0 top-10 mt-sm-3 mt-7 me-lg-7"
              >
                <canvas
                  width={700}
                  height={600}
                  className="w-lg-100 h-lg-100 w-75 h-75 me-lg-0 me-n10 mt-lg-5"
                />
              </div>
            </div>
          </div>
          <footer className="footer pt-3  ">
            <div className="container-fluid">
              <div className="row align-items-center justify-content-lg-between">
                <div className="col-lg-6 mb-lg-0 mb-4">
                  <div className="copyright text-center text-sm text-muted text-lg-start">
                    © , made with <i className="fa fa-heart" /> by
                    <a
                      href="https://www.creative-tim.com"
                      className="font-weight-bold"
                      target="_blank"
                    >
                      Creative Tim
                    </a>
                    for a better web.
                  </div>
                </div>
                <div className="col-lg-6">
                  <ul className="nav nav-footer justify-content-center justify-content-lg-end">
                    <li className="nav-item">
                      <a
                        href="https://www.creative-tim.com"
                        className="nav-link text-muted"
                        target="_blank"
                      >
                        Creative Tim
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="https://www.creative-tim.com/presentation"
                        className="nav-link text-muted"
                        target="_blank"
                      >
                        About Us
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="https://www.creative-tim.com/blog"
                        className="nav-link text-muted"
                        target="_blank"
                      >
                        Blog
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="https://www.creative-tim.com/license"
                        className="nav-link pe-0 text-muted"
                        target="_blank"
                      >
                        License
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </main>
      <div className="fixed-plugin">
        <a className="fixed-plugin-button text-dark position-fixed px-3 py-2">
          <i className="fa fa-cog py-2"> </i>
        </a>
        <div className="card shadow-lg blur">
          <div className="card-header pb-0 pt-3  bg-transparent ">
            <div className="float-start">
              <h5 className="mt-3 mb-0">Soft UI Configurator</h5>
              <p>See our dashboard options.</p>
            </div>
            <div className="float-end mt-4">
              <button className="btn btn-link text-dark p-0 fixed-plugin-close-button">
                <i className="fa fa-close" />
              </button>
            </div>
            {/* End Toggle Button */}
          </div>
          <hr className="horizontal dark my-1" />
          <div className="card-body pt-sm-3 pt-0">
            {/* Sidebar Backgrounds */}
            <div>
              <h6 className="mb-0">Sidebar Colors</h6>
            </div>
            <a
              href="javascript:void(0)"
              className="switch-trigger background-color"
            >
              <div className="badge-colors my-2 text-start">
                <span
                  className="badge filter bg-gradient-primary active"
                  data-color="primary"
                  onclick="sidebarColor(this)"
                />
                <span
                  className="badge filter bg-gradient-dark"
                  data-color="dark"
                  onclick="sidebarColor(this)"
                />
                <span
                  className="badge filter bg-gradient-info"
                  data-color="info"
                  onclick="sidebarColor(this)"
                />
                <span
                  className="badge filter bg-gradient-success"
                  data-color="success"
                  onclick="sidebarColor(this)"
                />
                <span
                  className="badge filter bg-gradient-warning"
                  data-color="warning"
                  onclick="sidebarColor(this)"
                />
                <span
                  className="badge filter bg-gradient-danger"
                  data-color="danger"
                  onclick="sidebarColor(this)"
                />
              </div>
            </a>
            {/* Sidenav Type */}
            <div className="mt-3">
              <h6 className="mb-0">Sidenav Type</h6>
              <p className="text-sm">
                Choose between 2 different sidenav types.
              </p>
            </div>
            <div className="d-flex">
              <button
                className="btn bg-gradient-primary w-100 px-3 mb-2 active"
                data-class="bg-transparent"
                onclick="sidebarType(this)"
              >
                Transparent
              </button>
              <button
                className="btn bg-gradient-primary w-100 px-3 mb-2 ms-2"
                data-class="bg-white"
                onclick="sidebarType(this)"
              >
                White
              </button>
            </div>
            <p className="text-sm d-xl-none d-block mt-2">
              You can change the sidenav type just on desktop view.
            </p>
            {/* Navbar Fixed */}
            <div className="mt-3">
              <h6 className="mb-0">Navbar Fixed</h6>
            </div>
            <div className="form-check form-switch ps-0">
              <input
                className="form-check-input mt-1 ms-auto"
                type="checkbox"
                id="navbarFixed"
                onclick="navbarFixed(this)"
              />
            </div>
            <hr className="horizontal dark mb-1" />
            <div className="mt-2">
              <h6 className="mb-0">Sidenav Mini</h6>
            </div>
            <div className="form-check form-switch ps-0">
              <input
                className="form-check-input mt-1 ms-auto"
                type="checkbox"
                id="navbarMinimize"
                onclick="navbarMinimize(this)"
              />
            </div>
            <hr className="horizontal dark my-sm-4" />
            <a
              className="btn bg-gradient-info w-100"
              href="https://www.creative-tim.com/product/soft-ui-dashboard-pro"
            >
              Buy now
            </a>
            <a
              className="btn bg-gradient-dark w-100"
              href="https://www.creative-tim.com/product/soft-ui-dashboard"
            >
              Free demo
            </a>
            <a
              className="btn btn-outline-dark w-100"
              href="https://www.creative-tim.com/learning-lab/bootstrap/overview/soft-ui-dashboard"
            >
              View documentation
            </a>
            <div className="w-100 text-center">
              <a
                className="github-button"
                href="https://github.com/creativetimofficial/ct-soft-ui-dashboard-pro"
                data-icon="octicon-star"
                data-size="large"
                data-show-count="true"
                aria-label="Star creativetimofficial/soft-ui-dashboard on GitHub"
              >
                Star
              </a>
              <h6 className="mt-3">Thank you for sharing!</h6>
              <a
                href="https://twitter.com/intent/tweet?text=Check%20Soft%20UI%20Dashboard%20PRO%20made%20by%20%40CreativeTim%20%23webdesign%20%23dashboard%20%23bootstrap5&url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fsoft-ui-dashboard-pro"
                className="btn btn-dark mb-0 me-2"
                target="_blank"
              >
                <i className="fab fa-twitter me-1" aria-hidden="true" /> Tweet
              </a>
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/soft-ui-dashboard-pro"
                className="btn btn-dark mb-0 me-2"
                target="_blank"
              >
                <i className="fab fa-facebook-square me-1" aria-hidden="true" />{' '}
                Share
              </a>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default App;
