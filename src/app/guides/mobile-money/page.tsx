import { Metadata } from "next"
import Link from "next/link"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { InfoIcon } from "lucide-react"

export const metadata: Metadata = {
  title: "EcobankPay Mobile Money Integration",
  description: "Integrate mobile money payment methods with EcobankPay",
}

export default function MobileMoneyGuidePage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Mobile Money Integration
        </h1>
        <p className="text-lg text-muted-foreground">
          Learn how to accept mobile money payments through EcobankPay
        </p>
      </div>

      <Alert>
        <InfoIcon className="h-4 w-4" />
        <AlertTitle>Supported Mobile Money Providers</AlertTitle>
        <AlertDescription>
          EcobankPay supports MTN Mobile Money, AirtelTigo Money, and Vodafone Cash across multiple African markets.
        </AlertDescription>
      </Alert>

      <div className="space-y-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Overview
        </h2>
        <p className="leading-7">
          Mobile money integration with EcobankPay allows your customers to pay using their mobile wallets. The integration follows these general steps:
        </p>
        <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">
          <li>Initialize a payment request to EcobankPay</li>
          <li>Redirect the customer to the EcobankPay checkout page</li>
          <li>Customer completes payment on their mobile device</li>
          <li>EcobankPay notifies your application of payment status</li>
          <li>Verify the payment status using the status check endpoint</li>
        </ol>
      </div>

      <div className="space-y-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Integration Steps
        </h2>

        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          1. Initiate Payment Request
        </h3>
        <p className="leading-7">
          To start a mobile money payment, send a POST request to the EcobankPay mobile agents endpoint:
        </p>
        <div className="my-4 p-4 bg-muted rounded-md">
          <code>POST https://pgw.paywithonline.com/v1/mobile_agents_v2</code>
        </div>

        <p className="leading-7">
          The request body must include the following required parameters:
        </p>
        <div className="my-6 overflow-y-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-muted">
                <th className="px-4 py-2 text-left font-medium">Parameter</th>
                <th className="px-4 py-2 text-left font-medium">Required</th>
                <th className="px-4 py-2 text-left font-medium">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">merchant_key</td>
                <td className="px-4 py-2">Y</td>
                <td className="px-4 py-2">Your unique assigned Merchant Key</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">invoice_id</td>
                <td className="px-4 py-2">Y</td>
                <td className="px-4 py-2">Your internally generated transaction invoice ID (unique, max 25 chars)</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">total</td>
                <td className="px-4 py-2">Y</td>
                <td className="px-4 py-2">The total payment amount for the transaction</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">success_url</td>
                <td className="px-4 py-2">N</td>
                <td className="px-4 py-2">URL to redirect customer after successful payment</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">cancelled_url</td>
                <td className="px-4 py-2">N</td>
                <td className="px-4 py-2">URL to redirect customer if payment is cancelled</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="leading-7">
          Optional parameters that enhance the payment experience:
        </p>
        <div className="my-6 overflow-y-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-muted">
                <th className="px-4 py-2 text-left font-medium">Parameter</th>
                <th className="px-4 py-2 text-left font-medium">Required</th>
                <th className="px-4 py-2 text-left font-medium">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">number</td>
                <td className="px-4 py-2">N</td>
                <td className="px-4 py-2">Customer's phone number (for SMS notifications)</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">email</td>
                <td className="px-4 py-2">N</td>
                <td className="px-4 py-2">Customer's email address (for email notifications)</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">name</td>
                <td className="px-4 py-2">N</td>
                <td className="px-4 py-2">Customer's name</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">description</td>
                <td className="px-4 py-2">N</td>
                <td className="px-4 py-2">Description of the payment or order details</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">ipn_url</td>
                <td className="px-4 py-2">N</td>
                <td className="px-4 py-2">URL for instant payment notifications</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          2. Sample Request
        </h3>
        <p className="leading-7">
          Here's an example of a mobile money payment request:
        </p>
        <div className="my-4 p-4 bg-muted rounded-md overflow-auto">
          <pre>{`POST https://pgw.paywithonline.com/v1/mobile_agents_v2
Content-Type: application/json

{
  "merchant_key": "abcdef1234-f5d6-4931-8544-58dc97a5",
  "invoice_id": "INV12345",
  "total": 10.00,
  "description": "Payment for Order #12345",
  "email": "customer@example.com",
  "number": "+233201234567",
  "success_url": "https://yourwebsite.com/payment/success",
  "cancelled_url": "https://yourwebsite.com/payment/cancelled",
  "ipn_url": "https://yourwebsite.com/api/payment-webhook",
  "secure_hash": "d4f321f8fddd0e7cc24e5d9bc321ea5c25c6f05d44401f7fb0b9f2a3cc4c"
}`}</pre>
        </div>

        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          3. Response Handling
        </h3>
        <p className="leading-7">
          Upon successful submission, you'll receive a JSON response with payment details:
        </p>
        <div className="my-4 p-4 bg-muted rounded-md overflow-auto">
          <pre>{`{
  "invoice_id": "INV12345",
  "tx_reference": "ECO123456789",
  "status_code": 0,
  "status": "success",
  "message": "Process started",
  "checkout_url": "https://pgw.paywithonline.com/7785598425589933",
  "tx_token": "2198cskdnv7785598425589933"
}`}</pre>
        </div>

        <p className="leading-7">
          The key parameters in the response:
        </p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li><strong>checkout_url:</strong> URL to redirect the customer to complete payment</li>
          <li><strong>tx_reference:</strong> EcobankPay's unique transaction reference</li>
          <li><strong>status:</strong> Initial transaction status (success indicates request accepted)</li>
        </ul>

        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          4. Redirect the Customer
        </h3>
        <p className="leading-7">
          Redirect your customer to the <code>checkout_url</code> provided in the response. This page will display payment instructions and options for the customer.
        </p>

        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          5. Payment Notification Handling
        </h3>
        <p className="leading-7">
          EcobankPay will notify your application about payment status in two ways:
        </p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>Redirect to your <code>success_url</code> or <code>cancelled_url</code> based on payment outcome</li>
          <li>POST request to your <code>ipn_url</code> with payment details (if provided)</li>
        </ul>

        <div className="bg-muted p-4 rounded-md my-4">
          <p className="font-medium">Important:</p>
          <p className="text-sm">The IPN notification does not confirm payment. Always verify payment status using the status check endpoint.</p>
        </div>

        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          6. Verify Payment Status
        </h3>
        <p className="leading-7">
          To verify the payment status, make a GET request to the transaction status endpoint:
        </p>
        <div className="my-4 p-4 bg-muted rounded-md">
          <code>GET https://pgw.paywithonline.com/v1/gateway/json_status_chk?invoice_id=INV12345&merchant_key=YOUR_MERCHANT_KEY</code>
        </div>

        <p className="leading-7">
          The response will include the current transaction status:
        </p>
        <div className="my-4 p-4 bg-muted rounded-md overflow-auto">
          <pre>{`{
  "status": "paid",
  "status_reason": "",
  "invoice_id": "INV12345",
  "amount": 10.00,
  "as_at": "2023-03-28T14:22:30Z",
  "narration": "Payment for Order #12345"
}`}</pre>
        </div>

        <p className="leading-7">
          Possible status values:
        </p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li><strong>new:</strong> Payment transaction initiated but not completed</li>
          <li><strong>paid:</strong> Payment successfully completed</li>
          <li><strong>cancelled:</strong> Payment cancelled by customer</li>
          <li><strong>awaiting_payment:</strong> Payment pending, customer has not completed or cancelled</li>
          <li><strong>failed:</strong> Transaction failed (check status_reason for details)</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Error Handling
        </h2>
        <p className="leading-7">
          Common errors you might encounter during mobile money integration:
        </p>
        <div className="my-6 overflow-y-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-muted">
                <th className="px-4 py-2 text-left font-medium">Error Code</th>
                <th className="px-4 py-2 text-left font-medium">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">GW-001</td>
                <td className="px-4 py-2">merchant_key missing or empty</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">GW-002</td>
                <td className="px-4 py-2">invoice_id missing or empty</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">GW-003</td>
                <td className="px-4 py-2">total/amount value missing or empty</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">GW-009</td>
                <td className="px-4 py-2">Merchant is deactivated from receiving payments</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Security Considerations
        </h2>
        <p className="leading-7">
          To ensure secure transactions:
        </p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>Create an HMAC SHA-256 hash of the request parameters for the secure_hash field</li>
          <li>Always verify payment status using the status check endpoint before fulfilling orders</li>
          <li>Store your merchant secret securely and never expose it in client-side code</li>
          <li>Use HTTPS for all communication with EcobankPay APIs</li>
        </ul>
      </div>

      <div className="flex justify-between mt-10">
        <Link href="/guides/setup" className="text-primary underline hover:text-primary/80">
          ← Setup Guide
        </Link>
        <Link href="/guides/card-payments" className="text-primary underline hover:text-primary/80">
          Card Payments →
        </Link>
      </div>
    </div>
  )
}
