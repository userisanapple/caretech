import React from "react";

const Committees = () => {
  const committees = [
    {
      icon: <Confetti className="w-14 h-14 text-white" />,
      name: "Events Committee",
      description:
        "Create fun, memorable events and get the opportunity to handle event details alongside bringing in inspiring speakers.",
    },
    {
      icon: <Palette className="w-14 h-14 text-white" />,
      name: "Marketing Committee",
      description:
        "Design campaigns and posts alongside running our socials to inform, inspire, and attract people to our healthcare solutions.",
    },
    {
      icon: <Globe className="w-14 h-14 text-white" />,
      name: "Outreach Committee",
      description:
        "Secure meaningful collaborations with tech companies and health organizations alongside bringing our apps to those who need them the most.",
    },
    {
      icon: <ChartBar className="w-14 h-14 text-white" />,
      name: "Project Committee",
      description:
        "Brainstorm and shape the next big projects that drive our work through conducting research.",
    },
    {
      icon: <Laptop className="w-14 h-14 text-white" />,
      name: "Tech Committee",
      description:
        "Design, code, and develop cutting-edge applications designed to impact and improve healthcare.",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-black to-[#294B7B] p-8">
      <h1 className="text-6xl md:text-8xl mt-16 text-white text-center mb-8 font-jersey">
        Committees
      </h1>
      <div className="mx-auto px-4">
        <div className="flex flex-row flex-wrap justify-center gap-1">
          {/*  */}
          {committees.slice(0, 3).map((committee, index) => (
            <CommitteeCard key={index} committee={committee} />
          ))}
        </div>
        <div className="flex flex-row flex-wrap justify-center gap-12">
          {/*  */}
          {committees.slice(3).map((committee, index) => (
            <div
              key={index}
              className={`${
                index === 0 ? "justify-self-end" : "justify-self-start"
              }`}
            >
              <CommitteeCard key={index} committee={committee} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const CommitteeCard = ({
  committee,
}: {
  committee: { icon: JSX.Element; name: string; description: string };
}) => {
  return (
    <div className="p-10 flex flex-row items-start max-w-xl">
      <div className="mr-4">{committee.icon}</div>
      <div className="flex flex-col text-xl sm:text-3xl text-white font-normal">
        <h2 className="mb-2 font-bold">{committee.name}</h2>
        <p>{committee.description}</p>
      </div>
    </div>
  );
};

export default Committees;
function Confetti({ className }: { className: string }) {
  return (
    <svg
      width="49"
      height="49"
      viewBox="0 0 48 49"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.104 5.05355C21.4435 5.26095 21.6867 5.59472 21.7801 5.98141C21.8735 6.36811 21.8094 6.77607 21.602 7.11555C21.4492 7.36476 21.3848 7.65822 21.4193 7.94854C21.4537 8.23885 21.5851 8.50907 21.792 8.71555L21.988 8.90955C23.164 10.0876 23.598 11.8176 23.118 13.4096C22.9991 13.7855 22.7369 14.0995 22.3882 14.2835C22.0395 14.4676 21.6324 14.507 21.2549 14.3932C20.8774 14.2793 20.5599 14.0215 20.3711 13.6753C20.1823 13.3291 20.1373 12.9226 20.246 12.5436C20.3251 12.2807 20.3315 12.0013 20.2646 11.7351C20.1977 11.4689 20.06 11.2258 19.866 11.0316L19.672 10.8356C18.9895 10.1531 18.5564 9.26082 18.4425 8.30236C18.3286 7.3439 18.5405 6.37499 19.044 5.55155C19.1466 5.3833 19.2812 5.23689 19.4404 5.1207C19.5995 5.00451 19.78 4.92081 19.9714 4.87437C20.1629 4.82794 20.3617 4.81969 20.5564 4.85009C20.751 4.88049 20.9378 4.94895 21.106 5.05155M36.112 10.2176C36.5018 10.2962 36.8445 10.5264 37.0646 10.8575C37.2848 11.1887 37.3644 11.5937 37.286 11.9836L36.998 13.4236C36.602 15.4036 35.174 17.0236 33.258 17.6616C32.362 17.9616 31.694 18.7156 31.51 19.6416L31.222 21.0816C31.1834 21.2747 31.1071 21.4584 30.9975 21.6221C30.888 21.7858 30.7472 21.9263 30.5833 22.0356C30.4194 22.1449 30.2356 22.2208 30.0423 22.2591C29.8491 22.2973 29.6502 22.2972 29.457 22.2586C29.2639 22.2199 29.0802 22.1437 28.9165 22.0341C28.7528 21.9245 28.6123 21.7837 28.503 21.6198C28.3937 21.4559 28.3178 21.2721 28.2795 21.0789C28.2412 20.8856 28.2414 20.6867 28.28 20.4936L28.568 19.0536C28.964 17.0716 30.392 15.4536 32.308 14.8136C33.204 14.5176 33.872 13.7616 34.058 12.8336L34.344 11.3936C34.3827 11.2004 34.4591 11.0167 34.5688 10.853C34.6785 10.6894 34.8194 10.5489 34.9834 10.4397C35.1474 10.3305 35.3313 10.2547 35.5246 10.2165C35.7179 10.1784 35.9169 10.1788 36.11 10.2176M43.55 27.8956C43.1958 27.7398 42.8044 27.689 42.4222 27.7493C42.0399 27.8096 41.6831 27.9783 41.394 28.2355C40.6049 28.936 39.6152 29.37 38.5654 29.4759C37.5156 29.5818 36.4591 29.3543 35.546 28.8256L35.12 28.5816C34.9493 28.4831 34.7997 28.3519 34.6796 28.1956C34.5596 28.0393 34.4715 27.8608 34.4205 27.6705C34.3694 27.4801 34.3563 27.2815 34.382 27.0861C34.4076 26.8907 34.4715 26.7023 34.57 26.5316C34.6685 26.3608 34.7997 26.2112 34.956 26.0912C35.1123 25.9711 35.2908 25.8831 35.4811 25.832C35.6715 25.7809 35.87 25.7678 36.0655 25.7935C36.2609 25.8192 36.4493 25.8831 36.62 25.9816L37.046 26.2276C37.802 26.6636 38.75 26.5676 39.404 25.9896C40.1214 25.3528 41.0061 24.935 41.9535 24.7854C42.901 24.6358 43.8714 24.7608 44.75 25.1456L45.334 25.3996C45.6987 25.5589 45.9851 25.8567 46.1303 26.2273C46.2754 26.5978 46.2674 27.0109 46.108 27.3756C45.9486 27.7402 45.6509 28.0266 45.2803 28.1718C44.9098 28.3169 44.4967 28.3089 44.132 28.1496L43.55 27.8956ZM14.588 8.65555C14.6878 8.55601 14.8063 8.4771 14.9366 8.42333C15.0669 8.36956 15.2065 8.34198 15.3474 8.34216C15.4884 8.34235 15.6279 8.3703 15.7581 8.42441C15.8883 8.47853 16.0065 8.55775 16.106 8.65755C16.2056 8.75736 16.2845 8.87579 16.3383 9.00609C16.392 9.13639 16.4196 9.27601 16.4194 9.41697C16.4192 9.55792 16.3913 9.69747 16.3372 9.82763C16.2831 9.95778 16.2038 10.076 16.104 10.1756C15.9025 10.3766 15.6293 10.4893 15.3446 10.4889C15.0599 10.4886 14.7871 10.3751 14.586 10.1736C14.385 9.97199 14.2723 9.69882 14.2726 9.41414C14.273 9.12946 14.3865 8.85659 14.588 8.65555ZM26.564 15.0896C26.4644 14.9899 26.346 14.9108 26.2158 14.8569C26.0856 14.8029 25.946 14.7752 25.805 14.7752C25.6641 14.7752 25.5245 14.8029 25.3943 14.8569C25.264 14.9108 25.1457 14.9899 25.046 15.0896C24.9464 15.1892 24.8673 15.3076 24.8133 15.4378C24.7594 15.568 24.7316 15.7076 24.7316 15.8486C24.7316 15.9895 24.7594 16.1291 24.8133 16.2593C24.8673 16.3895 24.9464 16.5079 25.046 16.6076C25.1458 16.7072 25.2643 16.7863 25.3946 16.8402C25.525 16.894 25.6647 16.9217 25.8057 16.9216C25.9468 16.9216 26.0864 16.8937 26.2167 16.8396C26.347 16.7856 26.4654 16.7064 26.565 16.6066C26.6647 16.5067 26.7437 16.3883 26.7976 16.2579C26.8515 16.1276 26.8792 15.9879 26.8791 15.8468C26.879 15.7058 26.8512 15.5661 26.7971 15.4359C26.743 15.3056 26.6638 15.1892 26.564 15.0896ZM35.046 21.0896C35.1456 20.9899 35.2638 20.9108 35.3939 20.8568C35.524 20.8028 35.6635 20.775 35.8043 20.7749C35.9452 20.7748 36.0847 20.8024 36.2149 20.8563C36.3451 20.9101 36.4634 20.989 36.563 21.0886C36.6627 21.1881 36.7418 21.3063 36.7958 21.4364C36.8498 21.5665 36.8776 21.706 36.8777 21.8468C36.8778 21.9877 36.8501 22.1272 36.7963 22.2574C36.7425 22.3876 36.6636 22.5059 36.564 22.6056C36.363 22.8069 36.0902 22.92 35.8057 22.9202C35.5212 22.9204 35.2483 22.8076 35.047 22.6066C34.8457 22.4055 34.7325 22.1327 34.7324 21.8483C34.7322 21.5638 34.845 21.2908 35.046 21.0896ZM40.366 31.4016C40.1647 31.2003 39.8917 31.0872 39.607 31.0872C39.3223 31.0872 39.0493 31.2003 38.848 31.4016C38.6467 31.6028 38.5336 31.8759 38.5336 32.1606C38.5336 32.4452 38.6467 32.7183 38.848 32.9196C38.9477 33.0192 39.066 33.0983 39.1963 33.1522C39.3265 33.2062 39.4661 33.2339 39.607 33.2339C39.748 33.2339 39.8876 33.2062 40.0178 33.1522C40.148 33.0983 40.2664 33.0192 40.366 32.9196C40.4657 32.8199 40.5448 32.7015 40.5987 32.5713C40.6527 32.4411 40.6804 32.3015 40.6804 32.1606C40.6804 32.0196 40.6527 31.88 40.5987 31.7498C40.5448 31.6196 40.4657 31.5012 40.366 31.4016ZM15.676 41.2575C11.152 42.7495 8.76803 43.3736 7.45003 42.0555C5.99003 40.5956 6.91203 37.8296 8.75603 32.2996L12.136 22.1616C13.4 18.3696 14.142 16.1416 15.38 15.2376L15.37 15.2896C15.2711 15.7749 15.1791 16.2616 15.094 16.7496C14.8625 18.0381 14.6558 19.331 14.474 20.6276C14.042 23.6936 13.644 27.6115 13.85 30.7416C13.974 32.6356 14.368 34.9856 14.72 36.8216C14.9129 37.8266 15.121 38.8287 15.344 39.8275L15.384 40.0135L15.676 41.2575ZM26.81 37.5476L27.344 37.3696C31.94 35.8376 34.238 35.0716 34.664 33.2596C35.094 31.4476 33.38 29.7336 29.954 26.3076L26.576 22.9296L26.566 22.9596L26.402 23.4936C26.266 23.9536 26.082 24.5935 25.9 25.3256C25.526 26.8235 25.186 28.5696 25.186 29.8856C25.186 31.2016 25.526 32.9475 25.9 34.4455C26.1114 35.288 26.3488 36.1238 26.612 36.9515L26.622 36.9855L26.626 36.9935L26.81 37.5476ZM18.332 15.7836L18.432 15.2936C19.658 16.0136 21.11 17.4635 23.196 19.5515L24.202 20.5556L23.778 21.8356L23.758 21.8916L23.708 22.0515L23.528 22.6336C23.382 23.1256 23.186 23.8136 22.988 24.5996C22.604 26.1376 22.186 28.1816 22.186 29.8856C22.186 31.5896 22.606 33.6336 22.988 35.1716C23.2157 36.0822 23.4725 36.9853 23.758 37.8796L23.964 38.4976L18.534 40.3076L18.32 39.3876L18.31 39.3436L18.27 39.1696L18.124 38.5096C18.004 37.9456 17.838 37.1576 17.664 36.2575C17.318 34.4436 16.954 32.2456 16.844 30.5456C16.658 27.7376 17.018 24.0736 17.444 21.0456C17.6882 19.3169 17.9777 17.595 18.312 15.8816L18.326 15.8076L18.33 15.7876L18.332 15.7836ZM30.64 5.19555C30.942 5.15555 31.496 5.13555 31.934 5.57555C32.372 6.01555 32.354 6.56755 32.314 6.87155C32.2578 7.19526 32.1816 7.5152 32.086 7.82955L32.014 8.08155L32.144 8.28555C32.318 8.56355 32.506 8.86155 32.622 9.12555C32.752 9.42555 32.9 9.92955 32.622 10.4576C32.348 10.9776 31.858 11.1496 31.548 11.2196C31.264 11.2836 30.91 11.3116 30.574 11.3396L30.32 11.3596H30.298L30.114 11.5836C29.894 11.8496 29.668 12.1256 29.454 12.3236C29.226 12.5296 28.798 12.8496 28.204 12.7696C27.59 12.6856 27.27 12.2396 27.116 11.9616C26.9697 11.6735 26.844 11.3754 26.74 11.0696L26.66 10.8496L26.44 10.7696C26.1349 10.6661 25.8375 10.5411 25.55 10.3956C25.27 10.2396 24.826 9.92155 24.742 9.30755C24.662 8.71155 24.982 8.28555 25.188 8.05755C25.384 7.84355 25.662 7.61755 25.928 7.39755L26.152 7.21355V7.19355L26.172 6.93755C26.198 6.59955 26.226 6.24555 26.292 5.96355C26.362 5.65155 26.532 5.16355 27.052 4.88955C27.582 4.60955 28.086 4.75955 28.384 4.88955C28.65 5.00355 28.948 5.19155 29.224 5.36755L29.43 5.49555L29.682 5.42555C30.01 5.33155 30.352 5.23355 30.64 5.19555ZM45.012 21.7596C45.946 20.8256 46.292 19.5676 45.78 18.4596C45.39 17.6196 44.606 17.0736 43.64 16.8675C43.436 15.9016 42.888 15.1176 42.048 14.7276C40.94 14.2176 39.682 14.5616 38.748 15.4976C38.208 16.0376 37.962 16.7636 37.848 17.4116C37.728 18.0716 37.728 18.7716 37.766 19.3836C37.8146 20.1344 37.9236 20.8802 38.092 21.6136C38.182 21.9736 38.476 22.3136 38.836 22.4016H38.84L38.894 22.4156C39.1039 22.4657 39.3153 22.5091 39.528 22.5456C39.938 22.6176 40.506 22.7036 41.124 22.7416C41.736 22.7816 42.436 22.7796 43.096 22.6616C43.744 22.5476 44.47 22.3016 45.012 21.7616"
        fill="#F9FDFF"
      />
    </svg>
  );
}

function Palette({ className }: { className: string }) {
  return (
    <svg
      width="48"
      height="49"
      viewBox="0 0 48 49"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24 44.7756C21.3736 44.7756 18.7728 44.2583 16.3463 43.2532C13.9198 42.2481 11.715 40.7749 9.85786 38.9178C6.10714 35.167 4 30.08 4 24.7756C4 19.4713 6.10714 14.3842 9.85786 10.6335C13.6086 6.88277 18.6957 4.77563 24 4.77563C35 4.77563 44 12.7756 44 22.7756C44 25.9582 42.7357 29.0105 40.4853 31.2609C38.2349 33.5114 35.1826 34.7756 32 34.7756H28.4C27.8 34.7756 27.4 35.1756 27.4 35.7756C27.4 35.9756 27.6 36.1756 27.6 36.3756C28.4 37.3756 28.8 38.5756 28.8 39.7756C29 42.5756 26.8 44.7756 24 44.7756ZM24 8.77563C19.7565 8.77563 15.6869 10.4613 12.6863 13.4619C9.68571 16.4625 8 20.5322 8 24.7756C8 29.0191 9.68571 33.0888 12.6863 36.0893C15.6869 39.0899 19.7565 40.7756 24 40.7756C24.6 40.7756 25 40.3756 25 39.7756C25 39.3756 24.8 39.1756 24.8 38.9756C24 37.9756 23.6 36.9756 23.6 35.7756C23.6 32.9756 25.8 30.7756 28.6 30.7756H32C34.1217 30.7756 36.1566 29.9328 37.6569 28.4325C39.1571 26.9322 40 24.8974 40 22.7756C40 14.9756 32.8 8.77563 24 8.77563ZM13 20.7756C14.6 20.7756 16 22.1756 16 23.7756C16 25.3756 14.6 26.7756 13 26.7756C11.4 26.7756 10 25.3756 10 23.7756C10 22.1756 11.4 20.7756 13 20.7756ZM19 12.7756C20.6 12.7756 22 14.1756 22 15.7756C22 17.3756 20.6 18.7756 19 18.7756C17.4 18.7756 16 17.3756 16 15.7756C16 14.1756 17.4 12.7756 19 12.7756ZM29 12.7756C30.6 12.7756 32 14.1756 32 15.7756C32 17.3756 30.6 18.7756 29 18.7756C27.4 18.7756 26 17.3756 26 15.7756C26 14.1756 27.4 12.7756 29 12.7756ZM35 20.7756C36.6 20.7756 38 22.1756 38 23.7756C38 25.3756 36.6 26.7756 35 26.7756C33.4 26.7756 32 25.3756 32 23.7756C32 22.1756 33.4 20.7756 35 20.7756Z"
        fill="#F9FDFF"
      />
    </svg>
  );
}
function Globe({ className }: { className: string }) {
  return (
    <svg
      width="48"
      height="49"
      viewBox="0 0 48 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M35.8 35.0556C35.28 33.4556 33.78 32.2756 32 32.2756H30V26.2756C30 25.7452 29.7893 25.2365 29.4142 24.8614C29.0391 24.4863 28.5304 24.2756 28 24.2756H16V20.2756H20C20.5304 20.2756 21.0391 20.0649 21.4142 19.6898C21.7893 19.3148 22 18.8061 22 18.2756V14.2756H26C27.0609 14.2756 28.0783 13.8542 28.8284 13.1041C29.5786 12.3539 30 11.3365 30 10.2756V9.45564C32.393 10.4204 34.5165 11.9506 36.1889 13.9153C37.8612 15.88 39.0326 18.2207 39.6027 20.7371C40.1728 23.2534 40.1247 25.8704 39.4624 28.364C38.8001 30.8577 37.5435 33.1537 35.8 35.0556ZM22 40.1356C14.1 39.1556 8 32.4356 8 24.2756C8 23.0356 8.16 21.8356 8.42 20.6956L18 30.2756V32.2756C18 33.3365 18.4214 34.3539 19.1716 35.1041C19.9217 35.8542 20.9391 36.2756 22 36.2756M24 4.27563C21.3736 4.27563 18.7728 4.79295 16.3463 5.79804C13.9198 6.80314 11.715 8.27633 9.85786 10.1335C6.10714 13.8842 4 18.9713 4 24.2756C4 29.58 6.10714 34.667 9.85786 38.4178C11.715 40.2749 13.9198 41.7481 16.3463 42.7532C18.7728 43.7583 21.3736 44.2756 24 44.2756C29.3043 44.2756 34.3914 42.1685 38.1421 38.4178C41.8929 34.667 44 29.58 44 24.2756C44 21.6492 43.4827 19.0485 42.4776 16.622C41.4725 14.1955 39.9993 11.9907 38.1421 10.1335C36.285 8.27633 34.0802 6.80314 31.6537 5.79804C29.2272 4.79295 26.6264 4.27563 24 4.27563Z"
        fill="#F9FDFF"
      />
    </svg>
  );
}
function Laptop({ className }: { className: string }) {
  return (
    <svg
      width="48"
      height="49"
      viewBox="0 0 48 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clip-path="url(#clip0_69_1657)">
        <path
          d="M47.4096 37.7901L43.2 31.4757V9.87568C43.2 7.23088 41.04 5.07568 38.4 5.07568H9.6C6.9576 5.07568 4.8 7.23088 4.8 9.87568V31.4757L0.5904 37.7901C0 38.6757 0 39.1869 0 39.8757V41.0757C0 42.2757 1.2 43.4757 2.3976 43.4757H45.6024C46.8 43.4757 48 42.2757 48 41.0757V39.8757C48 39.1869 48 38.6757 47.4096 37.7901ZM16.8 38.6757L18.24 36.2757H29.76L31.2 38.6757H16.8ZM38.4 29.0757H9.6V9.87568H38.4V29.0757Z"
          fill="#F9FDFF"
        />
      </g>
      <defs>
        <clipPath id="clip0_69_1657">
          <rect
            width="48"
            height="48"
            fill="white"
            transform="translate(0 0.275635)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
function ChartBar({ className }: { className: string }) {
  return (
    <svg
      width="49"
      height="49"
      viewBox="0 0 49 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M38.7319 8.27555H30.3719C29.9624 7.10643 29.1997 6.09347 28.1893 5.37679C27.1789 4.66011 25.9707 4.27515 24.7319 4.27515C23.4932 4.27515 22.285 4.66011 21.2746 5.37679C20.2642 6.09347 19.5015 7.10643 19.0919 8.27555H10.7319C9.67204 8.27872 8.65646 8.70116 7.907 9.45062C7.15754 10.2001 6.7351 11.2157 6.73193 12.2756V40.2756C6.7351 41.3354 7.15754 42.351 7.907 43.1005C8.65646 43.8499 9.67204 44.2724 10.7319 44.2756H38.7319C39.7918 44.2724 40.8074 43.8499 41.5569 43.1005C42.3063 42.351 42.7288 41.3354 42.7319 40.2756V12.2756C42.7288 11.2157 42.3063 10.2001 41.5569 9.45062C40.8074 8.70116 39.7918 8.27872 38.7319 8.27555ZM24.7319 8.27555C25.1275 8.27555 25.5142 8.39285 25.8431 8.61261C26.172 8.83238 26.4283 9.14473 26.5797 9.51018C26.7311 9.87564 26.7707 10.2778 26.6935 10.6657C26.6163 11.0537 26.4259 11.4101 26.1461 11.6898C25.8664 11.9695 25.5101 12.16 25.1221 12.2371C24.7342 12.3143 24.332 12.2747 23.9666 12.1233C23.6011 11.9719 23.2888 11.7156 23.069 11.3867C22.8492 11.0578 22.7319 10.6711 22.7319 10.2756C22.7335 9.7456 22.9447 9.23782 23.3195 8.86309C23.6942 8.48836 24.202 8.27713 24.7319 8.27555ZM20.7319 18.2756L26.3119 23.8636L31.3519 18.8236L28.7319 16.2756H36.7319V24.2756L34.1799 21.6536L26.3159 29.5236L20.7319 23.9356L15.5599 29.1035L12.7319 26.2756L20.7319 18.2756ZM38.7319 38.2756H10.7319V34.2756H38.7319V38.2756Z"
        fill="#F9FDFF"
      />
    </svg>
  );
}
