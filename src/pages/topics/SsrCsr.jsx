import React from "react";
import TryThis from "../../components/TryThis";
import TerminalSim from "../../components/TerminalSim";
import codeSnippets from "../../data/codeSnippets.json";

export default function SsrCsr() {
  return (
    <section>
      <h2 className="text-2xl text-green-400 font-bold mb-2">
        Server-Side Rendering (SSR) vs Client-Side Rendering (CSR)
      </h2>

      <div className="mb-6">
        <h3 className="text-green-300 text-lg font-semibold mb-1">What is Rendering?</h3>
        <p className="text-green-100 mb-2">
          Rendering is the process of generating the HTML that users see in their browsers. In web development, rendering can happen on the server (SSR) or in the browser (CSR).
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-green-300 text-lg font-semibold mb-1">How SSR Works</h3>
        <p className="text-green-100 mb-2">
          In SSR, the server generates the full HTML for a page on each request and sends it to the browser. The browser displays the content immediately, and JavaScript may then "hydrate" the page for interactivity.
        </p>
        <TerminalSim
          steps={[
            { text: "$ curl https://example.com", type: "command", delay: 900 },
            { text: "<html>...Full page HTML...</html>", type: "output", delay: 1200 },
            { text: "Browser displays content instantly.", type: "output", delay: 1000 }
          ]}
        />
      </div>

      <div className="mb-6">
        <h3 className="text-green-300 text-lg font-semibold mb-1">How CSR Works</h3>
        <p className="text-green-100 mb-2">
          In CSR, the server sends a minimal HTML shell and a JavaScript bundle. The browser downloads the JavaScript, which then renders the UI and fetches data as needed. The initial load may be slower, but navigation can be faster after the app loads.
        </p>
        <TerminalSim
          steps={[
            { text: "$ curl https://spa.com", type: "command", delay: 900 },
            { text: "<html><div id='root'></div><script src='app.js'></script></html>", type: "output", delay: 1200 },
            { text: "Browser runs JavaScript to render content.", type: "output", delay: 1000 }
          ]}
        />
      </div>

      <div className="mb-6">
        <h3 className="text-green-300 text-lg font-semibold mb-1">Where Each Is Used</h3>
        <ul className="list-disc list-inside text-green-100 mb-2">
          <li>
            <span className="font-semibold text-green-200">SSR:</span> News sites, blogs, e-commerce, and any site where SEO and fast first paint are important.
          </li>
          <li>
            <span className="font-semibold text-green-200">CSR:</span> Dashboards, web apps, and tools where user interaction is prioritized over SEO.
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="text-green-300 text-lg font-semibold mb-1">SSR vs CSR: Key Differences</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-800 border border-green-600 rounded-lg text-green-100 text-sm">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b border-green-600 text-green-300">Aspect</th>
                <th className="px-4 py-2 border-b border-green-600 text-green-300">SSR</th>
                <th className="px-4 py-2 border-b border-green-600 text-green-300">CSR</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border-b border-green-700">Initial Load</td>
                <td className="px-4 py-2 border-b border-green-700">Faster (HTML ready)</td>
                <td className="px-4 py-2 border-b border-green-700">Slower (JS must load & run)</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-green-700">SEO</td>
                <td className="px-4 py-2 border-b border-green-700">Excellent</td>
                <td className="px-4 py-2 border-b border-green-700">Limited</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-green-700">Interactivity</td>
                <td className="px-4 py-2 border-b border-green-700">Needs hydration</td>
                <td className="px-4 py-2 border-b border-green-700">Immediate after load</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b border-green-700">Performance</td>
                <td className="px-4 py-2 border-b border-green-700">Better for first paint</td>
                <td className="px-4 py-2 border-b border-green-700">Better for dynamic apps</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Use Case</td>
                <td className="px-4 py-2">Content, SEO, blogs</td>
                <td className="px-4 py-2">Apps, dashboards</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-green-300 text-lg font-semibold mb-1">Real-World Analogy</h3>
        <p className="text-green-100 mb-2">
          SSR is like ordering a pizza and having it delivered ready to eat. CSR is like getting a pizza kit and baking it yourself at home.
        </p>
      </div>

      <TryThis snippet={codeSnippets.ssrCsr} />
    </section>
  );
}
