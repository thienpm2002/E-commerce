import HomePage from "../pages/Home";
import ContactPage from "../pages/Contact";
import IntroductionPage from "../pages/Introduction";
import AuthPage from "../pages/Auth";


const publicRoutes = [
   {path: '/', element: <HomePage />},
   {path: '/contact', element: <ContactPage />},
   {path: '/introduction', element: <IntroductionPage />},
   {path: '/auth', element: <AuthPage />},
];

const privateRoutes = [

];

export {publicRoutes, privateRoutes};
