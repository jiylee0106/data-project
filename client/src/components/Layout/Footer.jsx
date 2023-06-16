const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="w-full">
        <div className="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 mx-40 dark:text-gray-300 sm:text-center">
            © 2023 <a href="/about">시나브로</a>
          </span>
          <div className="flex mt-4 space-x-6 mx-40 sm:justify-center md:mt-0">
            <a
              href="https://species.nibr.go.kr"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 55.818 55.818"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  id="Group_6"
                  data-name="Group 6"
                  transform="translate(-1212.948 -289.602)"
                >
                  <path
                    id="Path_19"
                    data-name="Path 19"
                    d="M1249.54,294.79s-4.5.25-5,6.25a17.908,17.908,0,0,0,2.5,10.5s2.193-1.558-.028,5.971,7.278,14.529,10.778,6.279-.5-11.783,2-12.641a33.771,33.771,0,0,0,5.382-2.6l-3.229-6.081-5.21-5.421-7.43-4.027Z"
                    fill="#d1d3d4"
                  />
                  <path
                    id="Path_20"
                    data-name="Path 20"
                    d="M1219.365,331.985s2.675-14.195,6.425-10.695.25,5.5,2.5,9,5.25,1.5,5.5,5.5.755,6.979,2.618,7.241S1222.967,339.984,1219.365,331.985Z"
                    fill="#d1d3d4"
                  />
                  <path
                    id="Path_21"
                    data-name="Path 21"
                    d="M1266.766,317.511a25.909,25.909,0,1,1-25.91-25.909A25.909,25.909,0,0,1,1266.766,317.511Z"
                    fill="none"
                    stroke="#231f20"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="4"
                  />
                  <path
                    id="Path_22"
                    data-name="Path 22"
                    d="M1240.122,311.619a6.078,6.078,0,1,1-6.078-6.079A6.079,6.079,0,0,1,1240.122,311.619Z"
                    fill="#d1d3d4"
                  />
                </g>
              </svg>
              <span className="sr-only">Species nibr page</span>
            </a>
            <a
              href="https://kdt-gitlab.elice.io/ai_track/class_07/data_project/team01/sinabro.gitlab.io"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 16 16"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#FC6D26"
                  d="M14.975 8.904L14.19 6.55l-1.552-4.67a.268.268 0 00-.255-.18.268.268 0 00-.254.18l-1.552 4.667H5.422L3.87 1.879a.267.267 0 00-.254-.179.267.267 0 00-.254.18l-1.55 4.667-.784 2.357a.515.515 0 00.193.583l6.78 4.812 6.778-4.812a.516.516 0 00.196-.583z"
                />
                <path fill="#E24329" d="M8 14.296l2.578-7.75H5.423L8 14.296z" />
                <path
                  fill="#FC6D26"
                  d="M8 14.296l-2.579-7.75H1.813L8 14.296z"
                />
                <path
                  fill="#FCA326"
                  d="M1.81 6.549l-.784 2.354a.515.515 0 00.193.583L8 14.3 1.81 6.55z"
                />
                <path
                  fill="#E24329"
                  d="M1.812 6.549h3.612L3.87 1.882a.268.268 0 00-.254-.18.268.268 0 00-.255.18L1.812 6.549z"
                />
                <path fill="#FC6D26" d="M8 14.296l2.578-7.75h3.614L8 14.296z" />
                <path
                  fill="#FCA326"
                  d="M14.19 6.549l.783 2.354a.514.514 0 01-.193.583L8 14.296l6.188-7.747h.001z"
                />
                <path
                  fill="#E24329"
                  d="M14.19 6.549H10.58l1.551-4.667a.267.267 0 01.255-.18c.115 0 .217.073.254.18l1.552 4.667z"
                />
              </svg>
              <span className="sr-only">Gitlab</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
