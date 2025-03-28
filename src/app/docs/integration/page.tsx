import { Metadata } from "next"
import Link from "next/link"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { InfoIcon, ArrowUpRightFromSquare } from "lucide-react"

export const metadata: Metadata = {
  title: "Integration Guide - EcobankPay API Documentation",
  description: "Step-by-step guide to integrate EcobankPay into your application",
}

export default function IntegrationPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Integration Guide
        </h1>
        <p className="text-lg text-muted-foreground">
          Step-by-step guide to integrate EcobankPay into your application
        </p>
      </div>

      <Alert>
        <InfoIcon className="h-4 w-4" />
        <AlertTitle>Gateway Overview</AlertTitle>
        <AlertDescription>
          This document describes in detail how to integrate into EcobankPay gateway checkout using the semi-direct option to collect customer payments from your website or mobile App.
        </AlertDescription>
      </Alert>

      <div className="space-y-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Integration Flow
        </h2>

        <p className="leading-7">
          The integration with EcobankPay follows these high-level steps:
        </p>

        <ol className="ml-6 list-decimal space-y-4 my-6">
          <li className="leading-7">
            <p className="font-semibold">Merchant creates a payment request</p>
            <p>
              The merchant creates a payment request by sending required parameters (including the merchant key, invoice ID, and total amount) to the EcobankPay API endpoint.
            </p>
          </li>

          <li className="leading-7">
            <p className="font-semibold">EcobankPay returns a checkout URL</p>
            <p>
              EcobankPay processes the request and returns a checkout URL where the customer will be redirected to complete the payment.
            </p>
          </li>

          <li className="leading-7">
            <p className="font-semibold">Customer completes payment on EcobankPay</p>
            <p>
              The customer is redirected to the checkout URL where they select their preferred payment method (Mobile Money, Card, etc.) and complete the payment.
            </p>
          </li>

          <li className="leading-7">
            <p className="font-semibold">Customer is redirected back to merchant site</p>
            <p>
              After the payment is completed (or cancelled), the customer is redirected back to the merchant site using the success or cancelled URL provided in the initial request.
            </p>
          </li>

          <li className="leading-7">
            <p className="font-semibold">EcobankPay sends notification to merchant</p>
            <p>
              EcobankPay sends a notification to the merchant&apos;s IPN URL to inform them about the payment status.
            </p>
          </li>

          <li className="leading-7">
            <p className="font-semibold">Merchant verifies payment status</p>
            <p>
              The merchant verifies the payment status by querying the EcobankPay API with the invoice ID.
            </p>
          </li>
        </ol>
      </div>

      <div className="space-y-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Step 1: Initiate Payment Request
        </h2>

        <p className="leading-7">
          To initiate a payment transaction, make a POST request to the EcobankPay API endpoint with the required parameters.
        </p>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Endpoint:</h3>
          <div className="rounded-md bg-muted p-4">
            <code className="text-sm">https://pgw.paywithonline.com/v1/mobile_agents_v2</code>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Method:</h3>
          <div className="rounded-md bg-muted p-4">
            <code className="text-sm">POST</code>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Headers:</h3>
          <div className="rounded-md bg-muted p-4">
            <code className="text-sm">Content-Type: application/json</code>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Request Body Example:</h3>
          <div className="rounded-md bg-muted p-4">
            <pre className="text-sm overflow-x-auto">
{`{
  "merchant_key": "your-merchant-key",
  "invoice_id": "unique-invoice-id",
  "total": "100.00",
  "description": "Payment for order #12345",
  "name": "Customer Name",
  "email": "customer@example.com",
  "number": "233201234567",
  "success_url": "https://your-website.com/success",
  "cancelled_url": "https://your-website.com/cancel",
  "ipn_url": "https://your-website.com/ipn-notification",
  "generate_checkout_url": true,
  "secure_hash": "calculated-hash-value"
}`}
            </pre>
          </div>
        </div>

        <p className="leading-7">
          For a complete list of request parameters and their descriptions, see the <Link href="/api/request" className="text-primary underline hover:text-primary/80">Request Parameters</Link> documentation.
        </p>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Creating the Secure Hash:</h3>
          <p className="leading-7">
            The <code className="bg-muted px-1 py-0.5 rounded text-sm">secure_hash</code> is an HMAC SHA-256 hash of the merchant_key, invoice_id, and total parameters, sorted alphabetically.
          </p>

          <div className="rounded-md bg-muted p-4">
            <pre className="text-sm overflow-x-auto">
{`// Example in JavaScript
const crypto = require('crypto');

const merchantKey = 'your-merchant-key';
const invoiceId = 'unique-invoice-id';
const total = '100.00';
const secretKey = 'your-secret-key'; // Provided by EcobankPay

// Sort parameters alphabetically and combine them
const dataToHash = \`invoice_id=\${invoiceId}&merchant_key=\${merchantKey}&total=\${total}\`;

// Create HMAC SHA-256 hash
const secureHash = crypto.createHmac('sha256', secretKey)
                         .update(dataToHash)
                         .digest('hex');
console.log(secureHash); // Use this value in your request`}
            </pre>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Step 2: Handle EcobankPay Response
        </h2>

        <p className="leading-7">
          After sending the payment request, EcobankPay will return a response with a checkout URL.
        </p>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Example Success Response:</h3>
          <div className="rounded-md bg-muted p-4">
            <pre className="text-sm overflow-x-auto">
{`{
  "invoice_id": "unique-invoice-id",
  "tx_reference": "ecobankpay-transaction-reference",
  "url": "https://pgw.paywithonline.com/v1/checkout/8a7b6c5d4e3f2g1h",
  "success": true,
  "message": "Invoice created"
}`}
            </pre>
          </div>
        </div>

        <p className="leading-7">
          If the request is successful, redirect the customer to the URL provided in the response to complete the payment.
        </p>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Example Error Response:</h3>
          <div className="rounded-md bg-muted p-4">
            <pre className="text-sm overflow-x-auto">
{`{
  "success": false,
  "error": {
    "code": "GW-001",
    "message": "merchant_key missing or empty"
  }
}`}
            </pre>
          </div>
        </div>

        <p className="leading-7">
          If the request fails, handle the error appropriately in your application.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Step 3: Payment Verification
        </h2>

        <p className="leading-7">
          After the customer completes the payment process, you should verify the payment status using the status check endpoint.
        </p>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Endpoint:</h3>
          <div className="rounded-md bg-muted p-4">
            <code className="text-sm">https://pgw.paywithonline.com/v1/gateway/json_status_chk</code>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Method:</h3>
          <div className="rounded-md bg-muted p-4">
            <code className="text-sm">GET</code>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Parameters:</h3>
          <div className="rounded-md bg-muted p-4">
            <code className="text-sm">invoice_id=unique-invoice-id&merchant_key=your-merchant-key</code>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Example Response:</h3>
          <div className="rounded-md bg-muted p-4">
            <pre className="text-sm overflow-x-auto">
{`{
  "invoice_id": "unique-invoice-id",
  "tx_reference": "ecobankpay-transaction-reference",
  "status": "paid",
  "status_reason": "",
  "amount": 100.00,
  "buyer_firstname": "Customer",
  "buyer_lastname": "Name",
  "buyer_email": "customer@example.com",
  "buyer_phone": "233201234567",
  "narration": "Payment for order #12345",
  "as_at": "2023-08-15T14:22:45Z"
}`}
            </pre>
          </div>
        </div>

        <p className="leading-7">
          For a complete list of response parameters and their descriptions, see the <Link href="/api/response" className="text-primary underline hover:text-primary/80">Response Codes</Link> documentation.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Step 4: Handling Payment Notifications
        </h2>

        <p className="leading-7">
          EcobankPay will send a notification to your IPN URL when a payment is completed or cancelled. Your application should handle these notifications appropriately.
        </p>

        <p className="leading-7">
          For detailed information on handling payment notifications, see the <Link href="/api/webhook" className="text-primary underline hover:text-primary/80">Webhook Notifications</Link> documentation.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Next Steps
        </h2>

        <ul className="ml-6 list-disc space-y-2">
          <li className="leading-7">
            Review the <Link href="/api/request" className="text-primary underline hover:text-primary/80">Request Parameters</Link> documentation for a complete list of parameters you can include in your payment requests.
          </li>
          <li className="leading-7">
            Understand the <Link href="/api/response" className="text-primary underline hover:text-primary/80">Response Codes</Link> returned by the EcobankPay API.
          </li>
          <li className="leading-7">
            Learn how to handle <Link href="/api/webhook" className="text-primary underline hover:text-primary/80">Webhook Notifications</Link> to automate your payment processing workflow.
          </li>
          <li className="leading-7">
            Familiarize yourself with the <Link href="/api/error-codes" className="text-primary underline hover:text-primary/80">Error Codes</Link> that may be returned by the API.
          </li>
          <li className="leading-7">
            Check out the <Link href="/docs/sample-code/request" className="text-primary underline hover:text-primary/80">Sample Code</Link> for practical examples of implementing the EcobankPay integration.
          </li>
        </ul>
      </div>

      <div className="flex justify-end">
        <Link href="/docs/integration/payment-flow" className="text-primary underline hover:text-primary/80">
          Next: Payment Flow →
        </Link>
      </div>
    </div>
  )
}
