
import React from 'react'
import { createRoot } from 'react-dom/client';
const headLogo= '../../frontend/images/heavan-logo.svg'
const HeadList = () => {
  return (
    <>
    <header className="header">
      <div className="navbar-head">

        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className=" d-flex w-100 justify-content-between align-items-center">
              <div className="logo">
                <a className="navbar-brand" href="../index.html">
                  <img
                    src={headLogo}
                    alt="logo"
                    className="w-100-percent"
                  />
                </a>
              </div>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-0 mb-lg-0 d-flex justify-content-end w-100 d-flex">
                  <div className="d-none d-lg-flex">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="pages/earn.html"
                      >
                        <img
                          src="../../frontend/images/icons/earn.svg"
                          alt="home-icon"
                        />
                        Earn
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="pages/withdraw.html">
                        <img
                          src="./frontend/images/icons/cashout.svg"
                          alt="home-icon"
                        />
                        Cashout
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="login.html">
                        <img
                          src="../../frontend/images/icons/leaderboard.svg"
                          alt="home-icon"
                        />
                        Leaderboard
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="login.html">
                        <img
                          src="../../frontend/images/icons/n-rewards.svg"
                          alt="home-icon"
                        />
                        Referrals
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="login.html">
                        <img
                          src="../../frontend/images/icons/Support.svg"
                          alt="home-icon"
                        />
                        Support
                      </a>
                    </li>
                  </div>
                  <li className="nav-item">
                    <a className="nav-link sign-in" href="../../pages/login.html">
                      sign In
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link sign-in sign-up"
                      href="../../pages/register.html"
                    >
                      <span>sign Up</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
   <div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul className="navbar-nav me-auto mb-0 mb-lg-0 d-flex justify-content-end w-100 d-flex">
    <div className="d-none d-lg-flex">
      <li className="nav-item">
        <a
          className="nav-link active"
          aria-current="page"
          href="../../pages/earn.html"
        >
          <img src="../frontend/images/icons/earn.svg" alt="home-icon" />
          Earn
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link"
          href="../../pages/withdraw.html"
        >
          <img src="../frontend/images/icons/cashout.svg" alt="home-icon" />
          Cashout
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link"
          href="../../pages/leaderboard.html"
        >
          <img src="../frontend/images/icons/leaderboard.svg" alt="home-icon" />
          Leaderboard
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link"
          href="https://heavengamers.com/user/referral/commissions"
        >
          <img src="../frontend/images/icons/n-rewards.svg" alt="home-icon" />
          Referrals
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="../../pages/ticket.html">
          <img src="../frontend/images/Support.svg" alt="home-icon" />
          Support
        </a>
      </li>
    </div>
    <ul className="profile-dropdown">
      <li className="nav-item">
        <div className="dropdown navbar-dropdown account-dropdown">
          <button
            className="btn btn-secondary dropdown-toggle mobile-padding"
            type="button"
            data-bs-toggle="dropdown"
          >
            <span>
              <img
                src="../asset/kashtik/assets/images/coin.webp"
                width="14px"
                alt=""
              />
            </span>
            0.00
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            <li>
              <a
                className="dropdown-item"
                href="../../pages/profile.html"
              >
                Profile
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="../../pages/password.html"
              >
                Password
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="../../pages/2FA.html"
              >
                2FA
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="https://heavengamers.com/user/javascriptLvoid(0);"
                onclick="event.preventDefault(); $('form#logout-form').submit()"
              >
                Logout
              </a>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </ul>
</div>

    </>
  );
};


const domNode = document.getElementById('head-list');
const root = createRoot(domNode);
root.render(<HeadList />);
