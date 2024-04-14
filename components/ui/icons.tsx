import * as React from "react";
import { IconSvgProps } from "@/types";

export const TwitterIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
        fill="currentColor"
      />
    </svg>
  );
};

export const GithubIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export const TelegramIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.1117 4.49449C23.4296 2.94472 21.9074 1.65683 20.4317 2.227L2.3425 9.21601C0.694517 9.85273 0.621087 12.1572 2.22518 12.8975L6.1645 14.7157L8.03849 21.2746C8.13583 21.6153 8.40618 21.8791 8.74917 21.968C9.09216 22.0568 9.45658 21.9576 9.70712 21.707L12.5938 18.8203L16.6375 21.8531C17.8113 22.7334 19.5019 22.0922 19.7967 20.6549L23.1117 4.49449ZM3.0633 11.0816L21.1525 4.0926L17.8375 20.2531L13.1 16.6999C12.7019 16.4013 12.1448 16.4409 11.7929 16.7928L10.5565 18.0292L10.928 15.9861L18.2071 8.70703C18.5614 8.35278 18.5988 7.79106 18.2947 7.39293C17.9906 6.99479 17.4389 6.88312 17.0039 7.13168L6.95124 12.876L3.0633 11.0816ZM8.17695 14.4791L8.78333 16.6015L9.01614 15.321C9.05253 15.1209 9.14908 14.9366 9.29291 14.7928L11.5128 12.573L8.17695 14.4791Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const DiscordIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z"
        fill="currentColor"
      />
    </svg>
  );
};

export const GitBookIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path d="M10.802 17.77a.703.703 0 1 1-.002 1.406.703.703 0 0 1 .002-1.406m11.024-4.347a.703.703 0 1 1 .001-1.406.703.703 0 0 1-.001 1.406m0-2.876a2.176 2.176 0 0 0-2.174 2.174c0 .233.039.465.115.691l-7.181 3.823a2.165 2.165 0 0 0-1.784-.937c-.829 0-1.584.475-1.95 1.216l-6.451-3.402c-.682-.358-1.192-1.48-1.138-2.502.028-.533.212-.947.493-1.107.178-.1.392-.092.62.027l.042.023c1.71.9 7.304 3.847 7.54 3.956.363.169.565.237 1.185-.057l11.564-6.014c.17-.064.368-.227.368-.474 0-.342-.354-.477-.355-.477-.658-.315-1.669-.788-2.655-1.25-2.108-.987-4.497-2.105-5.546-2.655-.906-.474-1.635-.074-1.765.006l-.252.125C7.78 6.048 1.46 9.178 1.1 9.397.457 9.789.058 10.57.006 11.539c-.08 1.537.703 3.14 1.824 3.727l6.822 3.518a2.175 2.175 0 0 0 2.15 1.862 2.177 2.177 0 0 0 2.173-2.14l7.514-4.073c.38.298.853.461 1.337.461A2.176 2.176 0 0 0 24 12.72a2.176 2.176 0 0 0-2.174-2.174" />
    </svg>
  );
};

export const SnapshotIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
      fill="currentColor"
    >
      <path
        id="primary"
        d="M18,11.74a1,1,0,0,0-.52-.63L14.09,9.43,15,3.14a1,1,0,0,0-1.78-.75l-7,9a1,1,0,0,0-.18.87,1.05,1.05,0,0,0,.6.67l4.27,1.71L10,20.86a1,1,0,0,0,.63,1.07A.92.92,0,0,0,11,22a1,1,0,0,0,.83-.45l6-9A1,1,0,0,0,18,11.74Z"
      ></path>
    </svg>
  );
};

