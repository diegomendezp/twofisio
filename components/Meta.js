import Head from "next/head";

const Meta = ({title}) => {
  return (
    <React.Fragment>
      <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <title>{title}</title>
          <link rel="icon" type="image/png" sizes="16x16" href={`${process.env.ASSET_PREFIX}/static/favicon/16Twofiso-favicon.ico`} />
          <link rel="icon" type="image/png" sizes="32x32" href={`${process.env.ASSET_PREFIX}/static/favicon/32Twofiso-favicon.ico`} />
          <link rel="icon" type="image/png" sizes="64x64" href={`${process.env.ASSET_PREFIX}/static/favicon/64Twofiso-favicon.ico`} />
          <link rel="icon" type="image/png" sizes="128x128" href={`${process.env.ASSET_PREFIX}/static/favicon/128Twofiso-favicon.ico`} />
        </Head>
        <style jsx global>{`
          @font-face {
            font-family: "Monserrat-Semibold";
            src: url(${process.env.ASSET_PREFIX}/static/fonts/Montserrat/Montserrat-SemiBold.ttf) format("truetype");
            font-weight: normal;
            font-style: normal;
          }
          @font-face {
            font-family: "Monserrat-Regular";
            src: url(${process.env.ASSET_PREFIX}/static/fonts/Montserrat/Montserrat-Regular.ttf) format("truetype");
            font-weight: normal;
            font-style: normal;
          }
  
          body {
            margin: 0;
            padding: 0;
            max-width: 100%;
          }

          .center {
            width: 100%;
            height: auto;
            display: flex;
            justify-content: center;
          }
        `}</style>
    </React.Fragment>
  );
};

export default Meta;