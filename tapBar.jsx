import {createRoot} from "react-dom/client";
import React from "react";

const TabList = () => {
    return (
       <div>
  <footer className="footer py-5 pb-0 text-left">
  <ul
  className=" me-auto mb-2 mb-lg-0 d-flex justify-content-space-between w-100 footer-ul d-lg-none custom-ul"
  style={{ border: "none!important" }}
>
  <li className="nav-item">
    <a
      className="nav-link"
      href="#"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasExample"
      aria-controls="offcanvasExample"
    >
      {/*                <img class="menu-btn-class" src="./frontend/images/icons/menu-outline.svg" alt="home-icon">*/}
      <svg
        width={16}
        height={14}
        viewBox="0 0 16 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="line-1"
          d="M0.75 0.75H15.25"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          className="line-2"
          d="M0.75 13.25H15.25"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          className="line-3"
          d="M1 7H9"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  </li>
  <li className="nav-item">
    <a
      className="nav-link "
      aria-current="page"
      href="../../pages/withdraw.html"
    >
      {/*                <img src="./frontend/images/icons/n-rewards.svg" alt="home-icon">*/}
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.8002 9.75322V4.03407C22.8002 3.13167 22.0562 2.40002 21.1387 2.40002H2.86173C1.94415 2.40002 1.2002 3.13167 1.2002 4.03407V9.75322C1.2002 10.6556 1.94415 11.3873 2.86173 11.3873H3.27712V6.07662H20.7233V11.3873H21.1387C22.0562 11.3873 22.8002 10.6556 22.8002 9.75322Z"
          fill="currentColor"
        />
        <path
          d="M4.9385 7.71096V18.3322C4.9385 19.3944 4.9383 19.7955 4.9383 21.6003H19.0616C19.0616 19.7955 19.0616 19.3944 19.0616 18.3322V7.71096H4.9385ZM12.8308 12.6131C12.8308 14.1895 11.713 15.4727 10.3385 15.4727C9.21156 15.4727 8.25826 14.6099 7.95087 13.4301H6.60004V11.7961H7.95087C8.25826 10.6163 9.21156 9.75352 10.3385 9.75352V11.3876C9.89612 11.3876 9.50773 11.9603 9.50773 12.6131C9.50773 13.2659 9.89612 13.8386 10.3385 13.8386C10.7809 13.8386 11.1693 13.2659 11.1693 12.6131C11.1693 11.0366 12.2871 9.75352 13.6616 9.75352C14.7885 9.75352 15.7418 10.6163 16.0488 11.7961H17.4V13.4301H16.0488C15.7418 14.6099 14.7885 15.4727 13.6616 15.4727V13.8386C14.104 13.8386 14.4924 13.2659 14.4924 12.6131C14.4924 11.9603 14.104 11.3876 13.6616 11.3876C13.2192 11.3876 12.8308 11.9603 12.8308 12.6131Z"
          fill="currentColor"
        />
      </svg>
      Cashout
    </a>
  </li>
  <li
    className="nav-item highlight"
    style={{
      top: "-22px!important",
      maxHeight: "67px!important",
      maxWidth: "73px!important",
      paddingTop: "0px!important",
      background: "#1e1e2e!important",
      borderRadius: "4px!important",
      border: ".6px solid #141523!important"
    }}
  >
    <a
      className="nav-link active"
      aria-current="page"
      href="../../pages/earn.html"
      style={{ paddingBottom: "0!important" }}
    >
      {/*                <img src="./frontend/images/icons/earn.svg" alt="home-icon">*/}
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_3235_226607)">
          <path
            d="M0.703069 22.359H2.10921C2.49749 22.359 2.81227 22.0442 2.81227 21.6559V13.9221H0.703069C0.314787 13.9221 0 14.2369 0 14.6252V21.6559C0 22.0441 0.314787 22.359 0.703069 22.359Z"
            fill="currentColor"
          />
          <path
            d="M18.3735 1.26685C15.2671 1.26685 12.749 3.785 12.749 6.89139C12.749 9.99769 15.2671 12.5159 18.3735 12.5159C21.4799 12.5159 23.9981 9.99769 23.9981 6.89139C23.9981 3.785 21.4799 1.26685 18.3735 1.26685ZM19.5518 9.42179C19.3995 9.4979 19.2399 9.55785 19.0765 9.60322V9.79751C19.0765 10.1858 18.7617 10.5006 18.3734 10.5006C17.9852 10.5006 17.6704 10.1858 17.6704 9.79751V9.62521C17.3777 9.55152 17.1048 9.42764 16.8736 9.25427C16.5629 9.02132 16.4999 8.58063 16.7329 8.26997C16.9659 7.9594 17.4066 7.89636 17.7172 8.12936C17.9985 8.34028 18.5394 8.35593 18.9229 8.16414C19.0771 8.08703 19.1603 7.99423 19.1603 7.94609C19.1603 7.86196 19.1603 7.84897 19.0667 7.79906C18.8833 7.70114 18.5589 7.64096 18.2452 7.58279C17.8264 7.50508 17.3934 7.42474 17.0181 7.22446C16.4701 6.93199 16.1805 6.45216 16.1805 5.83689C16.1805 5.2209 16.5499 4.68292 17.1939 4.36091C17.3466 4.28456 17.5066 4.22414 17.6704 4.17872V3.98547C17.6704 3.59719 17.9852 3.2824 18.3734 3.2824C18.7617 3.2824 19.0765 3.59719 19.0765 3.98547V4.15763C19.3692 4.23136 19.6421 4.35533 19.8733 4.52871C20.184 4.76171 20.2469 5.20239 20.0139 5.513C19.7809 5.82362 19.3403 5.88662 19.0296 5.65362C18.748 5.44237 18.2066 5.42671 17.8227 5.61856C17.6677 5.69608 17.5866 5.78706 17.5866 5.83684C17.5866 5.92102 17.5866 5.93396 17.6802 5.98392C17.8636 6.08183 18.188 6.14202 18.5017 6.20018C18.9205 6.2779 19.3535 6.35823 19.7288 6.55852C20.2767 6.85099 20.5664 7.33081 20.5664 7.94609C20.5664 8.56146 20.1966 9.09936 19.5518 9.42179Z"
            fill="currentColor"
          />
          <path
            d="M12.6928 22.7339H12.8475C15.2098 22.7057 17.4736 22.0356 19.4704 20.8262L23.3935 18.0843C24.0543 17.6202 24.1809 16.7484 23.745 16.1297C23.2951 15.4829 22.4232 15.3283 21.7905 15.7782L18.022 18.4218C16.8128 19.1248 15.3364 19.2795 14.0005 18.8295L9.66489 17.3952C9.2993 17.2827 9.10239 16.8749 9.22899 16.5094C9.34143 16.1579 9.70703 15.961 10.0726 16.0594C10.0867 16.0594 14.9425 17.6343 14.9425 17.6343C15.7603 17.8794 16.4868 17.4167 16.7143 16.7344C16.9533 15.9891 16.5455 15.2017 15.8144 14.9627L9.20082 12.7972C7.75428 12.2706 5.80495 12.3794 4.21841 13.2666V21.1373L9.73515 22.3871C10.7457 22.6094 11.7374 22.7339 12.6928 22.7339Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="clip0_3235_226607">
            <rect width={24} height={24} fill="white" />
          </clipPath>
        </defs>
      </svg>
      Earn
    </a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="../../pages/leaderboard.html">
      {/*                <img src="./frontend/images/icons/leaderboard.svg" alt="home-icon">*/}
      <img src='../../frontend/images/award-fill.svg' alt="home-icon" />
      Leader
    </a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="../../pages/login.html">
      <svg
        width={22}
        height={22}
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.9485 5.91663V6.68996V7.46329V10.2666C17.9485 13.07 15.7969 15.2933 13.084 15.2933H7.93887H7.19048C6.90984 15.2933 6.72274 15.2933 6.53564 15.39C6.72274 16.84 8.03242 18 9.52919 18H14.955C15.5163 18 16.1711 18.1933 16.6389 18.58L19.9131 20.9966C20.0066 21.0933 20.1937 21.0933 20.3808 21.0933C20.4744 21.0933 20.5679 21.0933 20.755 20.9966C21.0356 20.9 21.1292 20.61 21.1292 20.32V9.20329C21.1292 7.36663 19.726 5.91663 17.9485 5.91663Z"
          fill="currentColor"
        />
        <path
          d="M6.44189 13.2466H6.32035L6.21238 13.3024C6.10218 13.3594 6.00449 13.4013 5.89121 13.45C5.82597 13.478 5.75557 13.5082 5.67463 13.5448C5.47228 13.6363 5.24754 13.7506 5.01843 13.9273L1.50367 16.5078C1.467 16.5248 1.4521 16.5274 1.44597 16.5284L1.44573 16.5285C1.42563 16.5319 1.40042 16.5333 1.29673 16.5333H1.29618H1.29563H1.29507H1.29452H1.29396H1.2934H1.29284H1.29227H1.29171H1.29114H1.29057H1.29H1.28942H1.28885H1.28827H1.28769H1.28711H1.28652H1.28594H1.28535H1.28476H1.28416H1.28357H1.28297H1.28238H1.28178H1.28117H1.28057H1.27996H1.27936H1.27875H1.27814H1.27752H1.27691H1.27629H1.27567H1.27505H1.27443H1.2738H1.27318H1.27255H1.27192H1.27129H1.27066H1.27002H1.26938H1.26874H1.2681H1.26746H1.26682H1.26617H1.26553H1.26488H1.26423H1.26357H1.26292H1.26226H1.26161H1.26095H1.26029H1.25962H1.25896H1.25829H1.25763H1.25696H1.25629H1.25562H1.25494H1.25427H1.25359H1.25291H1.25223H1.25155H1.25087H1.25018H1.2495H1.24881H1.24812H1.24743H1.24674H1.24604H1.24535H1.24465H1.24396H1.24326H1.24256H1.24185H1.24115H1.24045H1.23974H1.23903H1.23832H1.23761H1.2369H1.23619H1.23547H1.23476H1.23404H1.23332H1.2326H1.23188H1.23116H1.23043H1.22971H1.22898H1.22826H1.22753H1.2268H1.22607H1.22533H1.2246H1.22386H1.22313H1.22239H1.22165H1.22091H1.22017H1.21943H1.21869H1.21794H1.2172H1.21645H1.2157H1.21495H1.2142H1.21345H1.2127H1.21195H1.21119H1.21044H1.20968H1.20893H1.20817H1.20741H1.20665H1.20589H1.20512H1.20436H1.2036H1.20283H1.20206H1.2013H1.20053H1.19976H1.19899H1.19822H1.19744H1.19667H1.1959H1.19512H1.19435H1.19357H1.19279H1.19202H1.19124H1.19046H1.18968H1.18889H1.18811H1.18733H1.18654H1.18576H1.18497H1.18419H1.1834H1.18261H1.18182H1.18103H1.18024H1.17945H1.17866H1.17787H1.17708H1.17628H1.17549H1.17469H1.1739H1.1731H1.1723H1.17151H1.17071H1.16991H1.16911H1.16831H1.16751H1.16671H1.1659H1.1651H1.1643H1.16349H1.16269H1.16189H1.16108H1.16027H1.15947H1.15866H1.15785H1.15705H1.15624H1.15543H1.15462H1.15381H1.153H1.15219H1.15138H1.15057H1.14975H1.14894H1.14813H1.14732H1.1465H1.14569H1.14487H1.14406H1.14324H1.14243H1.14161H1.1408H1.13998H1.13916H1.13835H1.13753H1.13671H1.13589H1.13508H1.13426H1.13344H1.13262H1.1318H1.13098H1.13016H1.12934H1.12852H1.1277H1.12688H1.12606H1.12524H1.12442H1.1236H1.12278H1.12196H1.12114H1.12032H1.11949H1.11867H1.11785H1.11703H1.11621H1.11539H1.11456H1.11374H1.11292H1.1121H1.11127H1.11045H1.10963H1.10881H1.10805C1.10459 16.528 1.10111 16.5223 1.09767 16.5164C1.06333 16.4573 1.04834 16.398 1.04834 16.3566V4.07998C1.04834 2.4072 2.33658 1.09998 3.91608 1.09998H13.1774C14.7569 1.09998 16.0451 2.4072 16.0451 4.07998V5.91664V6.68998V7.46331V10.17C16.0451 11.8427 14.7569 13.15 13.1774 13.15H7.93866H7.19027C6.99861 13.15 6.81737 13.1827 6.68868 13.2069C6.53305 13.2361 6.47619 13.2466 6.44189 13.2466Z"
          fill="currentColor"
          stroke="none"
        />
      </svg>
      Chat
    </a>
  </li>
</ul>
  <div className="container pb-3">
    <div className="row justify-content-between">
      <div className="col-12 col-md-5 col-xl-5 mb-3 mb-lg-3 pe-md-5">
        <div className="logo-foot mb-3">
          <a href="https://heavengamers.com/">
            <img
              src="../frontend/images/heavan-logo.svg"
              alt="logo-footer"
              className="max-width-footer w-100-percent"
            />
          </a>
        </div>
        <p className="mb-2">
          {" "}
          Heaven Gamers is a next-generation Cash/Crypto rewards platform, Users
          earn free Crypto/Cash by interacting and completing tasks, There is no
          requirements to earn money on Heaven Gamers, just complete tasks and
          get paid instantly.
        </p>
        <hr className="text-white mb-4" />
        <ul className="social-icon d-flex">
          <li>
            <a
              href="https://www.linkedin.com/company/heaven-gamers/?viewAsMember=true"
              target="_blank"
            >
              <img src="../frontend/images/instagram.svg" alt="linkedin" />
            </a>
          </li>
          <li>
            <a
              href="https://join.skype.com/invite/NmDMQItno7IE"
              target="_blank"
            >
              <img alt="skype" src="../frontend/images/skype.png" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/heavengamerssite?igshid=ODA1NTc5OTg5Nw=="
              target="_blank"
            >
              <img src="../frontend/images/instagram.svg" alt="instagram" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/HeavengamersCom" target="_blank">
              <img src="../frontend/images/twitter.svg" alt="twitter" />
            </a>
          </li>
          <li>
            <a
              href="https://www.trustpilot.com/review/heavengamers.com"
              rel="noreferrer"
              target="_blank"
              className="unselectable block text-xs font-light sm:text-sm"
            >
              <svg
                stroke={'0000'}
                fill={'000'}
                strokeWidth={0}
                role="img"
                viewBox="0 0 24 24"
                className="inline-block"
                height={20}
                width={20}
                xmlns="http://www.w3.org/2000/svg"
              >
                <title />
                <path d="M17.227 16.67l2.19 6.742-7.413-5.388 5.223-1.354zM24 9.31h-9.165L12.005.589l-2.84 8.723L0 9.3l7.422 5.397-2.84 8.714 7.422-5.388 4.583-3.326L24 9.311z" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <div className="col-12 col-md-2 col-xl-2">
        <h3 className="mb-4">About Us</h3>
        <ul>
          <li className="mb-2">
            <a href="../../pages/termsofservice.html">
              {" "}
              <span>⇨</span>Terms of Service
            </a>
          </li>
          <li className="mb-2">
            <a href="../../pages/privacypolicy.html">
              <span>⇨</span>Privacy Policy
            </a>
          </li>
          <li className="mb-2">
            <a href="../../pages/faq.html">
              {" "}
              <span>⇨</span>FAQ
            </a>
          </li>
          <li className="mb-2">
            <a href="https://www.trustpilot.com/review/heavengamers.com">
              {" "}
              <span>⇨</span>TrustPilot
            </a>
          </li>
        </ul>
      </div>
      <div className="col-12 col-md-5 col-xl-5">
        <h3 className="mb-4">Contact Us</h3>
        <ul>
          <li className="d-flex mb-3 align-items-center">
            <div className="icon me-2 d-flex justify-content-center align-items-center">
              <img
                src="../frontend/images/location.svg"
                alt="location"
                width="20px"
              />
            </div>
            <div className="right">
              <a
                className="d-block"
                href="https://www.google.com/maps/place/34%C2%B014'57.0%22N+6%C2%B034'45.0%22W/@34.2491788,-6.5817534,17z/data=!3m1!4b1!4m4!3m3!8m2!3d34.2491788!4d-6.5791785?entry=ttu"
                target="_blank"
              >
                Center City of Kenitra
              </a>
            </div>
          </li>
          <li className="d-flex mb-3 align-items-center">
            <div className="icon me-2 d-flex justify-content-center align-items-center">
              <img src="../frontend/images/email.svg" alt="call" width="15px" />
            </div>
            <div className="right">
              <a className="d-block" href="mailto:business@heavengamers.com">
                business@heavengamers.com
              </a>
            </div>
          </li>
          <li className="d-flex mb-3 align-items-center">
            <div className="icon me-2 d-flex justify-content-center align-items-center">
              <img
                src="../../frontend/images/call.svg"
                alt="call"
                width="15px"
              />
            </div>
            <div className="right">
              <a
                className="d-block"
                href="https://web.whatsapp.com/send?phone=+212626556963&text="
                target="_blank"
              >
                +212626556963
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div className="bottm-bar py-3">
    <div className="container d-flex flex-column flex-md-row justify-content-center align-items-center d-md-flex justify-content-center">
      <p className="m-0">© 2023 - 2024 Heaven Gamers ∣ All Rights Reserved</p>
    </div>
  </div>
</footer>


       </div>
    )
}



const domNode = document.getElementById('tab-list');
const root = createRoot(domNode);
root.render(<TabList />);
