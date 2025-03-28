import { Metadata } from "next"
import Link from "next/link"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { InfoIcon } from "lucide-react"

export const metadata: Metadata = {
  title: "EcobankPay Setup Guide",
  description: "How to set up and prepare your environment for EcobankPay integration",
}

export default function SetupGuidePage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Setup Guide
        </h1>
        <p className="text-lg text-muted-foreground">
          Get your development environment ready for EcobankPay integration
        </p>
      </div>

      <Alert>
        <InfoIcon className="h-4 w-4" />
        <AlertTitle>Preparation Is Key</AlertTitle>
        <AlertDescription>
          Complete all setup steps before attempting to integrate with the EcobankPay API. A proper setup will save development time and help prevent common integration issues.
        </AlertDescription>
      </Alert>

      <div className="space-y-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Prerequisites
        </h2>
        <p className="leading-7">
          Before you begin the integration process, ensure you have the following:
        </p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>An active merchant account with EcobankPay</li>
          <li>Your merchant key and secret (provided by EcobankPay)</li>
          <li>API endpoint URLs for both sandbox and production environments</li>
          <li>Basic knowledge of REST API concepts and JSON</li>
          <li>Development environment with HTTPS support for callback URLs</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Account Setup
        </h2>
        <p className="leading-7">
          To obtain your merchant account and credentials:
        </p>
        <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">
          <li>Contact EcobankPay's merchant support team at support@ecobankpay.com</li>
          <li>Complete the merchant onboarding form with your business details</li>
          <li>Provide the necessary legal and business documentation</li>
          <li>Once approved, you'll receive your merchant key and secret</li>
          <li>Request access to the sandbox environment for testing</li>
        </ol>
      </div>

      <div className="space-y-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Environment Setup
        </h2>
        <p className="leading-7">
          Configure your development environment:
        </p>

        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          1. API Endpoints
        </h3>
        <p className="leading-7">
          Use the following endpoints for your integration:
        </p>
        <div className="my-6 overflow-y-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-muted">
                <th className="px-4 py-2 text-left font-medium">Environment</th>
                <th className="px-4 py-2 text-left font-medium">Base URL</th>
                <th className="px-4 py-2 text-left font-medium">Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">Sandbox</td>
                <td className="px-4 py-2"><code>https://sandbox.ecobankpay.com/api/v1</code></td>
                <td className="px-4 py-2">Testing and development</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">Production</td>
                <td className="px-4 py-2"><code>https://api.ecobankpay.com/api/v1</code></td>
                <td className="px-4 py-2">Live transactions</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          2. Authentication Headers
        </h3>
        <p className="leading-7">
          For all API requests, include these authentication headers:
        </p>
        <div className="my-6 overflow-y-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-muted">
                <th className="px-4 py-2 text-left font-medium">Header Name</th>
                <th className="px-4 py-2 text-left font-medium">Value</th>
                <th className="px-4 py-2 text-left font-medium">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">x-merchant-key</td>
                <td className="px-4 py-2"><code>Your-Merchant-Key</code></td>
                <td className="px-4 py-2">Your unique merchant identifier</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">x-api-hash</td>
                <td className="px-4 py-2"><code>HMAC-SHA256-Hash</code></td>
                <td className="px-4 py-2">HMAC signature of the request body</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">Content-Type</td>
                <td className="px-4 py-2"><code>application/json</code></td>
                <td className="px-4 py-2">All requests use JSON format</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Next Steps
        </h2>
        <p className="leading-7">
          Once your environment is set up, you can proceed with integrating specific payment methods:
        </p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>
            <Link href="/guides/mobile-money" className="text-primary hover:underline">
              Mobile Money Integration
            </Link>
          </li>
          <li>
            <Link href="/guides/card-payments" className="text-primary hover:underline">
              Card Payments Implementation
            </Link>
          </li>
          <li>
            <Link href="/guides/qr-code" className="text-primary hover:underline">
              QR Code Payment Solutions
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex justify-between mt-10">
        <Link href="/guides" className="text-primary underline hover:text-primary/80">
          ← Back to Guides
        </Link>
        <Link href="/guides/mobile-money" className="text-primary underline hover:text-primary/80">
          Next: Mobile Money Integration →
        </Link>
      </div>
    </div>
  )
}
