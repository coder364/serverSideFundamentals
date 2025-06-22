import React from "react";
import TryThis from "../../components/TryThis";
import TerminalSim from "../../components/TerminalSim";
import codeSnippets from "../../data/codeSnippets.json";

export default function Networking() {
  return (
    <section>
      <h2 className="text-2xl text-green-400 font-bold mb-2">Networking Basics</h2>

      <div className="mb-6">
        <h3 className="text-green-300 text-lg font-semibold mb-1">What is Networking?</h3>
        <p className="text-green-100 mb-2">
          Networking is the practice of connecting computers and devices to share data and resources. In web development, networking enables communication between clients, servers, and other systems over the internet or local networks.
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-green-300 text-lg font-semibold mb-1">How It Works</h3>
        <p className="text-green-100 mb-2">
          Data travels across networks using protocols such as TCP/IP. Each device is identified by an IP address. DNS translates human-friendly domain names into IP addresses. Ports allow multiple services to run on a single device. Firewalls control traffic for security.
        </p>
        <TerminalSim
          steps={[
            { text: "$ ping google.com", type: "command", delay: 900 },
            { text: "Pinging google.com [142.250.72.14] with 32 bytes of data:", type: "output", delay: 1200 },
            { text: "Reply from 142.250.72.14: bytes=32 time=20ms TTL=117", type: "output", delay: 1000 },
            { text: "$ nslookup example.com", type: "command", delay: 900 },
            { text: "Non-authoritative answer:\nName: example.com\nAddress: 93.184.216.34", type: "output", delay: 1200 }
          ]}
        />
      </div>

      <div className="mb-6">
        <h3 className="text-green-300 text-lg font-semibold mb-1">Where It's Used</h3>
        <ul className="list-disc list-inside text-green-100 mb-2">
          <li>Web browsing, email, and file transfers</li>
          <li>APIs and microservices communication</li>
          <li>Cloud computing and remote servers</li>
          <li>IoT devices and smart home networks</li>
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="text-green-300 text-lg font-semibold mb-1">Key Concepts & Comparisons</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-800 border border-green-600 rounded-lg text-green-100 text-sm">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b border-green-600 text-green-300">Term</th>
                <th className="px-4 py-2 border-b border-green-600 text-green-300">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border-b border-green-700">TCP/IP</td>
                <td className="px-4 py-2 border-b border-green-700">Core protocol suite for reliable data transfer on the internet.</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-green-700">DNS</td>
                <td className="px-4 py-2 border-b border-green-700">Domain Name System, translates domain names to IP addresses.</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-green-700">Port</td>
                <td className="px-4 py-2 border-b border-green-700">A logical channel for network services (e.g., HTTP uses port 80).</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-green-700">HTTP vs HTTPS</td>
                <td className="px-4 py-2 border-b border-green-700">HTTPS encrypts data for security; HTTP does not.</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-green-700">Firewall</td>
                <td className="px-4 py-2 border-b border-green-700">A security system that controls incoming and outgoing network traffic.</td>
              </tr>
              <tr>
                <td className="px-4 py-2">IP Address</td>
                <td className="px-4 py-2">A unique identifier for a device on a network (e.g., 192.168.1.1).</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-green-300 text-lg font-semibold mb-1">Real-World Analogy</h3>
        <p className="text-green-100 mb-2">
          Think of networking like a postal system: IP addresses are street addresses, DNS is the address book, ports are apartment numbers, and protocols are the rules for delivering mail.
        </p>
      </div>

      <TryThis snippet={codeSnippets.networking} />
    </section>
  );
}
