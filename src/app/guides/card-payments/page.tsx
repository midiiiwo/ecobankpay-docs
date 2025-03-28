import { Metadata } from "next"
import Link from "next/link"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { InfoIcon } from "lucide-react"

export const metadata: Metadata = {
  title: "EcobankPay Card Payments Integration",
  description: "Integrate card payment methods with EcobankPay",
}

export default function CardPaymentsGuidePage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Card Payments Integration
        </h1>
        <p className="text-lg text-muted-foreground">
          Learn how to accept debit and credit card payments through EcobankPay
        </p>
      </div>

      <Alert>
        <InfoIcon className="h-4 w-4" />
        <AlertTitle>Supported Card Schemes</AlertTitle>
        <AlertDescription>
          EcobankPay supports VISA and MasterCard payments with secure 3D Secure authentication where available.
        </AlertDescription>
      </Alert>

      <div className="space-y-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Overview
        </h2>
        <p className="leading-7">
          Card payment integration with EcobankPay allows your customers to make payments using their credit or debit cards. The integration process follows these general steps:
        </p>
        <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">
          <li>Initialize a payment request to EcobankPay</li>
          <li>Redirect the customer to the EcobankPay secure payment page</li>
          <li>Customer enters card details and completes 3D Secure authentication if required</li>
          <li>EcobankPay processes the payment and notifies your application</li>
          <li>Verify the payment status using the status check endpoint</li>
        </ol>
      </div>

      <div className="space-y-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Integration Steps
        </h2>

        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          1. Initiate Card Payment Request
        </h3>
        <p className="leading-7">
          To start a card payment, send a POST request to the EcobankPay card payment endpoint:
        </p>
        <div className="my-4 p-4 bg-muted rounded-md">
          <code>POST https://pgw.paywithonline.com/v1/card_payments</code>
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
                <td className="px-4 py-2 font-medium">generate_checkout_url</td>
                <td className="px-4 py-2">Y</td>
                <td className="px-4 py-2">Set to 'true' to receive a hosted checkout page URL</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">secure_hash</td>
                <td className="px-4 py-2">Y</td>
                <td className="px-4 py-2">HMAC SHA-256 hash of sorted request parameters</td>
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
                <td className="px-4 py-2 font-medium">success_url</td>
                <td className="px-4 py-2">N</td>
                <td className="px-4 py-2">URL to redirect customer after successful payment</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">cancelled_url</td>
                <td className="px-4 py-2">N</td>
                <td className="px-4 py-2">URL to redirect customer if payment is cancelled</td>
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
          2. Creating the Secure Hash
        </h3>
        <p className="leading-7">
          The secure_hash is critical for card transactions to ensure request integrity. Create it using these steps:
        </p>
        <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">
          <li>Sort the request parameters alphabetically by parameter name</li>
          <li>Concatenate the parameter name-value pairs as name=value</li>
          <li>Apply HMAC SHA-256 using your merchant secret as the key</li>
          <li>Convert the result to a hexadecimal string</li>
        </ol>

        <div className="my-4 p-4 bg-muted rounded-md overflow-auto">
          <p className="mb-2 font-medium">Example:</p>
          <pre>{`// Parameters (sorted alphabetically)
description=Payment for Order #12345
invoice_id=INV12345
merchant_key=abcdef1234-f5d6-4931-8544-58dc97a5
total=10.00

// Concatenated string
"invoice_id=INV12345&merchant_key=abcdef1234-f5d6-4931-8544-58dc97a5&total=10.00"

// Apply HMAC SHA-256 with your merchant secret
secure_hash = HMAC_SHA256(concatenated_string, merchant_secret)
`}</pre>
        </div>

        <div className="bg-muted p-4 rounded-md my-4">
          <p className="font-medium">Implementation Example:</p>
          <p className="text-sm mt-2">You can find example hashing implementations at:</p>
          <p className="text-sm mt-1">
            <Link href="https://gist.github.com/jasny/2200937201863415ebd206fe0f7b74982e61863674a5c1d" className="text-primary hover:underline" target="_blank">
              https://gist.github.com/jasny/2200937201863415ebd206fe0f7b74982e61863674a5c1d
            </Link>
          </p>
        </div>

        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          3. Sample Request
        </h3>
        <p className="leading-7">
          Here's an example of a card payment request:
        </p>
        <div className="my-4 p-4 bg-muted rounded-md overflow-auto">
          <pre>{`POST https://pgw.paywithonline.com/v1/card_payments
Content-Type: application/json

{
  "merchant_key": "abcdef1234-f5d6-4931-8544-58dc97a5",
  "invoice_id": "INV12345",
  "total": 10.00,
  "description": "Payment for Order #12345",
  "email": "customer@example.com",
  "number": "+233201234567",
  "generate_checkout_url": true,
  "success_url": "https://yourwebsite.com/payment/success",
  "cancelled_url": "https://yourwebsite.com/payment/cancelled",
  "ipn_url": "https://yourwebsite.com/api/payment-webhook",
  "secure_hash": "d4f321f8fddd0e7cc24e5d9bc321ea5c25c6f05d44401f7fb0b9f2a3cc4c"
}`}</pre>
        </div>

        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          4. Response Handling
        </h3>
        <p className="leading-7">
          Upon successful submission, you'll receive a JSON response with payment details:
        </p>
        <div className="my-4 p-4 bg-muted rounded-md overflow-auto">
          <pre>{`{
  "success": true,
  "url": "https://pgw.paywithonline.com/checkout/7785598425589933",
  "tx_reference": "ECO123456789",
  "message": "Payment process initiated"
}`}</pre>
        </div>

        <p className="leading-7">
          The key parameters in the response:
        </p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li><strong>url:</strong> The checkout URL to redirect the customer to</li>
          <li><strong>tx_reference:</strong> EcobankPay's unique transaction reference</li>
          <li><strong>success:</strong> Indicates if the request was accepted (not payment completion)</li>
        </ul>

        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          5. Redirect the Customer
        </h3>
        <p className="leading-7">
          Redirect your customer to the URL provided in the response. This secure page will:
        </p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>Collect the customer's card details</li>
          <li>Implement 3D Secure verification if supported by the card issuer</li>
          <li>Process the payment and show the result to the customer</li>
        </ul>

        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          6. Payment Notification Handling
        </h3>
        <p className="leading-7">
          EcobankPay will notify your application about payment status in two ways:
        </p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>Redirect to your <code>success_url</code> or <code>cancelled_url</code> based on payment outcome</li>
          <li>POST request to your <code>ipn_url</code> with payment details and status (if provided)</li>
        </ul>

        <div className="bg-muted p-4 rounded-md my-4">
          <p className="font-medium">Card-Specific Response Parameters:</p>
          <p className="text-sm mt-2">For card payments, EcobankPay includes additional parameters in the extra object:</p>
          <ul className="list-disc ml-5 mt-2 text-sm">
            <li><strong>psp_response_code:</strong> Card processor response code</li>
            <li><strong>psp_response_msg:</strong> Explanation of the card transaction result</li>
          </ul>
        </div>

        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          7. Verify Payment Status
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
  "buyer_firstname": "John",
  "buyer_lastname": "Doe",
  "buyer_email": "customer@example.com",
  "buyer_phone": "+233201234567",
  "invoice_id": "INV12345",
  "amount": 10.00,
  "as_at": "2023-03-28T14:22:30Z",
  "narration": "Payment for Order #12345"
}`}</pre>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          3D Secure Authentication
        </h2>
        <p className="leading-7">
          EcobankPay automatically handles 3D Secure authentication for eligible cards. This process:
        </p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>Provides an additional layer of security for online card transactions</li>
          <li>Requires the cardholder to complete an authentication step with their bank</li>
          <li>Reduces the risk of fraud and chargebacks</li>
          <li>Is fully managed by the EcobankPay checkout flow</li>
        </ul>
        <p className="leading-7">
          No additional integration is required on your end to support 3D Secure - it's built into the card payment flow.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Error Handling
        </h2>
        <p className="leading-7">
          Common errors you might encounter during card payment integration:
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
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">GW-020</td>
                <td className="px-4 py-2">Invalid secure_hash value</td>
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
          Additional security measures for card payments:
        </p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>Always use HTTPS for all communication with EcobankPay APIs</li>
          <li>Never store card details on your servers</li>
          <li>The secure_hash is critically important for card transactions - implement it properly</li>
          <li>EcobankPay's hosted checkout page is PCI-DSS compliant, minimizing your compliance burden</li>
          <li>Always verify payment status using the status check endpoint before fulfilling orders</li>
        </ul>
      </div>

      <div className="flex justify-between mt-10">
        <Link href="/guides/mobile-money" className="text-primary underline hover:text-primary/80">
          ← Mobile Money Integration
        </Link>
        <Link href="/guides/qr-code" className="text-primary underline hover:text-primary/80">
          QR Code Payments →
        </Link>
      </div>
    </div>
  )
}
