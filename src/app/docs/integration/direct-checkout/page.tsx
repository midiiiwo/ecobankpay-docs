import { Metadata } from "next";
import Link from "next/link";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { InfoIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Direct Checkout v1.0 - EcobankPay API Documentation",
  description:
    "Guide to integrate EcobankPay Direct Checkout v1.0 for receiving payments",
};

export default function DirectCheckoutPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Receive Payments - Direct Checkout v1.0
        </h1>
        <p className="text-lg text-muted-foreground">
          Simplified integration guide for EcobankPay Direct Checkout
        </p>
      </div>

      <Alert>
        <InfoIcon className="h-4 w-4" />
        <AlertTitle>Gateway Overview</AlertTitle>
        <AlertDescription>
          This document describes in detail how to integrate into EcobankPay
          gateway checkout to collect customer payments from your website or
          mobile App. You can use our re-direct API to process payments from MTN
          Mobile Money, AirtelTigo Money, Telecel Cash, VISA and MasterCard and
          GhQR.
        </AlertDescription>
      </Alert>

      <div className="space-y-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Prerequisites
        </h2>

        <p className="leading-7">
          To successfully complete the integration and send requests, the
          following details are required:
        </p>

        <div className="rounded-md border overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-muted">
                <th className="px-4 py-2 text-left font-medium">
                  REQUIREMENTS
                </th>
                <th className="px-4 py-2 text-left font-medium">DESCRIPTION</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">Merchant Key</td>
                <td className="px-4 py-2">
                  This is a unique Key created by EcobankPay and assigned to
                  third parties for integration.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Initiate payment transaction request to Gateway
        </h2>

        <p className="leading-7">
          Every request to EcobankPay gateway to initiate and process payment
          transactions must contain the below parameters.
        </p>

        <p className="leading-7">
          The thing to note is that EcobankPay requires each transaction to be
          identified by a unique invoice ID and an amount due (in GHS for the
          avoidance of doubt).
        </p>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Request:</h3>
          <div className="rounded-md bg-muted p-4">
            <p className="font-medium">Endpoint:</p>
            <code className="text-sm">https://checkout.paywithonline.com/</code>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Method:</h3>
          <div className="rounded-md bg-muted p-4">
            <code className="text-sm">POST</code>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Required Parameters:</h3>
          <div className="rounded-md border overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-muted">
                  <th className="px-4 py-2 text-left font-medium">PARAMETER</th>
                  <th className="px-4 py-2 text-left font-medium">REQUIRED</th>
                  <th className="px-4 py-2 text-left font-medium">
                    DESCRIPTION
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-4 py-2 font-medium">merchant_key</td>
                  <td className="px-4 py-2">Y</td>
                  <td className="px-4 py-2">
                    Your unique assigned Merchant Key
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 font-medium">invoice_id</td>
                  <td className="px-4 py-2">Y</td>
                  <td className="px-4 py-2">
                    Your internally generated transaction invoice id. Should be
                    unique for every transaction and not more than 25 characters
                    in length.
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 font-medium">total</td>
                  <td className="px-4 py-2">Y</td>
                  <td className="px-4 py-2">
                    The total payment due for the cart. Please note that the
                    gateway will *NOT* compute this. We want the merchant to
                    compute this him/herself and to add in any tax or shipping
                    elements they may want to
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 font-medium">success_url</td>
                  <td className="px-4 py-2">N</td>
                  <td className="px-4 py-2">
                    The page to which EcobankPay will redirect the customer
                    after customer completes the EcobankPay checkout process.
                    Please note that this does not mean that payment has been
                    received!
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 font-medium">cancelled_url</td>
                  <td className="px-4 py-2">N</td>
                  <td className="px-4 py-2">
                    The page to which EcobankPay will redirect the customer
                    after customer cancels the EcobankPay checkout process.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Optional Parameters:</h3>
          <div className="rounded-md border overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-muted">
                  <th className="px-4 py-2 text-left font-medium">PARAMETER</th>
                  <th className="px-4 py-2 text-left font-medium">REQUIRED</th>
                  <th className="px-4 py-2 text-left font-medium">
                    DESCRIPTION
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-4 py-2 font-medium">extra_mobile</td>
                  <td className="px-4 py-2">N</td>
                  <td className="px-4 py-2">
                    Customer contact number (customer receives payment
                    notification via SMS if provided)
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 font-medium">extra_email</td>
                  <td className="px-4 py-2">N</td>
                  <td className="px-4 py-2">
                    Customer email address (customer receives payment Email
                    notification if provided)
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 font-medium">extra_name</td>
                  <td className="px-4 py-2">N</td>
                  <td className="px-4 py-2">Customer name</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 font-medium">description</td>
                  <td className="px-4 py-2">N</td>
                  <td className="px-4 py-2">
                    Description of payment or order description/details
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 font-medium">ipn_url</td>
                  <td className="px-4 py-2">N</td>
                  <td className="px-4 py-2">
                    This specifies the url to which EcobankPay will send
                    notification once payment is received.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold">
            Sample code on how to generate the Request:
          </h3>
          <div className="rounded-md bg-muted p-4">
            <pre className="text-sm overflow-x-auto">
              {`<form action="https://checkout.paywithonline.com/" method="post">
  <div class="modal-body">
    <div class="row">
      <div class="col-lg">
        <input name="merchant_key" type="hidden" value="your_merchant_key">
        <input name="success_url" type="hidden" value="">
        <input name="cancelled_url" type="hidden" value="">
        <input name="ipn_url" type="hidden" value="">
        Invoice ID <input name="invoice_id" type="text" value="">
        Name <input name="extra_name" type="text" value="">
        Contact <input name="extra_mobile" type="text" value="">
        Email <input name="extra_email" type="text" value="">
        Total <input name="total" type="text" value="">
      </div>
    </div>
  </div>
</form>`}
            </pre>
          </div>
        </div>

        <p className="leading-7">
          Upon successful completion of payment process or cancellation of
          payment process on EcobankPay gateway checkout page by customer, the
          customer is re-directed to the success url or cancelled url page
          specified in the request respectively.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Handling payment notifications
        </h2>

        <p className="leading-7">
          Once the customer pays or cancels an invoice, depending on your site
          setup, EcobankPay can do two things:
        </p>

        <ul className="ml-6 list-disc space-y-2">
          <li className="leading-7">
            Send an email informing you of the payment or cancellation
          </li>
          <li className="leading-7">
            Send a notification to an IPN (instant payment notification) URL for
            your application to take some automated action
          </li>
        </ul>

        <p className="leading-7">
          It is worth stressing the IPN notification from EcobankPay is not
          confirmation of a payment. Rather it is a prompt that an event of
          interest has happened to one of your invoices. It is your
          application's responsibility to query the EcobankPay gateway for
          details on the event using the status check end point. While this may
          sound complicated, it is not. Here's how it works:
        </p>

        <ol className="ml-6 list-decimal space-y-4 my-6">
          <li className="leading-7">
            Once an invoice is paid or cancelled, EcobankPay does a GET to your
            IPN URL with the invoice_id parameter. Suppose, your IPN url is{" "}
            <code className="bg-muted px-1 py-0.5 rounded text-sm">
              https://ipn_url.ecobankpay.com.gh/notify
            </code>{" "}
            and a customer pays or cancels invoice with invoice ID AA123,
            EcobankPay will perform the GET request
            <code className="bg-muted px-1 py-0.5 rounded text-sm">
              https://ipn_url.ecobankpay.com.gh/notify?invoice_id=AA123
            </code>
            . This call is meant to prompt your application that an event of
            interest has occurred with respect to this invoice.
          </li>

          <li className="leading-7">
            Your application will then make the GET call
            <code className="bg-muted px-1 py-0.5 rounded text-sm">
              https://pgw.paywithonline.com/v1/gateway/json_status_chk?invoice_id=AA123&merchant_key=YOUR_MERCHANT_KEY
            </code>{" "}
            to receive details of the event.
          </li>

          <li className="leading-7">
            EcobankPay responds to the query in the step above with a JSON
            object. Details of the response object are described as part of the
            status check end point.
          </li>
        </ol>
      </div>

      <div className="space-y-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Sample payment notification Request
        </h2>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Request:</h3>
          <div className="rounded-md bg-muted p-4">
            <p className="font-medium">Endpoint:</p>
            <code className="text-sm">
              https://pgw.paywithonline.com/v1/gateway/json_status_chk
            </code>
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
          <div className="rounded-md border overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-muted">
                  <th className="px-4 py-2 text-left font-medium">PARAMETER</th>
                  <th className="px-4 py-2 text-left font-medium">REQUIRED</th>
                  <th className="px-4 py-2 text-left font-medium">
                    DESCRIPTION
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-4 py-2 font-medium">merchant_key</td>
                  <td className="px-4 py-2">Y</td>
                  <td className="px-4 py-2">
                    Your unique assigned Merchant Key
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 font-medium">invoice_id</td>
                  <td className="px-4 py-2">Y</td>
                  <td className="px-4 py-2">
                    Invoice Id of the particular transaction whose details to
                    check
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Response Codes
        </h2>

        <p className="leading-7">
          Below is the general response received for a payment status request
          sent.
        </p>

        <div className="rounded-md border overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-muted">
                <th className="px-4 py-2 text-left font-medium">PARAMETER</th>
                <th className="px-4 py-2 text-left font-medium">VALUES</th>
                <th className="px-4 py-2 text-left font-medium">VALUE TYPE</th>
                <th className="px-4 py-2 text-left font-medium">DESCRIPTION</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">status</td>
                <td className="px-4 py-2">
                  new, paid, cancelled, awaiting_payment, failed
                </td>
                <td className="px-4 py-2">String</td>
                <td className="px-4 py-2">
                  Transaction status of payment:
                  <br />
                  <strong>new</strong>: payment transaction is new, initiated to
                  the respective payment network
                  <br />
                  <strong>paid</strong>: payment made successfully by customer
                  <br />
                  <strong>cancelled</strong>: payment cancelled by customer
                  <br />
                  <strong>awaiting_payment</strong>: payment pending. Customer
                  does not complete or cancel payment.
                  <br />
                  <strong>Failed</strong>: Transaction failed. Reason for
                  failure is provided in status_reason parameter.
                </td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">status_reason</td>
                <td className="px-4 py-2">Free text</td>
                <td className="px-4 py-2">String</td>
                <td className="px-4 py-2">
                  This parameter holds detail description for a Failed
                  Transaction status. For other status values, it is empty.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Gateway Error Codes
        </h2>

        <div className="rounded-md border overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-muted">
                <th className="px-4 py-2 text-left font-medium">#</th>
                <th className="px-4 py-2 text-left font-medium">ERROR</th>
                <th className="px-4 py-2 text-left font-medium">DESCRIPTION</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-2">1.</td>
                <td className="px-4 py-2 font-medium">GW-001</td>
                <td className="px-4 py-2">merchant_key missing or empty</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2">2.</td>
                <td className="px-4 py-2 font-medium">GW-002</td>
                <td className="px-4 py-2">invoice_id missing or empty</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2">3.</td>
                <td className="px-4 py-2 font-medium">GW-003</td>
                <td className="px-4 py-2">
                  total/amount value missing or empty
                </td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2">4.</td>
                <td className="px-4 py-2 font-medium">GW-009</td>
                <td className="px-4 py-2">
                  Merchant is deactivated from receiving payments
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Response Parameters
        </h2>

        <div className="rounded-md border overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-muted">
                <th className="px-4 py-2 text-left font-medium">PARAMETER</th>
                <th className="px-4 py-2 text-left font-medium">DESCRIPTION</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">psp_response_msg</td>
                <td className="px-4 py-2">
                  This parameter gives explanation or description of the
                  response error code for Card payments (if available).
                </td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">psp_response_code</td>
                <td className="px-4 py-2">
                  This parameter is only available for Card Payment
                  transactions. It holds the specific error code applied to a
                  transaction.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Extra Parameters
        </h2>

        <div className="rounded-md border overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-muted">
                <th className="px-4 py-2 text-left font-medium">PARAMETER</th>
                <th className="px-4 py-2 text-left font-medium">VALUES</th>
                <th className="px-4 py-2 text-left font-medium">VALUE TYPE</th>
                <th className="px-4 py-2 text-left font-medium">DESCRIPTION</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">extra</td>
                <td className="px-4 py-2"></td>
                <td className="px-4 py-2">Array Object</td>
                <td className="px-4 py-2">
                  Sub array of extra parameters available:
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="rounded-md border overflow-hidden ml-8">
          <table className="w-full">
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">channel</td>
                <td className="px-4 py-2">payment channel used by customer</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">email</td>
                <td className="px-4 py-2">
                  Email address of customer if provided in initial request
                </td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">Mobile_no</td>
                <td className="px-4 py-2">
                  Phone number of customer if provided in initial request
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex justify-between mt-8">
        <Link
          href="/docs/integration"
          className="text-primary underline hover:text-primary/80"
        >
          ← Back to Integration Guide
        </Link>
        <Link
          href="/docs/integration/payment-flow"
          className="text-primary underline hover:text-primary/80"
        >
          Next: Payment Flow →
        </Link>
      </div>
    </div>
  );
}
