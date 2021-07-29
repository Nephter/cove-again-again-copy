import React from 'react';
import { Pages, Applications } from '../../../../assets/Variables/Links.js';

export default function PagesSection() {
  return (
    <div>
      {Pages.map((top) => {
        return (
          <li className="nav-item">
            <a
              data-bs-toggle="collapse"
              href={`#${top.link}Examples`}
              className="nav-link "
              aria-controls={`${top.link}Examples`}
              role="button"
              aria-expanded="false"
            >
              <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center d-flex align-items-center justify-content-center  me-2">
                {top.icon}
              </div>
              <span className="nav-link-text ms-1">{top.label}</span>
            </a>
            <div className="collapse " id={`${top.link}Examples`}>
              <ul className="nav ms-4 ps-3">
                {/* conditionally creates second layer buttons */}

                {top.subLinks.map((e) => {
                  if (e.subLinks < 1) {
                    return (
                      <li className="nav-item ">
                        <a
                          className="nav-link "
                          href={`./${top.link}/${e.link}.html`}
                        >
                          <span className="sidenav-normal"> {e.label} </span>
                        </a>
                      </li>
                    );
                  } else {
                    // creates second layer button with dropdown

                    return (
                      <li className="nav-item ">
                        <a
                          className="nav-link "
                          data-bs-toggle="collapse"
                          aria-expanded="false"
                          href={`#${e.link}Example`}
                        >
                          <span className="sidenav-normal">
                            {' '}
                            {e.label} <b className="caret" />
                          </span>
                        </a>
                        <div className="collapse " id={`${e.link}Example`}>
                          <ul className="nav nav-sm flex-column">
                            {/* creates third layer button  */}

                            {e.subLinks.map((s) => {
                              return (
                                <li className="nav-item">
                                  <a
                                    className="nav-link "
                                    href={`./${top.link}/${e.link}/${s.link}.html`}
                                  >
                                    <span className="sidenav-normal">
                                      {' '}
                                      {s.label}{' '}
                                    </span>
                                  </a>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </li>
                    );
                  }
                })}
              </ul>
            </div>
          </li>
        );
      })}
      {Applications.map((top) => {
        return (
          <li className="nav-item">
            <a
              data-bs-toggle="collapse"
              href={`#${top.link}Examples`}
              className="nav-link "
              aria-controls={`${top.link}Examples`}
              role="button"
              aria-expanded="false"
            >
              <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center d-flex align-items-center justify-content-center  me-2">
                {top.icon}
              </div>
              <span className="nav-link-text ms-1">{top.label}</span>
            </a>
            <div className="collapse " id={`${top.link}Examples`}>
              <ul className="nav ms-4 ps-3">
                {/* conditionally creates second layer buttons */}

                {top.subLinks.map((e) => {
                  if (e.subLinks < 1) {
                    return (
                      <li className="nav-item ">
                        <a
                          className="nav-link "
                          href={`./${top.link}/${e.link}.html`}
                        >
                          <span className="sidenav-normal"> {e.label} </span>
                        </a>
                      </li>
                    );
                  } else {
                    // creates second layer button with dropdown

                    return (
                      <li className="nav-item ">
                        <a
                          className="nav-link "
                          data-bs-toggle="collapse"
                          aria-expanded="false"
                          href={`#${e.link}Example`}
                        >
                          <span className="sidenav-normal">
                            {' '}
                            {e.label} <b className="caret" />
                          </span>
                        </a>
                        <div className="collapse " id={`${e.link}Example`}>
                          <ul className="nav nav-sm flex-column">
                            {/* creates third layer button  */}

                            {e.subLinks.map((s) => {
                              return (
                                <li className="nav-item">
                                  <a
                                    className="nav-link "
                                    href={`./${top.link}/${e.link}/${s.link}.html`}
                                  >
                                    <span className="sidenav-normal">
                                      {' '}
                                      {s.label}{' '}
                                    </span>
                                  </a>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </li>
                    );
                  }
                })}
              </ul>
            </div>
          </li>
        );
      })}
    </div>
  );
}
