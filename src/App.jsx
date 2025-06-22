import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Concepts from "./pages/Concepts";
import Technologies from "./pages/Technologies";
import QuizPage from "./pages/QuizPage";
import GitGithub from "./pages/topics/GitGithub";
import Databases from "./pages/topics/Databases";
import LinuxCommands from "./pages/topics/LinuxCommands";
import ServerFrameworks from "./pages/topics/ServerFrameworks";
import HttpWebProtocols from "./pages/topics/HttpWebProtocols";
import RestApis from "./pages/topics/RestApis";
import Security from "./pages/topics/Security";
import GraphqlSwaggerPostman from "./pages/topics/GraphqlSwaggerPostman";
import Networking from "./pages/topics/Networking";
import DevOps from "./pages/topics/DevOps";
import SsrCsr from "./pages/topics/SsrCsr";
import Auth from "./pages/topics/Auth";
import Microservices from "./pages/topics/Microservices";
import WebSockets from "./pages/topics/WebSockets";
import ClientServerArchitecture from "./pages/topics/ClientServerArchitecture";
import RequestResponseCycle from "./pages/topics/RequestResponseCycle";
import Middleware from "./pages/topics/Middleware";

function App() {
  return (
    <div className="bg-gray-900 min-h-screen text-green-200 font-mono">
      <Router>
        <Header />
        <main className="max-w-5xl mx-auto py-8 px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/concepts" element={<Concepts />} />
            <Route path="/technologies" element={<Technologies />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/topics/git-github" element={<GitGithub />} />
            <Route path="/topics/databases" element={<Databases />} />
            <Route path="/topics/linux-commands" element={<LinuxCommands />} />
            <Route path="/topics/server-frameworks" element={<ServerFrameworks />} />
            <Route path="/topics/http-web-protocols" element={<HttpWebProtocols />} />
            <Route path="/topics/rest-apis" element={<RestApis />} />
            <Route path="/topics/security" element={<Security />} />
            <Route path="/topics/graphql-swagger-postman" element={<GraphqlSwaggerPostman />} />
            <Route path="/topics/networking" element={<Networking />} />
            <Route path="/topics/devops" element={<DevOps />} />
            <Route path="/topics/ssr-csr" element={<SsrCsr />} />
            <Route path="/topics/auth" element={<Auth />} />
            <Route path="/topics/microservices" element={<Microservices />} />
            <Route path="/topics/websockets" element={<WebSockets />} />
            <Route path="/topics/client-server-architecture" element={<ClientServerArchitecture />} />
            <Route path="/topics/request-response-cycle" element={<RequestResponseCycle />} />
            <Route path="/topics/middleware" element={<Middleware />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
