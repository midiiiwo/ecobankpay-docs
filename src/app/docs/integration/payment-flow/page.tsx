import { Metadata } from "next"
import Link from "next/link"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { InfoIcon } from "lucide-react"

export const metadata: Metadata = {
  title: "Payment Flow - EcobankPay API Documentation",
  description: "Detailed payment flow diagram for EcobankPay integration",
}

export default function PaymentFlowPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Payment Flow
        </h1>
        <p className="text-lg text-muted-foreground">
          Understanding the flow of payment transactions with EcobankPay
        </p>
      </div>

      <Alert>
        <InfoIcon className="h-4 w-4" />
        <AlertTitle>Important</AlertTitle>
        <AlertDescription>
          This page explains the detailed flow of payment transactions from initiation to completion, helping you understand how EcobankPay processes payments.
        </AlertDescription>
      </Alert>

      <div className="space-y-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Payment Transaction Flow
        </h2>

        <div className="rounded-md border p-6 bg-card text-card-foreground">
          <div className="flow-chart space-y-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="flex items-start">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-primary-foreground font-bold text-lg mr-4">1</div>
                <div>
                  <h3 className="text-xl font-semibold">Customer selects items and proceeds to checkout</h3>
                  <p className="text-muted-foreground mt-1">
                    Customer browses merchant&apos;s website/app, selects products/services, and initiates the checkout process.
                  </p>
                </div>
              </div>
              <div className="absolute left-5 top-10 h-full w-0.5 bg-border"></div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="flex items-start">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-primary-foreground font-bold text-lg mr-4">2</div>
                <div>
                  <h3 className="text-xl font-semibold">Merchant creates payment request</h3>
                  <p className="text-muted-foreground mt-1">
                    Merchant creates a payment request containing the required parameters (merchant_key, invoice_id, total, etc.) and sends it to the EcobankPay API.
                  </p>
                  <div className="mt-2 rounded-md bg-muted p-4">
                    <p className="text-sm font-medium">Key Operations:</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Generate a unique invoice ID</li>
                      <li>Calculate order total</li>
                      <li>Create secure hash using merchant_key, invoice_id, and total</li>
                      <li>Send POST request to EcobankPay endpoint</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="absolute left-5 top-10 h-full w-0.5 bg-border"></div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="flex items-start">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-primary-foreground font-bold text-lg mr-4">3</div>
                <div>
                  <h3 className="text-xl font-semibold">EcobankPay returns checkout URL</h3>
                  <p className="text-muted-foreground mt-1">
                    EcobankPay processes the request, validates the secure hash, and returns a checkout URL for the customer to complete the payment.
                  </p>
                  <div className="mt-2 rounded-md bg-muted p-4">
                    <p className="text-sm font-medium">Response Content:</p>
                    <pre className="text-xs overflow-x-auto mt-2">
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
              </div>
              <div className="absolute left-5 top-10 h-full w-0.5 bg-border"></div>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <div className="flex items-start">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-primary-foreground font-bold text-lg mr-4">4</div>
                <div>
                  <h3 className="text-xl font-semibold">Customer is redirected to EcobankPay checkout</h3>
                  <p className="text-muted-foreground mt-1">
                    Merchant redirects the customer to the checkout URL provided by EcobankPay.
                  </p>
                  <div className="mt-2 rounded-md bg-muted p-4">
                    <p className="text-sm font-medium">Checkout Process:</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Customer is taken to a secure EcobankPay-hosted page</li>
                      <li>Payment options are displayed (Mobile Money, Cards, etc.)</li>
                      <li>Customer selects preferred payment method</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="absolute left-5 top-10 h-full w-0.5 bg-border"></div>
            </div>

            {/* Step 5 */}
            <div className="relative">
              <div className="flex items-start">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-primary-foreground font-bold text-lg mr-4">5</div>
                <div>
                  <h3 className="text-xl font-semibold">Customer completes payment</h3>
                  <p className="text-muted-foreground mt-1">
                    Customer enters payment details and confirms payment on the EcobankPay checkout page.
                  </p>
                  <div className="mt-2 rounded-md bg-muted p-4">
                    <p className="text-sm font-medium">Payment Methods:</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Mobile Money: Customer enters phone number and confirms payment on mobile device</li>
                      <li>Card Payment: Customer enters card details and completes 3D Secure verification if required</li>
                      <li>QR Payments: Customer scans QR code with mobile banking app</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="absolute left-5 top-10 h-full w-0.5 bg-border"></div>
            </div>

            {/* Step 6 */}
            <div className="relative">
              <div className="flex items-start">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-primary-foreground font-bold text-lg mr-4">6</div>
                <div>
                  <h3 className="text-xl font-semibold">EcobankPay processes payment</h3>
                  <p className="text-muted-foreground mt-1">
                    EcobankPay processes the payment through the selected payment method provider.
                  </p>
                </div>
              </div>
              <div className="absolute left-5 top-10 h-full w-0.5 bg-border"></div>
            </div>

            {/* Step 7 */}
            <div className="relative">
              <div className="flex items-start">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-primary-foreground font-bold text-lg mr-4">7</div>
                <div>
                  <h3 className="text-xl font-semibold">Customer is redirected back to merchant site</h3>
                  <p className="text-muted-foreground mt-1">
                    After payment is completed (or cancelled), the customer is redirected back to the merchant&apos;s success_url or cancelled_url.
                  </p>
                </div>
              </div>
              <div className="absolute left-5 top-10 h-full w-0.5 bg-border"></div>
            </div>

            {/* Step 8 */}
            <div className="relative">
              <div className="flex items-start">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-primary-foreground font-bold text-lg mr-4">8</div>
                <div>
                  <h3 className="text-xl font-semibold">EcobankPay sends notification to merchant</h3>
                  <p className="text-muted-foreground mt-1">
                    EcobankPay sends a notification to the merchant&apos;s IPN URL to inform about the payment status.
                  </p>
                  <div className="mt-2 rounded-md bg-muted p-4">
                    <p className="text-sm font-medium">IPN Process:</p>
                    <ol className="list-decimal pl-5 space-y-1 text-sm">
                      <li>EcobankPay makes a GET request to merchant&apos;s IPN URL with invoice_id</li>
                      <li>Merchant receives the notification and acknowledges receipt</li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="absolute left-5 top-10 h-full w-0.5 bg-border"></div>
            </div>

            {/* Step 9 */}
            <div className="relative">
              <div className="flex items-start">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-primary-foreground font-bold text-lg mr-4">9</div>
                <div>
                  <h3 className="text-xl font-semibold">Merchant verifies payment status</h3>
                  <p className="text-muted-foreground mt-1">
                    Merchant queries the EcobankPay API to verify the payment status using the invoice_id.
                  </p>
                  <div className="mt-2 rounded-md bg-muted p-4">
                    <p className="text-sm font-medium">Status Verification:</p>
                    <ol className="list-decimal pl-5 space-y-1 text-sm">
                      <li>Merchant makes a GET request to the status check endpoint</li>
                      <li>EcobankPay returns payment status (paid, cancelled, failed, etc.)</li>
                      <li>Merchant updates order status in their system</li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="absolute left-5 top-10 h-full w-0.5 bg-border"></div>
            </div>

            {/* Step 10 */}
            <div>
              <div className="flex items-start">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-primary-foreground font-bold text-lg mr-4">10</div>
                <div>
                  <h3 className="text-xl font-semibold">Merchant fulfills order</h3>
                  <p className="text-muted-foreground mt-1">
                    If payment is successful, merchant fulfills the order and sends confirmation to the customer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Payment Lifecycle
        </h2>

        <p className="leading-7">
          A payment in the EcobankPay system can go through several states during its lifecycle:
        </p>

        <div className="rounded-md border overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-muted">
                <th className="px-4 py-2 text-left font-medium">Status</th>
                <th className="px-4 py-2 text-left font-medium">Description</th>
                <th className="px-4 py-2 text-left font-medium">Next Steps</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">new</td>
                <td className="px-4 py-2">Payment transaction is new, initiated to the respective payment network</td>
                <td className="px-4 py-2">Wait for customer to complete payment</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">awaiting_payment</td>
                <td className="px-4 py-2">Payment pending. Customer has not completed or cancelled payment yet.</td>
                <td className="px-4 py-2">Wait for customer to complete payment</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">paid</td>
                <td className="px-4 py-2">Payment made successfully by customer</td>
                <td className="px-4 py-2">Fulfill order</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">cancelled</td>
                <td className="px-4 py-2">Payment cancelled by customer</td>
                <td className="px-4 py-2">Update order status, notify customer</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium">failed</td>
                <td className="px-4 py-2">Transaction failed. Reason for failure is provided in status_reason parameter.</td>
                <td className="px-4 py-2">Review error, update order status, notify customer</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Important Considerations
        </h2>

        <ul className="ml-6 list-disc space-y-2">
          <li className="leading-7">
            <span className="font-semibold">Always verify payment status:</span> Never rely solely on the redirect to your success URL as confirmation of payment. Always verify the payment status using the status check endpoint.
          </li>
          <li className="leading-7">
            <span className="font-semibold">Handle IPN notifications properly:</span> IPN notifications are not confirmation of payment but rather a prompt to check the payment status. Always query the status check endpoint when receiving an IPN notification.
          </li>
          <li className="leading-7">
            <span className="font-semibold">Secure hash validation:</span> Always validate the secure hash in your requests to ensure data integrity.
          </li>
          <li className="leading-7">
            <span className="font-semibold">Unique invoice IDs:</span> Always use unique invoice IDs for each transaction to avoid confusion and ensure proper tracking.
          </li>
          <li className="leading-7">
            <span className="font-semibold">Error handling:</span> Implement comprehensive error handling to provide a smooth experience for your customers.
          </li>
        </ul>
      </div>

      <div className="flex justify-end">
        <Link href="/api/request" className="text-primary underline hover:text-primary/80">
          Next: API Reference →
        </Link>
      </div>
    </div>
  )
}