export const GovernanceIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 256 256"
      width={size || width}
      fill="currentColor"
      {...props}
    >
      <g>
        <path
          d="M223.8,95.9c-0.4-0.2-1.5-0.2-1.9-0.4c-0.4-0.2-1.9-0.2-2.6-0.2c-4.3,0-7.4,1.7-9.1,4.7l-22.8,37.6l-28.7,0.5
		c-4.7,0-8.7,3.8-8.7,8.7c0,1.3,0.3,2.5,0.8,3.6h-46c0.5-1.1,0.8-2.3,0.8-3.6c0-4.9-4-8.7-8.7-8.7H68.2L45.4,100
		c-1.7-3-4.9-4.7-9.1-4.7c-0.6,0-2.1,0-2.6,0.2c-0.4,0.2-1.5,0.2-1.9,0.4c-29.2,6.7-29.3,69-29.1,80.9c0,10.9,3.8,15.7,11.7,18.7
		c1.9,0.9,4.3,1.3,6.2,1.3l50.2,0v43.4c0,6.4,4.9,11.3,11.3,11.3c6.4,0,11.3-4.9,11.3-11.3v-54.3c0-3-1.3-6.2-3.4-8.1
		c-2.3-2.3-5.3-3.6-8.1-3.6H48.4v-25.1L31,119.5c-0.9-1.3-0.4-2.8,0.6-3.4c1.3-0.9,2.8-0.4,3.4,0.6L55.2,151
		c0.1,0.2,0.3,0.4,0.4,0.7v15.7H200v-15.7c0.2-0.2,0.3-0.4,0.4-0.7l20.2-34.3c0.6-1.1,2.1-1.5,3.4-0.6c1.1,0.6,1.5,2.1,0.6,3.4
		l-17.4,29.6v25.1h-33.4c-2.8,0-5.7,1.3-8.1,3.6c-2.1,1.9-3.4,5.1-3.4,8.1v54.3c0,6.4,4.9,11.3,11.3,11.3c6.4,0,11.3-4.9,11.3-11.3
		v-43.4h50.2c1.9,0,4.3-0.4,6.2-1.3c7.9-3,11.7-7.8,11.7-18.7C253.2,165,253.1,102.6,223.8,95.9z"
        />
        <ellipse
          transform="matrix(0.3827 -0.9239 0.9239 0.3827 56.0066 232.6846)"
          cx="202.1"
          cy="74.4"
          rx="20.2"
          ry="20.2"
        />
        <ellipse
          transform="matrix(0.3827 -0.9239 0.9239 0.3827 -35.7223 95.4025)"
          cx="53.5"
          cy="74.4"
          rx="20.2"
          ry="20.2"
        />
        <path
          d="M114.7,67.8v0.6h11.2h3.9H141v-0.6c0-6.4,2.5-12.6,7-17.3c4.6-4.9,7.5-11.6,7.5-18.9c0-15.4-12.7-27.9-28.2-27.6
		c-15.1,0.4-27.1,13-26.9,28c0.1,7.1,2.9,13.6,7.5,18.4C112.1,55.2,114.7,61.3,114.7,67.8z"
        />
        <rect x="114.7" y="72.3" width="26.3" height="5.2" />
        <path d="M123.9,88.1h7.9c2.9,0,5.3-2.4,5.3-5.3v-1.3h-18.4v1.3C118.6,85.7,121,88.1,123.9,88.1z" />
      </g>
    </svg>
  );
};

