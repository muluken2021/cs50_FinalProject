import { useState, useEffect } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import AddTransaction from "./components/AddTransaction";
import TransactionList from "./components/TransactionList";
import { getTransactions } from "./services/api";
import AffinityCarousel from "./components/AffinityCarousel";
import VideoTabs from "./components/VideoTabs";
import FocusCarousel from "./components/FocusCarousel";
import GroceryHero from "./components/GroceryHero";
import LuxuryCarHero from "./components/LuxuryCarHero";
import InspirationSection from "./components/InspirationSection";
import AppleEarbudsHero from "./components/AppleEarbudsHero";
import KittlChat from "./components/KittlChat";
import Navbar from "./components/Navbar";
import KittlHero from "./components/KittlHero";
import MockupFeature from "./components/MockupFeature";
import ContactSection from "./components/ContactSection";
import WibifyNavbar from "./components/WibifyNavbar";
import Testimonials from "./components/Testimonials";
import PortfolioGrid from "./components/PortfolioGrid";
import HighEndPortfolio from "./components/HighEndPortfolio";
import CinematicProductScroll from "./components/CinematicProductScroll";
import OverlapScroll from "./components/OverlapScroll";
import DownloadQR from "./components/DownloadQR";
import CinematicHero from "./components/CinematicHero";
import StatsSection from "./components/StatsSection";
import IntegrationSection from "./components/IntegrationSection";
import PricingSection from "./components/PricingSection";
import FAQSection from "./components/FAQSection";
import ForgotPassword from "./components/ForgotPassword";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import CheckoutPage from "./components/CheckoutPage";

function App() {
  const [userId, setUserId] = useState(localStorage.getItem("userId") || null);
  const [transactions, setTransactions] = useState([]);
  const [showRegister, setShowRegister] = useState(false);

  const fetchTransactions = async () => {
    if (!userId) return;
    const res = await getTransactions(userId);
    setTransactions(res.data);
  };

  useEffect(() => {
    fetchTransactions();
  }, [userId]);

  if (!userId) {
    return showRegister ? (
      // <div className="flex flex-col items-center justify-center h-screen">
      //   <Register onRegisterSuccess={() => setShowRegister(false)} />
      //   <button onClick={() => setShowRegister(false)} className="mt-2 text-blue-500">Go to Login</button>
        
      // </div>
      <div>
        {/* <Navbar /> */}
        <GroceryHero />
        <LuxuryCarHero />
        <InspirationSection />
        <AffinityCarousel />
        <VideoTabs />
        <FocusCarousel />
        <AppleEarbudsHero />
        <KittlChat />
        <KittlHero />
        <MockupFeature />
        <ContactSection />
        <WibifyNavbar />
        <PortfolioGrid />
        <Testimonials />
        <DownloadQR/>
        <CinematicHero />
        <StatsSection />
        <IntegrationSection />
        <PricingSection />
        <FAQSection />
        <ForgotPassword />
        <SignIn />
        <SignUp />
        <CheckoutPage />

        <HighEndPortfolio/>
         <OverlapScroll />
        <CinematicProductScroll />
       

        
      </div>

    ) : (
      <div className="flex flex-col items-center justify-center h-screen">
        <Login onLogin={setUserId} />
        <button onClick={() => setShowRegister(true)} className="mt-2 text-blue-500">Create Account</button>
      </div>
    );
  }

  return (
    <div className="p-8">
      <button onClick={() => { localStorage.removeItem("userId"); setUserId(null); }} className="mb-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Logout</button>

      <AddTransaction userId={userId} refresh={fetchTransactions} />
      <TransactionList transactions={transactions} refresh={fetchTransactions} />
    </div>
  );
}

export default App;