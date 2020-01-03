import React from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

const Nav = () => {
  return (
    <div
      id="outer"
      className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 border-bottom box-shadow"
      style={{ backgroundColor: "#5f79a3" }}
    >
      <ul className="my-0 mr-md-auto font-weight-normal" id="logo">
        <Link href="https://nyislaw.com/">
          <a>
            <svg
              viewBox="0 0 512 113.9"
              width="100%"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="NYIS law Logo"
              style={{ maxHeight: 28 }}
            >
              <g id="logo-path">
                <path d="M69.4,1.5v46.3L26.2,1.5H0v110.2h30.4V46.3c12.6,14.5,26.4,30.2,39,42.9c13.8,13.8,25.2,23.9,30.4,24.6V1.5H69.4z"></path>
                <polygon points="185.9,0 141.5,44.8 141.5,0 110.2,0 110.2,113.3 141.5,113.3 141.5,85.2 226.1,0 	"></polygon>
                <polygon points="206.6,30.8 206.6,111.7 237,111.7 237,0.2 	"></polygon>
                <path
                  d="M281.1,27.4h33.9V1.5h-33.9c-18.8,0-34,15.2-34,33.9c0,7.6,2.5,15,7.2,21l0,0c6.4,8.2,16.3,13,26.7,13
  	c4.4,0,7.9,3.6,7.9,7.9c0,4.4-3.6,7.9-7.9,7.9h-33.8v26.4h33.8c18.8-0.1,34.1-15.4,34-34.3c-0.1-7.6-2.6-14.9-7.2-20.9l0,0
  	c-6.4-8.2-16.3-13-26.7-13c-4.5,0-8-3.6-8-8S276.7,27.4,281.1,27.4L281.1,27.4z"
                ></path>
                <g id="law-txt">
                  <path d="M337.4,34.2h7.2v78.2h-7.2V34.2z"></path>
                  <path
                    d="M415.9,56v56.4h-7.2v-9.7c-3,3.7-6.4,6.5-10.2,8.3c-3.8,1.9-7.9,2.8-12.4,2.8c-8,0-14.8-2.9-20.4-8.7s-8.5-12.9-8.5-21.1
  	c0-8.1,2.9-15.1,8.6-20.8c5.7-5.8,12.5-8.7,20.5-8.7c4.6,0,8.8,1,12.6,2.9c3.7,2,7.1,4.9,9.9,8.8V56H415.9z M387,61.5
  	c-4,0-7.7,1-11.2,3c-3.4,2-6.1,4.8-8.1,8.4c-2,3.6-3,7.4-3,11.4s1,7.7,3,11.4c2,3.6,4.8,6.4,8.2,8.5c3.4,2,7.1,3,11.1,3
  	c4,0,7.7-1,11.3-3c3.6-2,6.3-4.7,8.2-8.1c1.9-3.4,2.9-7.3,2.9-11.5c0-6.5-2.1-12-6.4-16.4C398.5,63.7,393.2,61.5,387,61.5z"
                  ></path>
                  <path d="M424.7,56h7.5l17.3,41l18-41h1.3l18.1,41l17.6-41h7.6l-24.5,56.4h-1.3l-18-40.4l-18,40.4h-1.4L424.7,56z"></path>
                </g>
              </g>
            </svg>
          </a>
        </Link>
      </ul>

      <nav className="my-2 my-md-0 mr-md-3">
        <Link href="https://nyislaw.com/ourfirm/">
          <a className="p-2">Our Firm</a>
        </Link>
        <Link href="https://nyislaw.com/practice/">
          <a className="p-2">Practice</a>
        </Link>
        <Link href="https://ask.nyislaw.com/">
          <a className="p-2">Ask</a>
        </Link>
        <Link href="https://nyislaw.com/contactus/">
          <a className="p-2">Contact us</a>
        </Link>
      </nav>

      <style jsx>{`
        #outer {
          // background-color: #5f79a3;
        }
        #logo-path {
          fill: #ffffffbf;
        }
        #law-txt {
          fill: #f7cd00;
        }
        a,
        a:visited {
          color: rgba(255, 255, 255, 0.85);
          text-decoration: none;
          font-size: 13px;
          font-family: Raleway, PingFang SC, Microsoft Yahei, Helvetica Neue,
            Helvetica, Arial, sans-serif;
        }
      `}</style>
    </div>
  );
  // <nav className="container-fluid">
  //   <ul className="container" id="secondary">
  //     <li className="left">
  //       <Link href="https://nyislaw.com/">
  //         <a>
  //           <svg
  //             viewBox="0 0 512 113.9"
  //             width="100%"
  //             xmlns="http://www.w3.org/2000/svg"
  //             aria-label="NYIS law Logo"
  //             style={{ maxHeight: 28 }}
  //           >
  //             <g id="logo-path">
  //               <path d="M69.4,1.5v46.3L26.2,1.5H0v110.2h30.4V46.3c12.6,14.5,26.4,30.2,39,42.9c13.8,13.8,25.2,23.9,30.4,24.6V1.5H69.4z"></path>
  //               <polygon points="185.9,0 141.5,44.8 141.5,0 110.2,0 110.2,113.3 141.5,113.3 141.5,85.2 226.1,0 	"></polygon>
  //               <polygon points="206.6,30.8 206.6,111.7 237,111.7 237,0.2 	"></polygon>
  //               <path
  //                 d="M281.1,27.4h33.9V1.5h-33.9c-18.8,0-34,15.2-34,33.9c0,7.6,2.5,15,7.2,21l0,0c6.4,8.2,16.3,13,26.7,13
  // 	c4.4,0,7.9,3.6,7.9,7.9c0,4.4-3.6,7.9-7.9,7.9h-33.8v26.4h33.8c18.8-0.1,34.1-15.4,34-34.3c-0.1-7.6-2.6-14.9-7.2-20.9l0,0
  // 	c-6.4-8.2-16.3-13-26.7-13c-4.5,0-8-3.6-8-8S276.7,27.4,281.1,27.4L281.1,27.4z"
  //               ></path>
  //               <g id="law-txt">
  //                 <path d="M337.4,34.2h7.2v78.2h-7.2V34.2z"></path>
  //                 <path
  //                   d="M415.9,56v56.4h-7.2v-9.7c-3,3.7-6.4,6.5-10.2,8.3c-3.8,1.9-7.9,2.8-12.4,2.8c-8,0-14.8-2.9-20.4-8.7s-8.5-12.9-8.5-21.1
  // 	c0-8.1,2.9-15.1,8.6-20.8c5.7-5.8,12.5-8.7,20.5-8.7c4.6,0,8.8,1,12.6,2.9c3.7,2,7.1,4.9,9.9,8.8V56H415.9z M387,61.5
  // 	c-4,0-7.7,1-11.2,3c-3.4,2-6.1,4.8-8.1,8.4c-2,3.6-3,7.4-3,11.4s1,7.7,3,11.4c2,3.6,4.8,6.4,8.2,8.5c3.4,2,7.1,3,11.1,3
  // 	c4,0,7.7-1,11.3-3c3.6-2,6.3-4.7,8.2-8.1c1.9-3.4,2.9-7.3,2.9-11.5c0-6.5-2.1-12-6.4-16.4C398.5,63.7,393.2,61.5,387,61.5z"
  //                 ></path>
  //                 <path d="M424.7,56h7.5l17.3,41l18-41h1.3l18.1,41l17.6-41h7.6l-24.5,56.4h-1.3l-18-40.4l-18,40.4h-1.4L424.7,56z"></path>
  //               </g>
  //             </g>
  //           </svg>
  //         </a>
  //       </Link>
  //     </li>
  //     <li className="right">
  //       <Link href="https://nyislaw.com/ourfirm/">
  //         <a>Our Firm</a>
  //       </Link>
  //     </li>
  //     <li className="right">
  //       <Link href="https://nyislaw.com/practice/">
  //         <a>Practice</a>
  //       </Link>
  //     </li>
  //     <li className="right">
  //       <Link href="https://ask.nyislaw.com/">
  //         <a>Ask</a>
  //       </Link>
  //     </li>
  //     <li className="right">
  //       <Link href="https://nyislaw.com/contactus/">
  //         <a>Contact us</a>
  //       </Link>
  //     </li>
  //   </ul>

  //   <style jsx>{`
  //     :global(body) {
  //       margin: 0;
  //       font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
  //         Helvetica, sans-serif;
  //     }
  //     nav {
  //       background: #5f79a3;
  //     }
  //     #secondary {
  //       max-width: 1200px;
  //     }
  //     ul {
  //       display: flex;
  //       justify-content: flex-end;
  //       list-style-type: none;
  //       margin-left: 220px;
  //       margin-right: 220px;
  //     }
  //     nav > ul {
  //       padding: 4px 16px;
  //     }
  //     li {
  //       padding: 6px 8px;
  //     }
  //     a,
  //     a:visited {
  //       color: rgba(255, 255, 255, 0.85);
  //       text-decoration: none;
  //       font-size: 13px;
  //       font-family: Raleway, PingFang SC, Microsoft Yahei, Helvetica Neue,
  //         Helvetica, Arial, sans-serif;
  //     }
  //     .left {
  //       margin-right: auto;
  //     }
  //     #logo-path {
  //       fill: #ffffffbf;
  //     }
  //     #law-txt {
  //       fill: #f7cd00;
  //     }
  //   `}</style>
  // </nav>
  // <div className="container">
  //   <div className="container-fluid">
  //     <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
  //       <h5 className="my-0 mr-md-auto font-weight-normal">Company name</h5>
  //       <nav className="my-2 my-md-0 mr-md-3">
  //         <a className="p-2 text-dark" href="#">
  //           Features
  //         </a>
  //         <a className="p-2 text-dark" href="#">
  //           Enterprise
  //         </a>
  //         <a className="p-2 text-dark" href="#">
  //           Support
  //         </a>
  //         <a className="p-2 text-dark" href="#">
  //           Pricing
  //         </a>
  //       </nav>
  //       <a className="btn btn-outline-primary" href="#">
  //         Sign up
  //       </a>
  //     </div>
  //   </div>
  // </div>
};

export default Nav;