export const MetamaskIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => (
  <svg
    viewBox="0 0 24 24"
    width={width || size || "24"}
    height={height || size || "22.5"}
    {...props}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="22.5"
      viewBox="0 0 256 240"
    >
      <path fill="#E17726" d="M250.066 0L140.219 81.279l20.427-47.9z" />
      <path
        fill="#E27625"
        d="m6.191.096l89.181 33.289l19.396 48.528zM205.86 172.858l48.551.924l-16.968 57.642l-59.243-16.311zm-155.721 0l27.557 42.255l-59.143 16.312l-16.865-57.643z"
      />
      <path
        fill="#E27625"
        d="m112.131 69.552l1.984 64.083l-59.371-2.701l16.888-25.478l.214-.245zm31.123-.715l40.9 36.376l.212.244l16.888 25.478l-59.358 2.7zM79.435 173.044l32.418 25.259l-37.658 18.181zm97.136-.004l5.131 43.445l-37.553-18.184z"
      />
      <path
        fill="#D5BFB2"
        d="m144.978 195.922l38.107 18.452l-35.447 16.846l.368-11.134zm-33.967.008l-2.909 23.974l.239 11.303l-35.53-16.833z"
      />
      <path
        fill="#233447"
        d="m100.007 141.999l9.958 20.928l-33.903-9.932zm55.985.002l24.058 10.994l-34.014 9.929z"
      />
      <path
        fill="#CC6228"
        d="m82.026 172.83l-5.48 45.04l-29.373-44.055zm91.95.001l34.854.984l-29.483 44.057zm28.136-44.444l-25.365 25.851l-19.557-8.937l-9.363 19.684l-6.138-33.849zm-148.237 0l60.435 2.749l-6.139 33.849l-9.365-19.681l-19.453 8.935z"
      />
      <path
        fill="#E27525"
        d="m52.166 123.082l28.698 29.121l.994 28.749zm151.697-.052l-29.746 57.973l1.12-28.8zm-90.956 1.826l1.155 7.27l2.854 18.111l-1.835 55.625l-8.675-44.685l-.003-.462zm30.171-.101l6.521 35.96l-.003.462l-8.697 44.797l-.344-11.205l-1.357-44.862z"
      />
      <path
        fill="#F5841F"
        d="m177.788 151.046l-.971 24.978l-30.274 23.587l-6.12-4.324l6.86-35.335zm-99.471 0l30.399 8.906l6.86 35.335l-6.12 4.324l-30.275-23.589z"
      />
      <path
        fill="#C0AC9D"
        d="m67.018 208.858l38.732 18.352l-.164-7.837l3.241-2.845h38.334l3.358 2.835l-.248 7.831l38.487-18.29l-18.728 15.476l-22.645 15.553h-38.869l-22.63-15.617z"
      />
      <path
        fill="#161616"
        d="m142.204 193.479l5.476 3.869l3.209 25.604l-4.644-3.921h-36.476l-4.556 4l3.104-25.681l5.478-3.871z"
      />
      <path
        fill="#763E1A"
        d="M242.814 2.25L256 41.807l-8.235 39.997l5.864 4.523l-7.935 6.054l5.964 4.606l-7.897 7.191l4.848 3.511l-12.866 15.026l-52.77-15.365l-.457-.245l-38.027-32.078zm-229.628 0l98.326 72.777l-38.028 32.078l-.457.245l-52.77 15.365l-12.866-15.026l4.844-3.508l-7.892-7.194l5.952-4.601l-8.054-6.071l6.085-4.526L0 41.809z"
      />
      <path
        fill="#F5841F"
        d="m180.392 103.99l55.913 16.279l18.165 55.986h-47.924l-33.02.416l24.014-46.808zm-104.784 0l-17.151 25.873l24.017 46.808l-33.005-.416H1.631l18.063-55.985zm87.776-70.878l-15.639 42.239l-3.319 57.06l-1.27 17.885l-.101 45.688h-30.111l-.098-45.602l-1.274-17.986l-3.32-57.045l-15.637-42.239z"
      />
    </svg>
  </svg>
);

export const InfoIcon: React.FC<IconSvgProps & { className?: string }> = ({
  className,
  ...props
}) => {
  const { width = 24, height = 24 } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className={className}
      width={width}
      height={height}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      ></path>
    </svg>
  );
};

export const CloseIcon: React.FC<IconSvgProps & { className?: string }> = ({
  className,
  ...props
}) => {
  const { width = 24, height = 24 } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 14"
      fill="currentColor"
      className={className}
      width={width}
      height={height}
    >
      <rect id="icon-bound" fill="none" />
      <path
        fill="currentColor"
        d="M8,0C3.582,0,0,3.582,0,8s3.582,8,8,8s8-3.582,8-8S12.418,0,8,0z M12.707,11.293l-1.414,1.414L8,9.414l-3.293,3.293 l-1.414-1.414L6.586,8L3.293,4.707l1.414-1.414L8,6.586l3.293-3.293l1.414,1.414L9.414,8L12.707,11.293z"
      />
    </svg>
  );
};

export const CheckIcon: React.FC<IconSvgProps & { className?: string }> = ({
  className,
  ...props
}) => {
  const { width = 24, height = 24 } = props;
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      className={className}
      width={width}
      height={height}
      {...props}
    >
      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
    </svg>
  );
};

export const MoonFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
      fill="currentColor"
    />
  </svg>
);

export const SunFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <g fill="currentColor">
      <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
      <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
    </g>
  </svg>
);

