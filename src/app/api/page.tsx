import { Metadata } from "next";
import Link from "next/link";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { InfoIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "EcobankPay API Reference",
  description: "API reference documentation for EcobankPay payment gateway",
};

export default function APIPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          API Reference
        </h1>
        <p className="text-lg text-muted-foreground">
          Comprehensive documentation for the EcobankPay API
        </p>
      </div>

      <Alert>
        <InfoIcon className="h-4 w-4" />
        <AlertTitle>Complete API Documentation</AlertTitle>
        <AlertDescription>
          This section provides detailed information about all available API
          endpoints, required parameters, response formats, and error codes.
        </AlertDescription>
      </Alert>

      <div className="space-y-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Getting Started with the API
        </h2>
        <p className="leading-7">
          The EcobankPay API allows you to integrate payment processing
          capabilities into your applications. Use the links below to explore
          specific aspects of the API:
        </p>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2 my-8">
          <div className="bg-card hover:bg-accent transition-colors rounded-lg p-6 border">
            <h3 className="text-xl font-semibold mb-2">Request Format</h3>
            <p className="text-muted-foreground mb-4">
              Learn about the API request structure, required headers, and
              authentication methods.
            </p>
            <Link
              href="/api/request"
              className="text-primary hover:underline font-medium"
            >
              View Request Documentation →
            </Link>
          </div>

          <div className="bg-card hover:bg-accent transition-colors rounded-lg p-6 border">
            <h3 className="text-xl font-semibold mb-2">Response Format</h3>
            <p className="text-muted-foreground mb-4">
              Understand the standard response structure and how to handle
              different response types.
            </p>
            <Link
              href="/api/response"
              className="text-primary hover:underline font-medium"
            >
              View Response Documentation →
            </Link>
          </div>

          <div className="bg-card hover:bg-accent transition-colors rounded-lg p-6 border">
            <h3 className="text-xl font-semibold mb-2">Error Codes</h3>
            <p className="text-muted-foreground mb-4">
              Comprehensive list of all possible error codes and their meanings.
            </p>
            <Link
              href="/api/error-codes"
              className="text-primary hover:underline font-medium"
            >
              View Error Codes →
            </Link>
          </div>

          <div className="bg-card hover:bg-accent transition-colors rounded-lg p-6 border">
            <h3 className="text-xl font-semibold mb-2">Webhooks</h3>
            <p className="text-muted-foreground mb-4">
              Learn how to implement webhooks to receive payment notifications.
            </p>
            <Link
              href="/api/webhook"
              className="text-primary hover:underline font-medium"
            >
              View Webhook Documentation →
            </Link>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          API Endpoints
        </h2>

        <div className="overflow-y-auto rounded-lg border">
          <table className="w-full">
            <thead>
              <tr className="bg-muted">
                <th className="px-4 py-3 text-left font-medium">Endpoint</th>
                <th className="px-4 py-3 text-left font-medium">Method</th>
                <th className="px-4 py-3 text-left font-medium">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-3 font-mono text-sm">
                  <div className="text-primary">/v1/mobile_agents_v2</div>
                </td>
                <td className="px-4 py-3 font-mono text-sm">POST</td>
                <td className="px-4 py-3">Initiate mobile money payment</td>
              </tr>
              <tr className="border-t bg-muted/50">
                <td className="px-4 py-3 font-mono text-sm">
                  <div className="text-primary">/v1/card_payments</div>
                </td>
                <td className="px-4 py-3 font-mono text-sm">POST</td>
                <td className="px-4 py-3">Initiate card payment</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-3 font-mono text-sm">
                  <div className="text-primary">/v1/qr_payments</div>
                </td>
                <td className="px-4 py-3 font-mono text-sm">POST</td>
                <td className="px-4 py-3">Generate QR code for payment</td>
              </tr>
              <tr className="border-t bg-muted/50">
                <td className="px-4 py-3 font-mono text-sm">
                  <div className="text-primary">
                    /v1/gateway/json_status_chk
                  </div>
                </td>
                <td className="px-4 py-3 font-mono text-sm">GET</td>
                <td className="px-4 py-3">Check payment status</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Authentication
        </h2>
        <p className="leading-7">
          All API requests must be authenticated using your Merchant Key and a
          secure hash. The secure hash is created using HMAC SHA-256 with your
          merchant secret as the key.
        </p>

        <div className="p-6 bg-muted rounded-lg my-4">
          <h3 className="text-lg font-semibold mb-3">Secure Hash Generation</h3>
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              Sort all request parameters alphabetically by parameter name
            </li>
            <li>
              Concatenate the key-value pairs in the format
              "key1=value1&key2=value2"
            </li>
            <li>
              Create an HMAC SHA-256 hash using your Merchant Secret as the key
            </li>
            <li>Convert the hash to a hexadecimal string</li>
            <li>
              Include this value as the secure_hash parameter in your request
            </li>
          </ol>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Additional Resources
        </h2>

        <div className="grid gap-4 grid-cols-1 md:grid-cols-3 my-6">
          <Link
            href="/guides/mobile-money"
            className="p-4 rounded-lg border hover:bg-accent transition-colors flex flex-col items-center text-center"
          >
            <div className="font-semibold mb-2">Mobile Money Integration</div>
            <div className="text-sm text-muted-foreground">
              Step-by-step guide to integrate mobile money payments
            </div>
          </Link>

          <Link
            href="/guides/card-payments"
            className="p-4 rounded-lg border hover:bg-accent transition-colors flex flex-col items-center text-center"
          >
            <div className="font-semibold mb-2">Card Payment Integration</div>
            <div className="text-sm text-muted-foreground">
              Detailed instructions for card payment integration
            </div>
          </Link>

          <Link
            href="/guides/security"
            className="p-4 rounded-lg border hover:bg-accent transition-colors flex flex-col items-center text-center"
          >
            <div className="font-semibold mb-2">Security Best Practices</div>
            <div className="text-sm text-muted-foreground">
              Guidelines for securing your payment integration
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
