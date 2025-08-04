import "./globals.css";
import 'swiper/css';
import '../../node_modules/aos/dist/aos.css'; 
import "../../public/css/animate.min.css";
import "../../public/css/fontawesome-all.min.css";
import "../../node_modules/react-modal-video/css/modal-video.css"
import '../../node_modules/react-18-image-lightbox/src/style.css';
import "react-circular-progressbar/dist/styles.css";

export const metadata = {
  title: "Proloy - Tailwind Personal Portfolio/CV/Resume React Nextjs Template",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en" className="scroll-smooth">
    <head>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600&family=Kanit:wght@100;200;300;400;500;600;700;800&display=swap" rel="stylesheet"/>
  <link rel="shortcut icon" type="image/x-icon" href="./favicon.ico" />
    </head>
      <body>
          {children}
      </body>
    </html>
  );
}