export const WithdrawIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg viewBox="0 0 24 24" fill="none" width={size || width} {...props}>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <path
        d="M12 9C11.4477 9 11 9.44771 11 10V15.5856L9.70711 14.2928C9.3166 13.9024 8.68343 13.9024 8.29292 14.2928C7.90236 14.6834 7.90236 15.3165 8.29292 15.7071L11.292 18.7063C11.6823 19.0965 12.3149 19.0968 12.7055 18.707L15.705 15.7137C16.0955 15.3233 16.0955 14.69 15.705 14.2996C15.3145 13.909 14.6814 13.909 14.2908 14.2996L13 15.5903V10C13 9.44771 12.5523 9 12 9Z"
        fill="currentColor"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 1C22.6569 1 24 2.34315 24 4V8C24 9.65685 22.6569 11 21 11H19V20C19 21.6569 17.6569 23 16 23H8C6.34315 23 5 21.6569 5 20V11H3C1.34315 11 0 9.65685 0 8V4C0 2.34315 1.34315 1 3 1H21ZM22 8C22 8.55228 21.5523 9 21 9H19V7H20C20.5523 7 21 6.55229 21 6C21 5.44772 20.5523 5 20 5H4C3.44772 5 3 5.44772 3 6C3 6.55229 3.44772 7 4 7H5V9H3C2.44772 9 2 8.55228 2 8V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V8ZM7 7V20C7 20.5523 7.44772 21 8 21H16C16.5523 21 17 20.5523 17 20V7H7Z"
        fill="currentColor"
      ></path>
    </g>
  </svg>
);

export const RewardIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg viewBox="0 0 24 24" fill="none" width={size || width} {...props}>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <path
        d="M10 16V14.0003M10 14.0003V12M10 14.0003L12 14.0005M10 14.0003L8 14M21 12V11.2C21 10.0799 21 9.51984 20.782 9.09202C20.5903 8.71569 20.2843 8.40973 19.908 8.21799C19.4802 8 18.9201 8 17.8 8H3M21 12V16M21 12H19C17.8954 12 17 12.8954 17 14C17 15.1046 17.8954 16 19 16H21M21 16V16.8C21 17.9201 21 18.4802 20.782 18.908C20.5903 19.2843 20.2843 19.5903 19.908 19.782C19.4802 20 18.9201 20 17.8 20H6.2C5.0799 20 4.51984 20 4.09202 19.782C3.71569 19.5903 3.40973 19.2843 3.21799 18.908C3 18.4802 3 17.9201 3 16.8V8M18 8V7.2C18 6.0799 18 5.51984 17.782 5.09202C17.5903 4.71569 17.2843 4.40973 16.908 4.21799C16.4802 4 15.9201 4 14.8 4H6.2C5.07989 4 4.51984 4 4.09202 4.21799C3.71569 4.40973 3.40973 4.71569 3.21799 5.09202C3 5.51984 3 6.0799 3 7.2V8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </g>
  </svg>
);

export const FullCheckIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg viewBox="0 0 24 24" fill="none" width={size || width} {...props}>
    <g stroke-width="0" />
    <g strokeLinecap="round" strokeLinejoin="round" />
    <g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z"
        fill="currentColor"
      />
    </g>
  </svg>
);

export const PendingIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg viewBox="0 0 24 24" width={size || width} {...props}>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7 2C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2H7ZM12 7C12.5523 7 13 7.44772 13 8V11.5858L14.7071 13.2929C15.0976 13.6834 15.0976 14.3166 14.7071 14.7071C14.3166 15.0976 13.6834 15.0976 13.2929 14.7071L11.2929 12.7071C11.1054 12.5196 11 12.2652 11 12V8C11 7.44772 11.4477 7 12 7Z"
      fill="currentColor"
    />
  </svg>
);

export const CopyIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg viewBox="0 0 24 24" width={size || width} {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21 8C21 6.34315 19.6569 5 18 5H10C8.34315 5 7 6.34315 7 8V20C7 21.6569 8.34315 23 10 23H18C19.6569 23 21 21.6569 21 20V8ZM19 8C19 7.44772 18.5523 7 18 7H10C9.44772 7 9 7.44772 9 8V20C9 20.5523 9.44772 21 10 21H18C18.5523 21 19 20.5523 19 20V8Z"
      fill="currentColor"
    />
    <path
      d="M6 3H16C16.5523 3 17 2.55228 17 2C17 1.44772 16.5523 1 16 1H6C4.34315 1 3 2.34315 3 4V18C3 18.5523 3.44772 19 4 19C4.55228 19 5 18.5523 5 18V4C5 3.44772 5.44772 3 6 3Z"
      fill="currentColor"
    />
  </svg>
);

export const ChevronUpIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg viewBox="0 0 24 24" width={size || width} {...props} fill="none">
    <path
      d="M6 15L12 9L18 15"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ChevronDownIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg viewBox="0 0 24 24" width={size || width} {...props} fill="none">
    <path
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 7l6 6 6-6"
    />
  </svg>
);

