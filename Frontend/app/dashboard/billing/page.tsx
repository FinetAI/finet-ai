import { Badge } from "@/app/components/ui/badge"
import { Button } from "@/app/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { CreditCard, Download, Receipt, TrendingUp } from "lucide-react"

const invoices = [
  { id: "INV-1048", date: "Aug 31, 2026", amount: "$49.00", status: "Paid" },
  { id: "INV-1031", date: "Jul 31, 2026", amount: "$49.00", status: "Paid" },
  { id: "INV-1014", date: "Jun 30, 2026", amount: "$49.00", status: "Paid" },
]

export default function BillingPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white">Billing</h2>
        <p className="mt-1 text-sm text-[#00FF00]/70">Review your subscription, payment method, and invoices.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="bg-black border border-[#00FF00]/30 lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <TrendingUp className="h-5 w-5 text-[#00FF00]" />
              Pro Trader Plan
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="flex flex-col gap-4 rounded-lg border border-[#00FF00]/20 bg-[#0A0A0A] p-5 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-3xl font-bold text-[#00FF00]">$49/mo</p>
                <p className="mt-1 text-sm text-[#00FF00]/70">Renews on Sep 30, 2026</p>
              </div>
              <Badge className="w-fit bg-[#00FF00] text-black hover:bg-[#00FF00]/90">Active</Badge>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {["Unlimited watchlists", "Advanced AI signals", "Priority alerts"].map((feature) => (
                <div key={feature} className="rounded-lg border border-[#00FF00]/20 bg-[#0A0A0A] p-4 text-sm text-white">
                  {feature}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-black border border-[#00FF00]/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <CreditCard className="h-5 w-5 text-[#00FF00]" />
              Payment Method
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-lg border border-[#00FF00]/20 bg-[#0A0A0A] p-4">
              <p className="font-medium text-white">Visa ending in 4242</p>
              <p className="mt-1 text-sm text-[#00FF00]/70">Expires 12/28</p>
            </div>
            <Button className="w-full bg-[#00FF00] text-black hover:bg-[#00FF00]/90">Update Card</Button>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-black border border-[#00FF00]/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-white">
            <Receipt className="h-5 w-5 text-[#00FF00]" />
            Invoice History
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {invoices.map((invoice) => (
            <div
              key={invoice.id}
              className="flex flex-col gap-3 rounded-lg border border-[#00FF00]/20 bg-[#0A0A0A] p-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="font-medium text-white">{invoice.id}</p>
                <p className="text-sm text-[#00FF00]/70">{invoice.date}</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-white">{invoice.amount}</span>
                <Badge variant="outline" className="border-[#00FF00]/40 text-[#00FF00]">
                  {invoice.status}
                </Badge>
                <Button size="icon" variant="ghost" className="text-[#00FF00] hover:bg-[#00FF00]/10 hover:text-[#00FF00]">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
