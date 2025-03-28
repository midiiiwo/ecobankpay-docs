import { Metadata } from "next"
import Link from "next/link"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { InfoIcon } from "lucide-react"

export const metadata: Metadata = {
  title: "EcobankPay QR Code Payments",
  description: "Integrate QR code payment solutions with EcobankPay",
}

export default function QRCodeGuidePage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          QR Code Payments
        </h1>
        <p className="text-lg text-muted-foreground">
          Implement scan-to-pay QR code solutions with EcobankPay
        </p>
      </div>

      <Alert>
        <InfoIcon className="h-4 w-4" />
        <AlertTitle>Multi-Channel Payment Method</AlertTitle>
        <AlertDescription>
          QR code payments allow customers to easily pay using their mobile devices by simply scanning a code. EcobankPay supports both static and dynamic QR codes.
        </AlertDescription>
      </Alert>

      <div className="space-y-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Overview
        </h2>
        <p className="leading-7">
          QR code integration with EcobankPay enables contactless payments through scannable codes. The integration follows these general steps:
        </p>
        <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">
          <li>Generate a QR code through the EcobankPay API</li>
          <li>Display the QR code to the customer</li>
          <li>Customer scans the code using their banking or payment app</li>
          <li>EcobankPay processes the payment and notifies your application</li>
          <li>Verify the payment status using the status check endpoint</li>
        </ol>
      </div>

      <div className="space-y-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Types of QR Codes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-6">
            <h3 className="font-semibold text-xl mb-3">Static QR Codes</h3>
            <ul className="list-disc ml-6 space-y-2">
              <li>Permanent and reusable</li>
              <li>Customer enters the payment amount</li>
              <li>One QR code for multiple transactions</li>
              <li>Ideal for in-store/physical locations</li>
              <li>Can be printed on materials</li>
            </ul>
          </div>

          <div className="border rounded-lg p-6">
            <h3 className="font-semibold text-xl mb-3">Dynamic QR Codes</h3>
            <ul className="list-disc ml-6 space-y-2">
              <li>Generated per transaction</li>
              <li>Pre-set payment amount</li>
              <li>Expires after use or time limit</li>
              <li>Ideal for e-commerce/online payments</li>
              <li>Can include transaction details</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Integration Steps for Dynamic QR
        </h2>

        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          1. Generate Dynamic QR Code
        </h3>
        <p className="leading-7">
          To generate a dynamic QR code, send a POST request to the EcobankPay QR code endpoint:
        </p>
        <div className="my-4 p-4 bg-muted rounded-md">
          <code>POST https://pgw.paywithonline.com/v1/qr_payments</code>
        </div>

        <p className="leading-7">
          Required parameters for the request:
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
                <td className="px-4 py-2">Your internally generated transaction invoice ID</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">total</td>
                <td className="px-4 py-2">Y</td>
                <td className="px-4 py-2">The payment amount for the transaction</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">qr_type</td>
                <td className="px-4 py-2">Y</td>
                <td className="px-4 py-2">Set to "dynamic" for transaction-specific QR codes</td>
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
          Optional parameters:
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
                <td className="px-4 py-2 font-medium">description</td>
                <td className="px-4 py-2">N</td>
                <td className="px-4 py-2">Description of the payment or order details</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">ipn_url</td>
                <td className="px-4 py-2">N</td>
                <td className="px-4 py-2">URL for instant payment notifications</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">expiry_time</td>
                <td className="px-4 py-2">N</td>
                <td className="px-4 py-2">Time in minutes before QR code expires (default: 30)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          2. Sample Request
        </h3>
        <p className="leading-7">
          Here's an example of a dynamic QR code generation request:
        </p>
        <div className="my-4 p-4 bg-muted rounded-md overflow-auto">
          <pre>{`POST https://pgw.paywithonline.com/v1/qr_payments
Content-Type: application/json

{
  "merchant_key": "abcdef1234-f5d6-4931-8544-58dc97a5",
  "invoice_id": "QR12345",
  "total": 25.00,
  "qr_type": "dynamic",
  "description": "Payment for Order #12345",
  "expiry_time": 15,
  "ipn_url": "https://yourwebsite.com/api/payment-webhook",
  "secure_hash": "d4f321f8fddd0e7cc24e5d9bc321ea5c25c6f05d44401f7fb0b9f2a3cc4c"
}`}</pre>
        </div>

        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          3. Response Handling
        </h3>
        <p className="leading-7">
          Upon successful submission, you'll receive a JSON response containing the QR code data:
        </p>
        <div className="my-4 p-4 bg-muted rounded-md overflow-auto">
          <pre>{`{
  "success": true,
  "qr_data": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAACXBIWXMAAAsTAAALEwEAmpwYAAAK...",
  "qr_code_url": "https://pgw.paywithonline.com/qr/7785598425589933",
  "tx_reference": "ECO123456789",
  "expires_in": 900,
  "message": "QR code generated successfully"
}`}</pre>
        </div>

        <p className="leading-7">
          The key parameters in the response:
        </p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li><strong>qr_data:</strong> Base64-encoded image data for the QR code</li>
          <li><strong>qr_code_url:</strong> URL to view the QR code (can be embedded in iframe)</li>
          <li><strong>tx_reference:</strong> EcobankPay's unique transaction reference</li>
          <li><strong>expires_in:</strong> Time in seconds until the QR code expires</li>
        </ul>

        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          4. Display the QR Code
        </h3>
        <p className="leading-7">
          You can display the QR code to your customer in several ways:
        </p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>Embed the base64 image data directly in an <code>&lt;img&gt;</code> tag</li>
          <li>Use the QR code URL in an iframe</li>
          <li>Redirect the customer to the QR code URL</li>
        </ul>

        <div className="my-4 p-4 bg-muted rounded-md overflow-auto">
          <p className="mb-2 font-medium">Example using base64 data:</p>
          <pre>{`<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAACXBIWXMAAAsTAAALEwEAmpwYAAAK..." alt="Scan to pay" />`}</pre>
        </div>

        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          5. Payment Notification Handling
        </h3>
        <p className="leading-7">
          When a customer scans the QR code and completes payment, EcobankPay will send a notification to your <code>ipn_url</code> (if provided) with payment details.
        </p>

        <div className="bg-muted p-4 rounded-md my-4">
          <p className="font-medium">Important:</p>
          <p className="text-sm">For QR code payments, you should actively poll the status endpoint to check for payment completion, as customers may take varying amounts of time to complete the payment after scanning.</p>
        </div>

        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          6. Verify Payment Status
        </h3>
        <p className="leading-7">
          To verify the payment status, make a GET request to the transaction status endpoint:
        </p>
        <div className="my-4 p-4 bg-muted rounded-md">
          <code>GET https://pgw.paywithonline.com/v1/gateway/json_status_chk?invoice_id=QR12345&merchant_key=YOUR_MERCHANT_KEY</code>
        </div>

        <p className="leading-7">
          The response will include the current transaction status:
        </p>
        <div className="my-4 p-4 bg-muted rounded-md overflow-auto">
          <pre>{`{
  "status": "paid",
  "status_reason": "",
  "invoice_id": "QR12345",
  "amount": 25.00,
  "as_at": "2023-03-28T14:22:30Z",
  "narration": "Payment for Order #12345"
}`}</pre>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Static QR Code Integration
        </h2>

        <p className="leading-7">
          To generate a static QR code that can be reused for multiple transactions:
        </p>

        <div className="my-4 p-4 bg-muted rounded-md">
          <code>POST https://pgw.paywithonline.com/v1/qr_payments</code>
        </div>

        <p className="leading-7">
          Required parameters:
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
                <td className="px-4 py-2 font-medium">qr_type</td>
                <td className="px-4 py-2">Y</td>
                <td className="px-4 py-2">Set to "static" for permanent QR codes</td>
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
          Optional parameters:
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
                <td className="px-4 py-2 font-medium">qr_identifier</td>
                <td className="px-4 py-2">N</td>
                <td className="px-4 py-2">Custom identifier for the QR code (e.g., "store-checkout-1")</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">description</td>
                <td className="px-4 py-2">N</td>
                <td className="px-4 py-2">Description for the QR code</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">ipn_url</td>
                <td className="px-4 py-2">N</td>
                <td className="px-4 py-2">URL for instant payment notifications</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="my-4 p-4 bg-muted rounded-md overflow-auto">
          <p className="mb-2 font-medium">Static QR Request Example:</p>
          <pre>{`POST https://pgw.paywithonline.com/v1/qr_payments
Content-Type: application/json

{
  "merchant_key": "abcdef1234-f5d6-4931-8544-58dc97a5",
  "qr_type": "static",
  "qr_identifier": "store-checkout-1",
  "description": "Main store checkout",
  "ipn_url": "https://yourwebsite.com/api/payment-webhook",
  "secure_hash": "9a8fdcb234e5d6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z7"
}`}</pre>
        </div>

        <p className="leading-7">
          The response will include the static QR code that you can print and display at your physical location:
        </p>

        <div className="my-4 p-4 bg-muted rounded-md overflow-auto">
          <pre>{`{
  "success": true,
  "qr_data": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAACXBIWXMAAAsTAAALEwEAmpwYAAAK...",
  "qr_code_url": "https://pgw.paywithonline.com/static-qr/store-checkout-1",
  "qr_identifier": "store-checkout-1",
  "message": "Static QR code generated successfully"
}`}</pre>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          QR Payment Flow
        </h2>
        <p className="leading-7">
          The payment process using QR codes follows this flow:
        </p>
        <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">
          <li>Merchant generates and displays QR code (dynamic or static)</li>
          <li>Customer opens their mobile banking or payment app with QR scanning capability</li>
          <li>Customer scans the QR code</li>
          <li>For static QR codes, customer enters payment amount; for dynamic, amount is pre-filled</li>
          <li>Customer confirms payment</li>
          <li>EcobankPay processes the transaction</li>
          <li>EcobankPay sends notification to merchant's system</li>
          <li>Merchant confirms payment status via the status check endpoint</li>
        </ol>
      </div>

      <div className="space-y-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Error Handling
        </h2>
        <p className="leading-7">
          Common errors in QR code integration:
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
                <td className="px-4 py-2">invoice_id missing or empty (for dynamic QR)</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">GW-003</td>
                <td className="px-4 py-2">total/amount value missing or empty (for dynamic QR)</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">GW-015</td>
                <td className="px-4 py-2">Invalid qr_type value</td>
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
          Best Practices
        </h2>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>For dynamic QR codes, set an appropriate expiry time based on your business needs</li>
          <li>Display clear instructions next to QR codes explaining how to scan and pay</li>
          <li>For static QR codes, implement a system to reconcile payments by polling the status endpoint</li>
          <li>Include your merchant name and logo on QR code displays to build customer trust</li>
          <li>Test both dynamic and static QR codes thoroughly in the sandbox environment</li>
          <li>For physical displays, ensure QR codes are printed with sufficient size and contrast</li>
        </ul>
      </div>

      <div className="flex justify-between mt-10">
        <Link href="/guides/card-payments" className="text-primary underline hover:text-primary/80">
          ← Card Payments
        </Link>
        <Link href="/guides/security" className="text-primary underline hover:text-primary/80">
          Security Best Practices →
        </Link>
      </div>
    </div>
  )
}
