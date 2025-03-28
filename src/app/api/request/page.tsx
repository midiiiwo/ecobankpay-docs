import { Metadata } from "next"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { InfoIcon } from "lucide-react"

export const metadata: Metadata = {
  title: "Request Parameters - EcobankPay API Documentation",
  description: "Detailed reference for EcobankPay API request parameters",
}

export default function RequestParametersPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Request Parameters
        </h1>
        <p className="text-lg text-muted-foreground">
          Parameters required to initiate payment transaction requests
        </p>
      </div>

      <Alert>
        <InfoIcon className="h-4 w-4" />
        <AlertTitle>Important</AlertTitle>
        <AlertDescription>
          Every request to EcobankPay gateway to initiate and process payment transactions must contain the parameters described below.
        </AlertDescription>
      </Alert>

      <div className="space-y-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          API Endpoint
        </h2>

        <div className="rounded-md bg-muted p-4">
          <p className="text-sm font-mono">
            <span className="text-blue-500 dark:text-blue-400">POST</span> https://pgw.paywithonline.com/v1/mobile_agents_v2
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">Content-Type</h3>
          <p className="leading-7">
            Your request must include the following header:
          </p>
          <div className="rounded-md bg-muted p-4">
            <p className="text-sm font-mono">Content-Type: application/json</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Required Parameters
        </h2>

        <div className="overflow-x-auto rounded-md border">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted">
                <TableHead className="w-[200px]">Parameter</TableHead>
                <TableHead className="w-[100px]">Required</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">merchant_key</TableCell>
                <TableCell>Y</TableCell>
                <TableCell>Your unique assigned Merchant Key</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">invoice_id</TableCell>
                <TableCell>Y</TableCell>
                <TableCell>Your internally generated transaction invoice id. Should be unique for every transaction and not more than 25 characters in length.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">total</TableCell>
                <TableCell>Y</TableCell>
                <TableCell>The total payment due for the cart. Please note that the gateway will *NOT* compute this. We want the merchant to compute this him/herself and to add in any tax or shipping elements they may want to.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">success_url</TableCell>
                <TableCell>N</TableCell>
                <TableCell>The page to which EcobankPay will redirect the customer after customer completes the EcobankPay checkout process. Please note that this does not mean that payment has been received!</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">cancelled_url</TableCell>
                <TableCell>N</TableCell>
                <TableCell>The page to which EcobankPay will redirect the customer after customer cancels the EcobankPay checkout process.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">number</TableCell>
                <TableCell>N</TableCell>
                <TableCell>Customer contact number (customer receives payment notification via SMS if provided)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">email</TableCell>
                <TableCell>N</TableCell>
                <TableCell>Customer email address (customer receives payment notification if provided)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">name</TableCell>
                <TableCell>N</TableCell>
                <TableCell>Customer name</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">description</TableCell>
                <TableCell>N</TableCell>
                <TableCell>Description of payment or order description/details</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">ipn_url</TableCell>
                <TableCell>N</TableCell>
                <TableCell>This specifies the url to which EcobankPay will send notification once payment is received.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">extra_outlet</TableCell>
                <TableCell>N</TableCell>
                <TableCell>Unique pre-configured Outlet/Branch ID for your merchant account. Pass this ID to record and track transactions per Outlet/Branches.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">generate_checkout_url</TableCell>
                <TableCell>Y</TableCell>
                <TableCell>EcobankPay checkout page URL would be returned as part of the response payload for customer to be redirected. Value accepted: true</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">secure_hash</TableCell>
                <TableCell>Y</TableCell>
                <TableCell>Create an HMAC SHA-256 hash of the merchant_key, invoice_id and total query string. Kindly note the parameters must be sorted (eg invoice_id=test0&merchant_key=xxx-xxx&total=1).</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Example Request
        </h2>

        <div className="bg-muted p-4 rounded-md">
          <pre className="text-sm overflow-x-auto">
{`{
  "merchant_key": "acbd1234-1234-abcd-1234-abcdef123456",
  "invoice_id": "invoice001",
  "total": "25.00",
  "description": "Ecobank payment test",
  "name": "customer name",
  "email": "customer@example.com",
  "number": "233201234567",
  "success_url": "https://example.com/success",
  "cancelled_url": "https://example.com/cancel",
  "ipn_url": "https://example.com/ipn-notification",
  "extra_outlet": "main",
  "generate_checkout_url": true,
  "secure_hash": "6df3e718f9cb74a592ad8dd87f934c1723e5dec1112f70a860b3ccef7b840eeec"
}`}
          </pre>
        </div>

        <p className="leading-7">
          Note: The <code className="bg-muted px-1 py-0.5 rounded text-sm">secure_hash</code> value is an HMAC SHA-256 hash of the sorted parameters. The secret key will be provided to you during merchant registration.
        </p>

        <div className="bg-muted p-4 rounded-md">
          <p className="text-sm font-mono break-all">
            Example hashing: HMAC SHA-256('invoice_id=invoice001&merchant_key=acbd1234-1234-abcd-1234-abcdef123456&total=25.00', 'YOUR_SECRET_KEY')
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Extra Parameters
        </h2>

        <p className="leading-7">
          The <code className="bg-muted px-1 py-0.5 rounded text-sm">extra</code> parameter is an array object that can contain additional parameters such as:
        </p>

        <div className="overflow-x-auto rounded-md border">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted">
                <TableHead>Parameter</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">channel</TableCell>
                <TableCell>Payment channel used by customer</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">email</TableCell>
                <TableCell>Email address of customer if provided in initial request</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Mobile_no</TableCell>
                <TableCell>Phone number of customer if provided in initial request</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">psp_response_code</TableCell>
                <TableCell>This parameter is only available for Card Payment transactions. It holds the specific error code applied to a transaction.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">psp_response_msg</TableCell>
                <TableCell>This parameter gives explanation or description of the response error code for Card payments (if available).</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}