export const SwapVerticalIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg viewBox="0 0 24 24" width={size || width} {...props} fill="none">
    <path
      d="M8 3.5L8 16.5M8 3.5L3.5 7.83333M8 3.5L12.5 7.83333"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17 20.5L17 7.5M17 20.5L21.5 16.1667M17 20.5L12.5 16.1667"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const HorizontalLineIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg viewBox="0 0 24 24" width={size || width} {...props} fill="currentColor">
    <path d="M19 13H5v-2h14v2z" />
  </svg>
);

export const TaraxaIcon = ({
  size = 29,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    width={size || width}
    {...props}
    viewBox="0 0 29 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0)">
      <path
        d="M10.545 27.9845C10.328 28.2029 9.93045 28.2476 9.44923 28.145C8.78494 27.9871 8.29849 27.6189 8.23834 27.1953C8.2247 27.1101 8.23212 27.0228 8.25994 26.9412C8.28776 26.8595 8.33513 26.786 8.39787 26.7271C8.44185 26.6816 8.49204 26.6426 8.54694 26.6113C8.66887 26.5472 8.80218 26.5078 8.93924 26.4956C9.25051 26.47 9.56325 26.5224 9.84943 26.6482C10.1356 26.774 10.3863 26.9692 10.579 27.2164C10.6559 27.3151 10.6995 27.4358 10.7038 27.5611C10.708 27.6864 10.6726 27.8098 10.6026 27.9135C10.5863 27.9394 10.567 27.9633 10.545 27.9845Z"
        fill="#15AC5B"
      />
      <path
        d="M21.1816 27.0692L21.1084 27.1376C20.5513 27.6322 19.6935 27.8952 19.2777 27.7006C19.1839 27.6576 19.1048 27.5878 19.0504 27.4998C18.996 27.4118 18.9686 27.3096 18.9717 27.206C18.995 26.9767 19.1044 26.765 19.2777 26.6141C19.6515 26.2572 20.1289 26.0296 20.6402 25.9644C20.7219 25.9552 20.8044 25.9552 20.8861 25.9644C21.2601 25.9959 21.4091 26.1722 21.451 26.3169C21.5739 26.6483 21.2941 26.964 21.2078 27.0508L21.1816 27.0692Z"
        fill="#15AC5B"
      />
      <path
        d="M8.76659 16.615C8.52138 16.8654 8.21165 17.0421 7.87215 17.1253C7.52147 17.2004 7.15639 17.167 6.82495 17.0294C6.49352 16.8918 6.21125 16.6566 6.01528 16.3545C5.71957 15.923 5.54881 15.4173 5.52203 14.8938C5.49525 14.3703 5.61349 13.8497 5.86359 13.3899C5.96438 13.2063 6.0893 13.0373 6.23497 12.8874C6.4282 12.6907 6.66228 12.5394 6.92045 12.4444C7.17862 12.3493 7.45449 12.3129 7.72831 12.3376C7.97996 12.3736 8.22163 12.461 8.43842 12.5944C8.65522 12.7279 8.84256 12.9046 8.9889 13.1136C9.40749 13.7336 9.57062 14.4928 9.44396 15.2313C9.36631 15.752 9.12959 16.2356 8.76659 16.615Z"
        fill="#15AC5B"
      />
      <path
        d="M14.7894 9.53879C14.7168 9.61435 14.627 9.67119 14.5279 9.70452C14.3889 9.74997 14.2395 9.75191 14.0994 9.71011C13.9593 9.66831 13.8352 9.58472 13.7433 9.4704C13.6228 9.32092 13.5532 9.13652 13.5446 8.94428V8.08144H12.9875H12.9509C12.8012 8.0665 12.6595 8.00619 12.5446 7.90849C12.4297 7.81078 12.347 7.68028 12.3075 7.53427C12.2653 7.37848 12.2631 7.21449 12.3011 7.05761C12.3391 6.90074 12.416 6.7561 12.5246 6.63723L12.5743 6.58988C12.6841 6.49898 12.8194 6.44474 12.9613 6.43468H13.5053V5.6718C13.5004 5.44416 13.5818 5.22316 13.7329 5.05361C13.8408 4.9489 13.9791 4.88162 14.1278 4.86157H14.2062C14.3899 4.8809 14.56 4.96741 14.6844 5.10466C14.8088 5.2419 14.8788 5.42033 14.881 5.60603C14.8967 5.88488 14.9097 6.15057 14.9228 6.41626C15.0972 6.41626 15.2715 6.411 15.4459 6.40048H15.4694C15.6898 6.4218 15.8929 6.53012 16.034 6.7017C16.1752 6.87329 16.243 7.09415 16.2226 7.31593C16.2172 7.51273 16.1389 7.70038 16.003 7.84205C15.8939 7.94995 15.754 8.02079 15.6028 8.04461H15.5793C15.3805 8.04461 15.1922 8.06039 15.0091 8.06302C15.0091 8.32608 15.0327 8.60756 15.0431 8.88114C15.0459 9.12504 14.9551 9.36062 14.7894 9.53879Z"
        fill="#15AC5B"
      />
      <path
        d="M21.6914 18.3253C21.5584 18.4647 21.384 18.557 21.1945 18.5884C21.0451 18.6096 20.8928 18.5835 20.7588 18.5138C20.6247 18.444 20.5156 18.334 20.4465 18.1991C20.3541 18.0138 20.3212 17.8042 20.3524 17.5993C20.4465 16.9548 20.5224 16.305 20.5773 15.6553H20.3419C19.8816 15.6553 19.4082 15.6237 18.9375 15.5974C18.7577 15.585 18.5867 15.5141 18.4504 15.3955C18.3141 15.2769 18.2198 15.1169 18.1816 14.9397C18.1389 14.7623 18.1404 14.577 18.186 14.4003C18.2316 14.2236 18.32 14.061 18.4432 13.927C18.4836 13.8873 18.5273 13.8512 18.5739 13.8191C18.7149 13.7271 18.8792 13.6778 19.0473 13.6771H19.063C19.5416 13.7034 20.0019 13.7244 20.4361 13.7349H20.6793C20.6976 13.0957 20.7002 12.4486 20.6793 11.8093C20.6718 11.5427 20.7653 11.2832 20.9408 11.0833C21.0655 10.9601 21.2275 10.8823 21.4011 10.8623H21.4273C21.8797 10.8833 22.2119 11.2411 22.2537 11.7699C22.2903 12.4223 22.306 13.0852 22.3008 13.7244C22.7585 13.7086 23.2004 13.6849 23.6084 13.6481C23.7057 13.6418 23.8032 13.6574 23.8937 13.6938C23.9842 13.7302 24.0654 13.7865 24.1315 13.8586C24.2224 13.967 24.2906 14.0928 24.332 14.2284C24.3733 14.3641 24.387 14.5067 24.3721 14.6477C24.3498 14.9071 24.2453 15.1524 24.074 15.3475C23.9636 15.4609 23.8194 15.5348 23.6634 15.5579C23.1978 15.6 22.7166 15.6263 22.2223 15.6421C22.1726 16.3208 22.0994 16.9969 22.0026 17.6572C21.9644 17.9052 21.8564 18.137 21.6914 18.3253Z"
        fill="#15AC5B"
      />
      <path
        d="M0.679973 15.4945C0.648201 15.5267 0.609565 15.5513 0.56698 15.5663C0.524394 15.5814 0.478971 15.5865 0.434133 15.5813C0.387968 15.5746 0.343939 15.5574 0.30541 15.5309C0.266882 15.5045 0.234873 15.4695 0.211831 15.4287C0.0963218 15.0991 0.0526176 14.7483 0.0836804 14.4002C0.0995434 13.6462 0.170347 12.8945 0.295521 12.151C0.50766 10.9851 0.858909 9.84924 1.34165 8.76802C1.41681 8.58981 1.52211 8.42604 1.65287 8.28399C1.68356 8.25314 1.71681 8.22498 1.75225 8.19981C1.80928 8.15901 1.87806 8.13819 1.948 8.14056C2.01794 8.14294 2.08517 8.16838 2.13932 8.21297C2.33285 8.37343 2.3067 8.73909 2.05825 9.31519C1.7941 9.92274 1.57129 10.5476 1.39134 11.1856C1.49334 11.3096 1.60722 11.4233 1.73133 11.5249C1.8815 11.6414 1.98462 11.8087 2.02163 11.9958C2.05513 12.2513 2.04093 12.511 1.97979 12.7613C1.94003 12.9567 1.84983 13.1382 1.71825 13.2874C1.65268 13.3592 1.56315 13.4043 1.46669 13.414C1.37023 13.4237 1.2736 13.3974 1.19519 13.34C1.11713 13.2865 1.04285 13.2276 0.972889 13.1638C0.897515 13.6939 0.85211 14.2279 0.836892 14.7632C0.836892 14.7632 0.868276 15.3103 0.679973 15.4945Z"
        fill="#15AC5B"
      />
      <path
        d="M16.2988 23.7678C15.8588 24.2067 15.2956 24.4996 14.6852 24.6069C14.1143 24.7281 13.52 24.6664 12.9857 24.4305C12.4515 24.1946 12.004 23.7964 11.7063 23.2916C11.4634 22.8835 11.3303 22.4188 11.3202 21.9432C11.3101 21.4677 11.4234 20.9976 11.6488 20.5795C11.7834 20.3259 11.9543 20.0937 12.1561 19.8903C12.714 19.3432 13.4541 19.0244 14.2327 18.9959C14.6755 18.9948 15.1133 19.091 15.5153 19.2777C15.9174 19.4645 16.274 19.7373 16.5603 20.077C16.7982 20.3755 16.9698 20.7217 17.0637 21.0924C17.1575 21.4631 17.1714 21.8497 17.1043 22.2262C16.9996 22.8111 16.7183 23.3493 16.2988 23.7678Z"
        fill="#15AC5B"
      />
      <path
        d="M25.9388 22.3999C25.6881 22.6938 25.3463 22.894 24.9685 22.9682C24.8324 22.9815 24.6954 22.9532 24.5755 22.8871C24.4556 22.8209 24.3583 22.7199 24.2964 22.5972C23.8099 21.6844 24.5579 18.8592 25.8656 17.5333C26.009 17.3869 26.1677 17.2563 26.3389 17.144C26.4573 17.0657 26.5897 17.0112 26.7286 16.9835C26.8632 16.9524 27.0037 16.9588 27.135 17.0019C27.2663 17.045 27.3835 17.1232 27.474 17.2282C27.8506 17.6649 27.8427 18.6566 27.4505 19.8114C27.1341 20.7777 26.616 21.6647 25.9309 22.4131L25.9388 22.3999Z"
        fill="#15AC5B"
      />
      <path
        d="M7.17349 5.95293L7.10811 6.01607C5.70106 7.31032 4.29925 7.65757 3.64281 7.33137C3.50027 7.26171 3.38301 7.14889 3.30749 7.00876C3.23197 6.86863 3.20198 6.70823 3.22174 6.55008C3.27405 5.93978 3.72388 5.18216 4.48756 4.41403C5.1754 3.7096 5.98324 3.13493 6.87273 2.71728C7.5501 2.43055 8.07577 2.41476 8.39484 2.67519C8.48596 2.75082 8.55892 2.84617 8.60828 2.95412C8.65764 3.06208 8.68212 3.17985 8.67991 3.29865C8.71391 4.34826 7.18918 5.93715 7.17349 5.95293Z"
        fill="#15AC5B"
      />
      <path
        d="M4.84885 23.8017C4.74989 23.9005 4.62539 23.9693 4.48947 24.0005C4.35355 24.0316 4.21167 24.0238 4.07994 23.978C3.26135 23.7386 2.53168 22.7652 2.17076 22.2049C1.65301 21.4183 1.27349 20.5481 1.04879 19.6322C0.907562 18.9509 0.978176 18.4458 1.25017 18.1696L1.30248 18.1222C1.39127 18.0502 1.49459 17.9986 1.60525 17.9709C1.71591 17.9432 1.83125 17.9401 1.94323 17.9618C2.8089 18.1091 3.9361 19.577 4.24732 20.0952C5.24638 21.7446 5.34053 23.1677 4.91946 23.7228C4.89873 23.7515 4.87506 23.778 4.84885 23.8017Z"
        fill="#15AC5B"
      />
      <path
        d="M28.3292 15.0684C28.4391 14.9579 28.4391 14.8737 28.4077 14.1556V14.1056C28.3689 13.3551 28.2744 12.6086 28.1252 11.8722C28.0154 11.2777 27.8062 10.5964 27.7983 10.57C27.5874 9.871 27.3251 9.18868 27.0137 8.5287C26.9465 8.36626 26.8586 8.21328 26.7522 8.0736C26.7239 8.04149 26.6893 8.01558 26.6506 7.99748C26.6119 7.97937 26.5699 7.96947 26.5273 7.96838C26.4847 7.96722 26.4424 7.97478 26.4028 7.99061C26.3632 8.00644 26.3273 8.0302 26.2971 8.06045C26.2676 8.09064 26.2443 8.1264 26.2286 8.16568C26.2129 8.20496 26.2051 8.24698 26.2056 8.28931C26.2379 8.5638 26.3166 8.83071 26.4384 9.07849C26.7181 9.6886 26.9566 10.317 27.1523 10.9594C27.083 11.1012 26.9951 11.2331 26.8908 11.3513V11.3698V11.3882C26.8573 11.4511 26.8326 11.5184 26.8176 11.5881C26.76 11.8985 26.8751 12.8271 27.2073 13.0507C27.2663 13.0911 27.336 13.1127 27.4073 13.1127C27.4787 13.1127 27.5484 13.0911 27.6074 13.0507L27.6309 13.0323C27.6963 13.4716 27.7434 13.9425 27.78 14.487C27.8062 14.8763 27.8506 15.0631 28.0415 15.1394C28.0914 15.1549 28.1445 15.1565 28.1952 15.144C28.2458 15.1315 28.2922 15.1054 28.3292 15.0684Z"
        fill="#15AC5B"
      />
      <path
        d="M13.9738 28.8396C13.9624 28.8179 13.9536 28.795 13.9477 28.7712H13.4638C13.267 28.7783 13.0747 28.7107 12.9251 28.5818C12.8629 28.5183 12.8281 28.4328 12.8281 28.3437C12.8281 28.2547 12.8629 28.1692 12.9251 28.1057C13.0388 28.0053 13.1873 27.9542 13.3383 27.9636C13.5998 27.9636 13.8614 27.9636 14.1386 27.9636C14.1569 27.8663 14.1726 27.7532 14.1883 27.6295C14.2076 27.5305 14.2548 27.4392 14.3243 27.3665C14.4857 27.2257 14.694 27.1515 14.9075 27.1587C14.9885 27.1533 15.0697 27.1661 15.1452 27.1961C15.2208 27.2262 15.2887 27.2727 15.3442 27.3323C15.3925 27.3913 15.4269 27.4605 15.445 27.5347C15.4631 27.6089 15.4645 27.6863 15.4489 27.7611C15.4358 27.8321 15.4227 27.8873 15.4096 27.9373L15.9745 27.9189C16.0643 27.9156 16.1537 27.9327 16.2361 27.9689C16.283 27.9917 16.3237 28.0258 16.3545 28.0682C16.3853 28.1105 16.4053 28.1598 16.4128 28.2117C16.4203 28.2636 16.415 28.3166 16.3974 28.366C16.3798 28.4154 16.3505 28.4597 16.3119 28.495C16.1221 28.6429 15.8903 28.7259 15.6502 28.7318C15.4122 28.7318 15.1743 28.7475 14.9336 28.7554C14.8428 28.8507 14.7308 28.9228 14.6067 28.9659C14.4757 28.9969 14.3409 29.0084 14.2066 29.0001C14.0131 28.9738 13.9974 28.9106 13.9738 28.8396Z"
        fill="#15AC5B"
      />
      <path
        d="M17.4232 1.73639C17.2872 1.87318 16.874 2.28618 13.1942 2.20726C11.102 2.11519 10.7568 1.79426 10.7071 1.49174C10.6972 1.42427 10.7039 1.35539 10.7267 1.29116C10.7495 1.22693 10.7877 1.16934 10.8378 1.12345C10.9447 1.02555 11.0701 0.950388 11.2066 0.902483C11.782 0.678881 12.9275 0.515784 14.0573 0.5C14.5804 0.5 17.1565 0.5 17.5121 1.2392C17.5442 1.30521 17.5587 1.37848 17.5541 1.45182C17.5495 1.52515 17.526 1.59602 17.486 1.65747C17.4667 1.68503 17.4457 1.71139 17.4232 1.73639Z"
        fill="#15AC5B"
      />
      <path
        d="M25.3658 7.69205C25.1936 7.85452 24.973 7.95531 24.7381 7.97879C23.671 8.13136 21.4428 6.61087 20.5379 4.78786C20.0959 3.89871 20.292 3.41994 20.5379 3.1753L20.5562 3.15688C21.2414 2.51502 22.7374 3.12795 24.2778 4.67737C25.5174 5.92691 25.9437 7.10806 25.3658 7.69205Z"
        fill="#15AC5B"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect
          width="28.5"
          height="28.5"
          fill="white"
          transform="translate(0.083252 0.5)"
        />
      </clipPath>
    </defs>
  </svg>
);
