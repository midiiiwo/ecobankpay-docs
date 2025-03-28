import { Metadata } from "next"
import Link from "next/link"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { InfoIcon } from "lucide-react"

export const metadata: Metadata = {
  title: "EcobankPay Testing Guide",
  description: "How to test your EcobankPay payment integration",
}

export default function TestingGuidePage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Testing Guide
        </h1>
        <p className="text-lg text-muted-foreground">
          Validate your EcobankPay integration before going live
        </p>
      </div>

      <Alert>
        <InfoIcon className="h-4 w-4" />
        <AlertTitle>Test Thoroughly Before Production</AlertTitle>
        <AlertDescription>
          Comprehensive testing in the sandbox environment ensures a smooth transition to production and helps avoid issues with real customer transactions.
        </AlertDescription>
      </Alert>

      <div className="space-y-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Overview
        </h2>
        <p className="leading-7">
          Testing your EcobankPay integration is a critical step before accepting real payments. This guide covers the testing process, including:
        </p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>Setting up your sandbox environment</li>
          <li>Test credentials and data</li>
          <li>Testing different payment methods</li>
          <li>Simulating successful and failed transactions</li>
          <li>Verification and validation processes</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Sandbox Environment
        </h2>

        <p className="leading-7">
          EcobankPay provides a dedicated sandbox environment for testing your integration:
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
          Obtaining Sandbox Credentials
        </h3>
        <p className="leading-7">
          To access the sandbox environment:
        </p>
        <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">
          <li>Contact EcobankPay support at <code>support@ecobankpay.com</code> to request sandbox access</li>
          <li>You will receive a Sandbox Merchant Key and Secret</li>
          <li>These credentials are different from your production credentials</li>
          <li>Use these sandbox credentials for all your testing</li>
        </ol>

        <div className="bg-muted p-4 rounded-md my-4">
          <p className="font-medium">Important:</p>
          <p className="text-sm mt-2">Never use production credentials in your development or testing environments, and never use sandbox credentials in production.</p>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Test Data for Payment Methods
        </h2>

        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          Mobile Money Test Data
        </h3>
        <p className="leading-7">
          Use these test phone numbers for simulating mobile money payments:
        </p>
        <div className="my-6 overflow-y-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-muted">
                <th className="px-4 py-2 text-left font-medium">Provider</th>
                <th className="px-4 py-2 text-left font-medium">Test Phone Numbers</th>
                <th className="px-4 py-2 text-left font-medium">Simulated Result</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">MTN Mobile Money</td>
                <td className="px-4 py-2"><code>+233200000001</code></td>
                <td className="px-4 py-2">Successful payment</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">MTN Mobile Money</td>
                <td className="px-4 py-2"><code>+233200000002</code></td>
                <td className="px-4 py-2">Failed payment (insufficient funds)</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">AirtelTigo Money</td>
                <td className="px-4 py-2"><code>+233270000001</code></td>
                <td className="px-4 py-2">Successful payment</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">AirtelTigo Money</td>
                <td className="px-4 py-2"><code>+233270000002</code></td>
                <td className="px-4 py-2">Failed payment (user cancelled)</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">Vodafone Cash</td>
                <td className="px-4 py-2"><code>+233500000001</code></td>
                <td className="px-4 py-2">Successful payment</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">Vodafone Cash</td>
                <td className="px-4 py-2"><code>+233500000002</code></td>
                <td className="px-4 py-2">Failed payment (timeout)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          Card Payment Test Data
        </h3>
        <p className="leading-7">
          Use these test cards for simulating card payments:
        </p>
        <div className="my-6 overflow-y-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-muted">
                <th className="px-4 py-2 text-left font-medium">Card Type</th>
                <th className="px-4 py-2 text-left font-medium">Card Number</th>
                <th className="px-4 py-2 text-left font-medium">Expiry</th>
                <th className="px-4 py-2 text-left font-medium">CVV</th>
                <th className="px-4 py-2 text-left font-medium">Result</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">VISA</td>
                <td className="px-4 py-2"><code>4111 1111 1111 1111</code></td>
                <td className="px-4 py-2">Any future date</td>
                <td className="px-4 py-2">123</td>
                <td className="px-4 py-2">Successful</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">VISA (3DS)</td>
                <td className="px-4 py-2"><code>4242 4242 4242 4242</code></td>
                <td className="px-4 py-2">Any future date</td>
                <td className="px-4 py-2">123</td>
                <td className="px-4 py-2">Successful with 3DS</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">MasterCard</td>
                <td className="px-4 py-2"><code>5555 5555 5555 4444</code></td>
                <td className="px-4 py-2">Any future date</td>
                <td className="px-4 py-2">123</td>
                <td className="px-4 py-2">Successful</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">VISA (Declined)</td>
                <td className="px-4 py-2"><code>4000 0000 0000 0002</code></td>
                <td className="px-4 py-2">Any future date</td>
                <td className="px-4 py-2">123</td>
                <td className="px-4 py-2">Declined</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">MasterCard (Declined)</td>
                <td className="px-4 py-2"><code>5105 1051 0510 5100</code></td>
                <td className="px-4 py-2">Any future date</td>
                <td className="px-4 py-2">123</td>
                <td className="px-4 py-2">Declined</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-muted p-4 rounded-md my-4">
          <p className="font-medium">3D Secure Testing:</p>
          <p className="text-sm mt-2">For cards that trigger 3D Secure in the sandbox, use any value for the authentication code. In the sandbox, 3D Secure simulations always succeed when you provide any value.</p>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Testing Scenarios
        </h2>

        <p className="leading-7">
          To thoroughly test your integration, implement these test scenarios:
        </p>

        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          1. Basic Payment Flows
        </h3>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>Successful payment with each supported payment method</li>
          <li>Failed payment with each supported payment method</li>
          <li>Cancelled payment (customer abandons payment)</li>
          <li>Expired transaction (payment not completed within time limit)</li>
        </ul>

        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          2. Notification Handling
        </h3>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>IPN (webhook) received and processed correctly</li>
          <li>Success URL redirect handling</li>
          <li>Cancelled URL redirect handling</li>
          <li>Status check API integration working properly</li>
        </ul>

        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          3. Error Scenarios
        </h3>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>Missing required parameters (e.g., merchant_key, invoice_id, total)</li>
          <li>Invalid secure_hash verification</li>
          <li>Duplicate invoice_id handling</li>
          <li>Network timeout and retry mechanisms</li>
        </ul>

        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          4. Edge Cases
        </h3>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>Very small transaction amounts (e.g., 0.01)</li>
          <li>Large transaction amounts (e.g., 9999.99)</li>
          <li>Special characters in description, invoice_id, etc.</li>
          <li>Multiple concurrent transactions</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Simulating Specific Scenarios
        </h2>

        <p className="leading-7">
          You can simulate specific payment scenarios in the sandbox by using special values:
        </p>

        <div className="my-6 overflow-y-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-muted">
                <th className="px-4 py-2 text-left font-medium">Scenario</th>
                <th className="px-4 py-2 text-left font-medium">How to Simulate</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">Transaction Timeout</td>
                <td className="px-4 py-2">Use an amount of exactly 0.01 in the total field</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">Network Error</td>
                <td className="px-4 py-2">Use an amount of exactly 0.02 in the total field</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">Insufficient Funds</td>
                <td className="px-4 py-2">Use an amount of exactly 0.03 in the total field</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">Customer Cancellation</td>
                <td className="px-4 py-2">Use an amount of exactly 0.04 in the total field</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">Delayed Processing</td>
                <td className="px-4 py-2">Use an amount of exactly 0.05 in the total field</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Integration Verification Checklist
        </h2>

        <p className="leading-7">
          Before going live, verify that your integration meets these requirements:
        </p>

        <div className="my-6 overflow-y-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-muted">
                <th className="px-4 py-2 text-left font-medium">Category</th>
                <th className="px-4 py-2 text-left font-medium">Verification Item</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">Authentication</td>
                <td className="px-4 py-2">Secure hash implementation works correctly</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">Payment Flow</td>
                <td className="px-4 py-2">All supported payment methods can be initiated successfully</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">Notifications</td>
                <td className="px-4 py-2">IPN webhook endpoint receives and processes notifications</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">Status Checks</td>
                <td className="px-4 py-2">Payment status verification is implemented correctly</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">Error Handling</td>
                <td className="px-4 py-2">Application handles failed payments gracefully</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">Idempotency</td>
                <td className="px-4 py-2">System prevents duplicate order processing</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">UI/UX</td>
                <td className="px-4 py-2">User interface clearly communicates payment status</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">Security</td>
                <td className="px-4 py-2">Merchant credentials are stored securely (not in source code)</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">Environment</td>
                <td className="px-4 py-2">Code to switch between sandbox and production environments exists</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Going Live Checklist
        </h2>

        <p className="leading-7">
          When you're ready to move from sandbox to production:
        </p>

        <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">
          <li>
            <strong>Complete all testing:</strong> Ensure all test scenarios pass in the sandbox environment
          </li>
          <li>
            <strong>Request production credentials:</strong> Contact EcobankPay support to obtain production credentials
          </li>
          <li>
            <strong>Update configuration:</strong> Change API endpoints and credentials to production values
          </li>
          <li>
            <strong>Implement logging:</strong> Ensure comprehensive logging is in place for troubleshooting
          </li>
          <li>
            <strong>Set up monitoring:</strong> Implement alerts for payment failures or abnormal patterns
          </li>
          <li>
            <strong>Perform a test transaction:</strong> Make a small real payment to verify the production setup
          </li>
          <li>
            <strong>Document the process:</strong> Create internal documentation for handling payment issues
          </li>
        </ol>

        <div className="bg-muted p-4 rounded-md my-4">
          <p className="font-medium">Production Support:</p>
          <p className="text-sm mt-2">Once live, EcobankPay's support team can be reached at <code>support@ecobankpay.com</code> or by phone at +233 XX XXX XXXX for urgent issues.</p>
        </div>
      </div>

      <div className="flex justify-between mt-10">
        <Link href="/guides/webhooks" className="text-primary underline hover:text-primary/80">
          ← Webhooks Setup
        </Link>
        <Link href="/guides" className="text-primary underline hover:text-primary/80">
          Back to Guides →
        </Link>
      </div>
    </div>
  )
}
