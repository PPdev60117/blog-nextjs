/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
          port: '',
          pathname: '**',
        },
        {
          protocol: 'https',
          hostname: 'w7.pngwing.com',
          port: '',
          pathname: '**',
        },
      ],
      },
    // experimental:{
    //   appDir:true,
    //   serverComponentsExternalPackages : ["mongoose"]
    // },
    env: {
      GITHUB_APP_CLIENT_ID: 'e6788ba339a4840f1bbb',
      GITHUB_APP_CLIENT_SECRET: '6617893947e035cf43c4a2244ca1fb441b1c3042',
      NEXTAUTH_SECRET: 'mQ46qpFwfE1BHuqMC+qlm19qBAD9fVPgh28werwe3ASFlAfnKjM=',
    },
};

export default nextConfig;
